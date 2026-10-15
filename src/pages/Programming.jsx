import { projects, sortProjects } from "../data/projects.js";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function Programming() {
  const work = sortProjects(projects.filter((project) => project.area === "code"));

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Programming</span>
            <div>
              <h1 className="section-title">All programming work.</h1>
              <p className="section-copy">
                Completed projects are shown first, followed by ongoing work and
                future concepts. This makes the portfolio clearer for recruiters
                and keeps the project status honest.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProjectGrid projects={work} />
        </div>
      </section>
    </>
  );
}
