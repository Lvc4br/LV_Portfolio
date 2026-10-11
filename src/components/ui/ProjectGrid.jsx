import { Link } from "react-router-dom";

export default function ProjectGrid({ projects }) {
  return (
    <div className="work-grid">
      {projects.map((project) => (
        <Link
          className="project-card"
          key={project.id}
          to={`/work/${project.area}/${project.id}`}
        >
          <div className={`project-card__visual ${project.visual}`}>
            {project.image ? (
              <img src={project.image} alt={project.imageAlt} loading="lazy" />
            ) : (
              <div className={`project-card__placeholder project-card__placeholder--${project.id}`} aria-hidden="true">
                {project.visualLabel}
              </div>
            )}
            <span>{project.number}</span>
            <i>{project.status}</i>
          </div>
          <div className="project-card__body">
            <div>
              <p className="mono">{project.category}</p>
              <h3>{project.title}</h3>
            </div>
            <span className="project-card__arrow">↗</span>
          </div>
          <div className="tag-row">
            {project.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
