import { Link, Navigate, useParams } from "react-router-dom";
import { getProjectById, projects } from "../data/projects.js";

export default function ProjectDetail({ area }) {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project || project.area !== area) {
    const routeByArea = {
      "3d": "/work/3d",
      code: "/work/code",
    };
    return <Navigate to={routeByArea[area] ?? "/work"} replace />;
  }

  const route = `/work/${area}`;
  const areaLabel = area === "3d" ? "3D" : "programming";
  const relatedProjects = projects.filter(
    (item) => item.area === area && item.id !== project.id
  );

  return (
    <>
      <section className="section project-detail">
        <div className="container">
          <Link className="project-detail__back" to={route}>
            ← All {areaLabel} work
          </Link>
          <header className="project-detail__header">
            <div>
              <p className="eyebrow">{project.category} / {project.status}</p>
              <h1 className="section-title">{project.title}</h1>
            </div>
            <p className="project-detail__summary">{project.description}</p>
          </header>

          {project.prototypeFile && (
            <a
              className="button button--solid"
              href={`${import.meta.env.BASE_URL}${project.prototypeFile}`}
              target="_blank"
              rel="noreferrer"
            >
              View interactive wireframes ↗
            </a>
          )}

          {project.caseStudy && (
            <div className="project-detail__case-study">
              {project.caseStudy.map((item) => (
                <section key={item.title}>
                  <span className="eyebrow">{item.title}</span>
                  <p>{item.description}</p>
                </section>
              ))}
            </div>
          )}

          {project.image && (
            <figure className="project-detail__image">
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            </figure>
          )}

          {project.realityCheck && (
            <div className="project-detail__case-study">
              <section>
                <span className="eyebrow">Reality check</span>
                <p>{project.realityCheck}</p>
              </section>
            </div>
          )}

          <div className="project-detail__facts">
            {project.tools.length > 0 && (
              <section>
                <span className="eyebrow">Tools</span>
                <div className="tag-row">
                  {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </section>
            )}
            <section>
              <span className="eyebrow">Status</span>
              <p>{project.status}</p>
            </section>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section project-detail__related">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">More work</span>
              <div>
                <h2 className="section-title">More {areaLabel} projects.</h2>
              </div>
            </div>
            <div className="project-detail__links">
              {relatedProjects.map((item) => (
                <Link key={item.id} to={`/work/${area}/${item.id}`}>
                  <span>{item.number} / {item.status}</span>
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
