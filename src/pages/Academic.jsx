import { Link } from "react-router-dom";

const labUrl = "https://github.com/Lab-Tecnico-Etec";
const centralUrl = "https://github.com/Lab-Tecnico-Etec/lab-central";

export default function Academic() {
  return (
    <>
      <section className="section journey-hero">
        <div className="container">
          <p className="eyebrow">Academic / ETEC de Itaquera</p>
          <h1 className="section-title">Learning by<br />building things.</h1>
          <p className="section-copy">
            Projetos técnicos, documentação e experiências desenvolvidas durante
            o curso Técnico em Desenvolvimento de Sistemas.
          </p>
        </div>
      </section>
      <section className="section journey-section">
        <div className="container journey-grid">
          <article className="journey-card">
            <span className="eyebrow">01 / Projeto em andamento</span>
            <p className="journey-status">In progress</p>
            <h2>Estufa Inteligente</h2>
            <p>
              Projeto técnico coletivo que utiliza Arduino e Proteus. A equipe
              está documentando requisitos, componentes, simulações e resultados
              conforme o desenvolvimento avança.
            </p>
            <div className="tag-row"><span>Arduino</span><span>Proteus</span><span>Team project</span></div>
            <a className="button" href={`${centralUrl}/tree/main/projetos/estufa-inteligente`} target="_blank" rel="noreferrer">
              Project documentation ↗
            </a>
          </article>
          <article className="journey-card journey-card--muted">
            <span className="eyebrow">02 / Projeto acadêmico futuro</span>
            <p className="journey-status">Preparing · Not started</p>
            <h2>Trabalho de Conclusão de Curso</h2>
            <p>
              O tema ainda não foi definido e o início oficial aguarda orientação
              da ETEC. Esta página será atualizada quando o grupo tiver informações
              aprovadas para divulgar.
            </p>
            <div className="tag-row"><span>ETEC</span><span>Documentation first</span></div>
            <Link className="button button--solid" to="/academic/tcc">Explore TCC page ↗</Link>
          </article>
        </div>
      </section>
      <section className="section journey-section journey-section--compact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Collective work</span>
            <div>
              <h2 className="section-title">Lab Técnico ETEC.</h2>
              <p className="section-copy">
                Organização coletiva que centraliza projetos, integrantes,
                modelos de documentação e o histórico de desenvolvimento.
              </p>
            </div>
          </div>
          <div className="journey-links">
            <a href={labUrl} target="_blank" rel="noreferrer">GitHub organization <span>↗</span></a>
            <a href={centralUrl} target="_blank" rel="noreferrer">Project hub <span>↗</span></a>
            <a href={`${centralUrl}/blob/main/equipe/README.md`} target="_blank" rel="noreferrer">Team & contributions <span>↗</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
