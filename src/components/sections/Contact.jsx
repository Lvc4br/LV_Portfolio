import { useState } from "react";
import tracker from "../../lib/analytics.js";

const MAX_CHARS = 280;
const REQUEST_TIMEOUT_MS = 15_000;

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (sending) return;

    const form = event.currentTarget;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(
      () => controller.abort(),
      REQUEST_TIMEOUT_MS,
    );

    setSending(true);
    setSent(false);
    setError("");

    try {
      const response = await fetch("https://getform.io/f/anlqkeea", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("The contact service rejected the submission.");
      }

      form.reset();
      setMessage("");
      setSent(true);
      tracker.track("contact_submit");
    } catch (requestError) {
      if (requestError.name === "AbortError") {
        setError("The request timed out. Please try again or contact me via LinkedIn.");
      } else {
        setError("The message could not be sent. Please try again or contact me via LinkedIn.");
      }
    } finally {
      window.clearTimeout(timeoutId);
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">07 / Contact</span>
          <div>
            <h2 className="section-title">Let’s build something clear, useful, and memorable.</h2>
            <p className="section-copy">
              I’m open to internships, junior front-end opportunities, and design-to-code
              collaborations where visual thinking and product clarity matter.
            </p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} aria-describedby="contact-privacy">
          <label>
            Name
            <input required name="name" autoComplete="name" placeholder="Your name" />
          </label>

          <label>
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              required
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength={MAX_CHARS}
              rows={3}
            />
            <span className="char-count" aria-live="polite">
              {message.length} / {MAX_CHARS}
            </span>
          </label>

          <p className="contact__privacy" id="contact-privacy">
            When you submit this form, your name, email address, and message are sent to Getform,
            a third-party form-processing service, so I can receive and respond to your message.
            Please do not include sensitive personal information.
          </p>

          <button className="button button--solid" type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send message →"}
          </button>

          {sent && <p role="status">Your message was sent successfully.</p>}
          {error && <p role="alert">{error}</p>}
        </form>
      </div>
    </section>
  );
}
