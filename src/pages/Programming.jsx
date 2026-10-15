import { projects } from "../data/projects.js";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function Programming() {
  const work = projects.filter((project) => project.area === "code");

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Programming</span>
            <div>
              <h1 className="section-title">All programming work.</h1>
              <p className="section-copy">
                Programming projects focused on web interfaces, automation, and
                tools that support creative workflows.
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
