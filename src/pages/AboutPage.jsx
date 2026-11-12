import About from "../components/sections/About.jsx";
import Skills from "../components/sections/Skills.jsx";

export default function AboutPage() {
  return (
    <>
      <section className="section journey-hero">
        <div className="container">
          <p className="eyebrow">About / Profile</p>
          <h1 className="section-title">Creative thinking.<br />Technical practice.</h1>
          <p className="section-copy">
            Uma visão geral da minha trajetória, interesses e ferramentas de trabalho.
          </p>
        </div>
      </section>
      <About />
      <Skills />
    </>
  );
}
