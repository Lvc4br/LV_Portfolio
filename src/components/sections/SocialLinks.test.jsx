import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Footer from "../layout/Footer.jsx";
import Hero from "./Hero.jsx";
import CodeTeaser from "./CodeTeaser.jsx";
import tracker from "../../lib/analytics.js";

vi.mock("../../data/useTypewriter", () => ({
  useTypewriter: () => "project snippet",
}));

afterEach(() => vi.restoreAllMocks());

describe("social link analytics", () => {
  it("uses distinct event names for profile links in the footer", () => {
    const trackSpy = vi.spyOn(tracker, "track");
    render(<MemoryRouter><Footer /></MemoryRouter>);

    [
      ["GitHub", "github_click"],
      ["LinkedIn", "linkedin_click"],
      ["ArtStation", "artstation_click"],
      ["Behance", "behance_click"],
      ["The Rookies", "therookies_click"],
    ].forEach(([label, eventName]) => {
      fireEvent.click(screen.getByRole("link", { name: new RegExp(label) }));
      expect(trackSpy).toHaveBeenLastCalledWith(eventName);
    });
  });

  it("counts LinkedIn and GitHub links consistently outside the footer", () => {
    const trackSpy = vi.spyOn(tracker, "track");
    const { unmount } = render(<Hero />);
    fireEvent.click(screen.getByRole("link", { name: /linkedin/i }));
    expect(trackSpy).toHaveBeenLastCalledWith("linkedin_click");

    unmount();
    render(<CodeTeaser />);
    fireEvent.click(screen.getByRole("link", { name: /view github/i }));
    expect(trackSpy).toHaveBeenLastCalledWith("github_click");
  });
});
