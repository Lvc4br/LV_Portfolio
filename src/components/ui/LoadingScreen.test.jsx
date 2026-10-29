import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LoadingScreen from "./LoadingScreen.jsx";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("LoadingScreen accessibility and lifecycle", () => {
  it("finishes immediately when reduced motion is preferred", () => {
    const onComplete = vi.fn();
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({ matches: true }));
    window.matchMedia = globalThis.matchMedia;

    render(<LoadingScreen onComplete={onComplete} />);

    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByRole("progressbar", { name: /loading portfolio/i })).toHaveAttribute("aria-valuenow", "100");
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(globalThis.matchMedia).toHaveBeenCalledWith("(prefers-reduced-motion: reduce)");
  });

  it("cancels its animation frame when unmounted", () => {
    vi.stubGlobal("matchMedia", vi.fn().mockReturnValue({ matches: false }));
    window.matchMedia = globalThis.matchMedia;
    const requestFrame = vi.fn(() => 17);
    const cancelFrame = vi.fn();
    vi.stubGlobal("requestAnimationFrame", requestFrame);
    vi.stubGlobal("cancelAnimationFrame", cancelFrame);

    const { unmount } = render(<LoadingScreen onComplete={vi.fn()} />);
    expect(requestFrame).toHaveBeenCalledTimes(1);

    unmount();

    expect(cancelFrame).toHaveBeenCalledWith(17);
  });
});
