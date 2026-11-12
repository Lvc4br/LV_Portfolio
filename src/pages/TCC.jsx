import { Link } from "react-router-dom";

const centralUrl = "https://github.com/Lab-Tecnico-Etec/lab-central";

export default function TCC() {
  return (
    <section className="section journey-hero">
      <div className="container tcc-page">
        <Link className="journey-back" to="/academic">← Academic projects</Link>
        <p className="eyebrow">ETEC / Technical course</p>
        <p className="journey-status">Preparing · Not started</p>
        <h1 className="section-title">The next chapter<br />is being prepared.</h1>
        <p className="section-copy">
          O Trabalho de Conclusão de Curso ainda não começou. O tema, o título,
          o escopo, a orientação e o cronograma dependem das definições oficiais
          da ETEC e do grupo.
        </p>
        <div className="tcc-facts">
          <div><span>Institution</span><strong>ETEC de Itaquera</strong></div>
          <div><span>Course</span><strong>Técnico em Desenvolvimento de Sistemas</strong></div>
          <div><span>Team</span><strong>Lab Técnico ETEC</strong></div>
          <div><span>Current stage</span><strong>Organização preparatória</strong></div>
        </div>
        <div className="journey-note">
          <strong>Transparência do projeto</strong>
          <p>
            Esta página não apresenta um tema fictício nem afirma que o TCC foi
            iniciado ou aprovado. O conteúdo será atualizado com decisões e
            materiais que possam ser divulgados.
          </p>
        </div>
        <a className="button button--solid" href={`${centralUrl}/tree/main/projetos/tcc-etec`} target="_blank" rel="noreferrer">
          Open shared TCC documentation ↗
        </a>
      </div>
    </section>
  );
}
