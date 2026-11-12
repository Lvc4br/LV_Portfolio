import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <>
      <section className="section journey-hero">
        <div className="container">
          <p className="eyebrow">Professional journey</p>
          <h1 className="section-title">Experience<br />in progress.</h1>
          <p className="section-copy">
            Minha trajetória profissional e as experiências que conectam
            tecnologia, processos e desenvolvimento.
          </p>
        </div>
      </section>
      <section className="section journey-section">
        <div className="container">
          <article className="experience-entry">
            <div className="experience-entry__date">
              <span className="eyebrow">Starting 16 Nov 2026</span>
              <span className="experience-entry__line" />
              <span className="journey-status">Upcoming / Start date scheduled</span>
            </div>
            <div>
              <p className="eyebrow">Professional experience · 01</p>
              <h2>EGT Engenharia</h2>
              <p className="section-copy">
                Início previsto em 16/11/2026. Esta experiência será documentada
                conforme as atividades, responsabilidades e ferramentas forem
                efetivamente apresentadas e realizadas.
              </p>
              <div className="journey-note">
                <strong>Details to be updated after starting</strong>
                <p>
                  Cargo, área, atribuições, ferramentas e entregas ainda não são
                  descritos aqui para evitar atribuir à função responsabilidades
                  que não foram confirmadas.
                </p>
              </div>
            </div>
          </article>
          <p className="journey-footnote">
            Projetos, imagens, documentos e informações internas da empresa só
            serão publicados com autorização.
          </p>
          <Link className="button" to="/contact">Contact ↗</Link>
        </div>
      </section>
    </>
  );
}
