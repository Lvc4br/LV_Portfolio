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

  it("renders the Colosseum gallery and allows selecting an image", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/work/3d/colosseum"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("button", { name: /show image/i })).toHaveLength(12);
    expect(screen.getByRole("button", { name: /show image 10: second floor architectural study/i }))
      .toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /show image 2:/i }));
    expect(screen.getByRole("button", { name: /enlarge image: main elevation/i })).toBeInTheDocument();
  });

  it("opens the image viewer and navigates with the keyboard", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/work/3d/colosseum"]}>
        <App />
      </MemoryRouter>
    );

    await user.click(screen.getByRole("button", { name: /enlarge image:/i }));
    expect(screen.getByRole("dialog", { name: /colosseum image viewer/i })).toBeInTheDocument();
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("dialog").querySelector("img")).toHaveAttribute(
      "alt",
      "Main elevation and façade study of the Colosseum"
    );
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders the jewelry concept board and supporting references", () => {
    render(
      <MemoryRouter initialEntries={["/work/3d/jewelry"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getAllByRole("button", { name: /show image/i })).toHaveLength(4);
    expect(screen.getByAltText(/constelação floral concept board/i)).toBeInTheDocument();
  });

  it("includes the modal image in the Ice Cream Panda project gallery", () => {
    render(
      <MemoryRouter initialEntries={["/work/code/ice-cream-panda"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /show image 2: ice cream panda project modal design/i }))
      .toBeInTheDocument();
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
