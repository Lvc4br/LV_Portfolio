import { StrictMode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Link, MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import NexoPageViews from "./NexoPageViews.jsx";

const { pageSpy } = vi.hoisted(() => ({ pageSpy: vi.fn() }));

vi.mock("../lib/analytics.js", () => ({
  default: { page: pageSpy },
}));

describe("NexoPageViews", () => {
  beforeEach(() => pageSpy.mockClear());

  it("records the initial route and SPA route changes", async () => {
    const user = userEvent.setup();
    render(
      <StrictMode>
        <MemoryRouter initialEntries={["/"]}>
          <NexoPageViews />
          <Link to="/work/3d">Open 3D work</Link>
        </MemoryRouter>
      </StrictMode>
    );

    expect(pageSpy).toHaveBeenCalledWith("/");
    await user.click(screen.getByRole("link", { name: "Open 3D work" }));
    expect(pageSpy).toHaveBeenLastCalledWith("/work/3d");
  });
});
