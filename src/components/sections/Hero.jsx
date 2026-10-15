export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" />
      <div className="container hero__content">
        <p className="eyebrow">Luca Toniolo / São Paulo, Brazil</p>
        <h1>
          3D <span>×</span> CODE
        </h1>
        <p className="hero__lead">
          Developer and 3D artist focused on <strong>visual design, interface thinking</strong>,
          and digital products built with clarity and intent.
        </p>
        <div className="hero__availability">
          Available for internships and front-end opportunities · São Paulo
        </div>
        <div className="hero__actions">
          <a className="button button--solid" href="#work">
            Explore work ↓
          </a>
          <a
            className="button"
            href={`${import.meta.env.BASE_URL}curriculo-luca-toniolo.pdf`}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
          <a
            className="button"
            href="https://www.linkedin.com/in/luca-toniolo/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
        <div className="hero__bottom">
          <span>LUCA TONIOLO</span>
          <span>3D / FRONT-END / UX THINKING</span>
        </div>
      </div>
    </section>
  );
}
