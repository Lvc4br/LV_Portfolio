import { projects } from "../data/projects.js";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function UXUI() {
  const work = projects.filter((project) => project.area === "ux-ui");

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">UX/UI</span>
            <div>
              <h1 className="section-title">Designing clear digital experiences.</h1>
              <p className="section-copy">
                UX/UI concepts, information architecture, and responsive
                wireframes for digital projects that can progress into code.
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
