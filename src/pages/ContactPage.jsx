import Contact from "../components/sections/Contact.jsx";

export default function ContactPage() {
  return (
    <section className="section journey-hero">
      <div className="container">
        <p className="eyebrow">Contact / Get in touch</p>
        <h1 className="section-title">Have a project<br />in mind?</h1>
        <p className="section-copy">
          Entre em contato para oportunidades, colaborações e conversas sobre tecnologia e criação.
        </p>
      </div>
      <Contact />
    </section>
  );
}
