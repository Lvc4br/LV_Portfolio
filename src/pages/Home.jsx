import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero.jsx";
import Highlights from "../components/sections/Highlights.jsx";
import ThreeDTeaser from "../components/sections/ThreeDTeaser.jsx";
import CodeTeaser from "../components/sections/CodeTeaser.jsx";
import ThreeDCode from "../components/sections/ThreeDCode.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <ThreeDTeaser />
      <CodeTeaser />
      <ThreeDCode />
      <section className="section journey-section journey-section--compact">
        <div className="container journey-grid">
          <Link className="journey-card" to="/academic">
            <span className="eyebrow">Academic journey</span>
            <h2>Learning beyond the screen.</h2>
            <p>Projetos técnicos, colaboração e documentação desenvolvidos durante a formação na ETEC.</p>
            <span className="button">Explore academic work ↗</span>
          </Link>
          <Link className="journey-card" to="/experience">
            <span className="eyebrow">Professional journey</span>
            <h2>From learning to practice.</h2>
            <p>Acompanhe minha trajetória profissional e as experiências que serão construídas ao longo do caminho.</p>
            <span className="button">Explore experience ↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
