import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx";
import Contact from "./components/sections/Contact.jsx";

describe("portfolio navigation", () => {
  it("renders the home page at the root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /3d × code/i })).toBeInTheDocument();
  });

  it("renders the programming page at /work/code", () => {
    render(
      <MemoryRouter initialEntries={["/work/code"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /all programming work\./i })).toBeInTheDocument();
  });

  it("renders all twelve Colosseum reference sheets", () => {
    render(
      <MemoryRouter initialEntries={["/work/3d/colosseum"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("img")).toHaveLength(12);
    expect(screen.getByAltText(/second-floor access and arrival study/i)).toBeInTheDocument();
  });

  it("renders the jewelry concept board and supporting references", () => {
    render(
      <MemoryRouter initialEntries={["/work/3d/jewelry"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("img")).toHaveLength(5);
    expect(screen.getByAltText(/constelação floral concept board/i)).toBeInTheDocument();
  });

  it("renders a 404 page for invalid routes", () => {
    render(
      <MemoryRouter initialEntries={["/rota-inexistente"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /this page doesn't exist/i })).toBeInTheDocument();
  });
});

describe("contact form", () => {
  it("submits successfully and shows a confirmation message", async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({ ok: true });

    render(<Contact />);

    await user.type(screen.getByLabelText(/name/i), "Luca");
    await user.type(screen.getByLabelText(/email/i), "luca@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, I would like to talk about a project.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(/your message was sent successfully/i);
  });

  it("shows an error message when the request fails", async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    render(<Contact />);

    await user.type(screen.getByLabelText(/name/i), "Luca");
    await user.type(screen.getByLabelText(/email/i), "luca@example.com");
    await user.type(screen.getByLabelText(/message/i), "This should fail");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/could not be sent/i);
  });
});
