const EVENT_NAME_PATTERN = /^[a-zA-Z][a-zA-Z0-9_.:-]{0,79}$/;
const SESSION_STORAGE_KEY = "nexo:session-id";

function randomId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  if (globalThis.crypto?.getRandomValues) {
    const bytes = new Uint8Array(16);
    globalThis.crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map((value) => value.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const value = Math.floor(Math.random() * 16);
    return (character === "x" ? value : (value & 0x3) | 0x8).toString(16);
  });
}

function sessionId() {
  try {
    let id = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!id) {
      id = randomId();
      sessionStorage.setItem(SESSION_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return randomId();
  }
}

function currentPath() {
  return window.location.pathname || "/";
}

function respectsDoNotTrack() {
  const signals = [
    window.navigator?.doNotTrack,
    window.navigator?.msDoNotTrack,
    window.doNotTrack,
  ];

  return signals.some((signal) => ["1", "yes"].includes(String(signal).toLowerCase()));
}

export function createNexoTracker({
  endpoint,
  siteId,
  enabled = true,
  trackDevelopment = false,
} = {}) {
  if (!endpoint || !siteId || typeof window === "undefined") {
    return { track() {}, page() {}, destroy() {} };
  }

  const localHost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  const active = enabled && !window.__nexoAnalyticsDisabled && !respectsDoNotTrack() && (!localHost || trackDevelopment);
  const tabSessionId = active ? sessionId() : null;
  let lastPath = "";
  let destroyed = false;

  function track(eventName, path = currentPath()) {
    if (!active || destroyed || typeof eventName !== "string" || !EVENT_NAME_PATTERN.test(eventName)) return;
    const safePath = typeof path === "string" ? path.split(/[?#]/, 1)[0] || "/" : "/";
    const body = JSON.stringify({
      event_id: randomId(),
      site_id: siteId,
      session_id: tabSessionId,
      event_name: eventName,
      path: safePath,
    });
    try {
      void fetch(endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        keepalive: true,
        headers: { "Content-Type": "application/json" },
        body,
      }).catch(() => {});
    } catch {
      // Analytics must never interfere with the portfolio experience.
    }
  }

  function page(path = currentPath()) {
    if (!active || path === lastPath) return;
    lastPath = path;
    track("page_view", path);
  }

  return {
    track,
    page,
    destroy() {
      destroyed = true;
    },
  };
}
