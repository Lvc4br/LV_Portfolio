import { afterEach, describe, expect, it, vi } from "vitest";
import { createNexoTracker } from "./nexo-tracker.js";

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const COLLECT_URL = "http://127.0.0.1:8000/api/v1/collect";

function installBrowser({
  hostname = "localhost",
  doNotTrack = null,
  disabled = false,
  userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/132.0.0.0 Safari/537.36",
  platform = "Win32",
} = {}) {
  const requests = [];
  const storage = new Map();
  const windowListeners = new Map();
  const documentListeners = new Map();
  const documentMock = {
    hidden: false,
    addEventListener: (event, handler) => documentListeners.set(event, handler),
    removeEventListener: (event) => documentListeners.delete(event),
  };
  const fetchMock = vi.fn((_url, options) => {
    requests.push(JSON.parse(options.body));
    return Promise.resolve({ status: 202 });
  });

  vi.stubGlobal("window", {
    location: { hostname, pathname: "/" },
    navigator: { doNotTrack, msDoNotTrack: null, userAgent, platform },
    doNotTrack: null,
    __nexoAnalyticsDisabled: disabled,
    addEventListener: (event, handler) => windowListeners.set(event, handler),
    removeEventListener: (event) => windowListeners.delete(event),
  });
  vi.stubGlobal("document", documentMock);
  vi.stubGlobal("sessionStorage", {
    getItem: (key) => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value),
  });
  vi.stubGlobal("fetch", fetchMock);

  return { requests, fetchMock, documentMock, documentListeners, windowListeners };
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("createNexoTracker", () => {
  it("sends the required Nexo fields with a safe path and per-tab session ID", () => {
    const { requests, fetchMock } = installBrowser();
    const tracker = createNexoTracker({
      endpoint: COLLECT_URL,
      siteId: "lvc4br-lv-portfolio",
      trackDevelopment: true,
    });

    tracker.page("/work/3d/atem-mini-pro?email=private@example.com#gallery");
    tracker.page("/work/3d/atem-mini-pro#another-fragment");
    tracker.track("project_open");

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(requests).toHaveLength(2);
    expect(requests.map((event) => event.event_name)).toEqual(["page_view", "project_open"]);
    expect(requests[0]).toEqual({
      event_id: expect.stringMatching(UUID_PATTERN),
      site_id: "lvc4br-lv-portfolio",
      session_id: expect.stringMatching(UUID_PATTERN),
      event_name: "page_view",
      path: "/work/3d/atem-mini-pro",
      device_type: "desktop",
      browser_name: "chrome",
      os_name: "windows",
    });
    expect(requests[1]).toMatchObject({
      event_name: "project_open",
      device_type: "desktop",
      browser_name: "chrome",
      os_name: "windows",
    });
    expect(requests[0].session_id).toBe(requests[1].session_id);
    expect(JSON.stringify(requests)).not.toContain("private@example.com");
    expect(JSON.stringify(requests)).not.toContain("Mozilla/5.0");
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    tracker.destroy();
    const requestsAfterDestroy = fetchMock.mock.calls.length;
    tracker.track("contact_click");
    expect(fetchMock).toHaveBeenCalledTimes(requestsAfterDestroy);
  });

  it("keeps collection disabled when configuration is incomplete", () => {
    const { fetchMock } = installBrowser();
    const missingEndpoint = createNexoTracker({ siteId: "lvc4br-lv-portfolio", trackDevelopment: true });
    const missingSiteId = createNexoTracker({ endpoint: COLLECT_URL, trackDevelopment: true });

    missingEndpoint.page("/");
    missingSiteId.track("contact_click");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("respects Do Not Track and the global disable switch", () => {
    const dnt = installBrowser({ hostname: "portfolio.example", doNotTrack: "1" });
    createNexoTracker({ endpoint: "https://nexo.example/api/v1/collect", siteId: "site" })
      .track("contact_click");
    expect(dnt.fetchMock).not.toHaveBeenCalled();

    const disabled = installBrowser({ hostname: "portfolio.example", disabled: true });
    createNexoTracker({ endpoint: "https://nexo.example/api/v1/collect", siteId: "site" })
      .track("contact_click");
    expect(disabled.fetchMock).not.toHaveBeenCalled();
  });

  it("blocks localhost in production and allows it only when development tracking is enabled", () => {
    const localProduction = installBrowser();
    createNexoTracker({ endpoint: "https://nexo.example/api/v1/collect", siteId: "site" })
      .track("contact_click");
    expect(localProduction.fetchMock).not.toHaveBeenCalled();

    const localDevelopment = installBrowser();
    createNexoTracker({ endpoint: COLLECT_URL, siteId: "site", trackDevelopment: true })
      .track("contact_click");
    expect(localDevelopment.fetchMock).toHaveBeenCalledTimes(1);
  });

  it("rejects local or non-HTTPS collector URLs outside development", () => {
    const { fetchMock } = installBrowser({ hostname: "portfolio.example" });
    createNexoTracker({ endpoint: COLLECT_URL, siteId: "site" }).track("contact_click");
    createNexoTracker({ endpoint: "http://nexo.example/api/v1/collect", siteId: "site" })
      .track("contact_click");

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects invalid and reserved event names", () => {
    const { requests } = installBrowser({ hostname: "portfolio.example" });
    const tracker = createNexoTracker({
      endpoint: "https://nexo.example/api/v1/collect",
      siteId: "site",
    });

    tracker.track("123invalid");
    tracker.track("bad event");
    tracker.track("x".repeat(81));
    tracker.track("page_view");
    tracker.track("page_duration");
    tracker.track("contact_click");

    expect(requests.map((event) => event.event_name)).toEqual(["contact_click"]);
  });

  it("keeps working if sessionStorage is blocked", () => {
    const { requests } = installBrowser({ hostname: "portfolio.example" });
    vi.stubGlobal("sessionStorage", {
      getItem() { throw new Error("storage disabled"); },
      setItem() { throw new Error("storage disabled"); },
    });
    const tracker = createNexoTracker({
      endpoint: "https://nexo.example/api/v1/collect",
      siteId: "site",
    });

    tracker.track("contact_click");
    tracker.track("resume_open");

    expect(requests).toHaveLength(2);
    expect(requests[0].session_id).toMatch(UUID_PATTERN);
    expect(requests[1].session_id).toBe(requests[0].session_id);
  });

  it("silently ignores fetch failures", async () => {
    const { fetchMock } = installBrowser({ hostname: "portfolio.example" });
    fetchMock.mockRejectedValue(new Error("collector unavailable"));
    const tracker = createNexoTracker({
      endpoint: "https://nexo.example/api/v1/collect",
      siteId: "site",
    });

    expect(() => tracker.track("contact_click")).not.toThrow();
    await Promise.resolve();
  });

  it("sends active page durations with the same safe route path", () => {
    const { requests, documentMock, documentListeners } = installBrowser({ hostname: "portfolio.example" });
    let elapsed = 0;
    vi.stubGlobal("performance", { now: () => elapsed });
    const tracker = createNexoTracker({
      endpoint: "https://nexo.example/api/v1/collect",
      siteId: "site",
    });

    tracker.page("/work");
    elapsed = 1_200;
    tracker.page("/work/3d/atem-mini-pro?email=private@example.com#gallery");

    const firstDuration = requests.find((event) => event.event_name === "page_duration");
    expect(firstDuration).toMatchObject({
      path: "/work",
      duration_ms: 1_200,
      device_type: "desktop",
      browser_name: "chrome",
      os_name: "windows",
    });
    expect(requests.map((event) => event.event_name)).toEqual([
      "page_view",
      "page_duration",
      "page_view",
    ]);
    expect(JSON.stringify(requests)).not.toContain("private@example.com");

    elapsed = 1_500;
    const visibilityChange = documentListeners.get("visibilitychange");
    documentMock.hidden = true;
    visibilityChange();
    elapsed = 9_000;
    documentMock.hidden = false;
    visibilityChange();
    elapsed = 9_500;
    tracker.destroy();

    const durations = requests.filter((event) => event.event_name === "page_duration");
    expect(durations.map((event) => event.duration_ms)).toEqual([1_200, 800]);
    expect(durations[1].path).toBe("/work/3d/atem-mini-pro");
  });

  it("caps duration at one day and flushes it on pagehide", () => {
    const { requests, windowListeners } = installBrowser({ hostname: "portfolio.example" });
    let elapsed = 0;
    vi.stubGlobal("performance", { now: () => elapsed });
    const tracker = createNexoTracker({
      endpoint: "https://nexo.example/api/v1/collect",
      siteId: "site",
    });

    tracker.page("/work");
    elapsed = 86_500_000;
    windowListeners.get("pagehide")();

    expect(requests.filter((event) => event.event_name === "page_duration")[0].duration_ms)
      .toBe(86_400_000);
    tracker.destroy();
  });
});
