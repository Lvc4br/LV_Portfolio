import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact.jsx";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("Contact form", () => {
  it("discloses the third-party form processor", () => {
    render(<Contact />);

    expect(
      screen.getByText(/your name, email address, and message are sent to Getform/i),
    ).toBeInTheDocument();
  });

  it("shows a timeout message when the request is aborted", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockRejectedValue(
      new DOMException("The request timed out", "AbortError"),
    );
    vi.stubGlobal("fetch", fetchMock);

    render(<Contact />);

    await user.type(screen.getByLabelText("Name"), "Test User");
    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(
      await screen.findByText(/request timed out/i),
    ).toBeInTheDocument();
  });
});
