import { describe, expect, it } from "vitest";
import { normalizeAnalyticsPath } from "./analytics-path.js";

describe("normalizeAnalyticsPath", () => {
  it("keeps known portfolio routes and strips query strings and fragments", () => {
    expect(normalizeAnalyticsPath("/work/3d/atem-mini-pro?email=private@example.com#images"))
      .toBe("/work/3d/atem-mini-pro");
    expect(normalizeAnalyticsPath("/work/"))
      .toBe("/work");
  });

  it("maps old routes to their current destination", () => {
    expect(normalizeAnalyticsPath("/3d")).toBe("/work/3d");
    expect(normalizeAnalyticsPath("/programacao")).toBe("/work/code");
    expect(normalizeAnalyticsPath("/work/ux-ui/pizzeria-site"))
      .toBe("/work/code/pizzeria-site");
  });

  it("replaces unknown or personal-looking paths with a generic 404 path", () => {
    expect(normalizeAnalyticsPath("/luca@example.com")).toBe("/404");
    expect(normalizeAnalyticsPath("/contact/5511999999999")).toBe("/404");
    expect(normalizeAnalyticsPath("not-a-route")).toBe("/404");
    expect(normalizeAnalyticsPath(null)).toBe("/404");
  });
});
