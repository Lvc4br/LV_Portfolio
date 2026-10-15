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
                Web projects, tools, and automation — including the design
                decisions that shape how the finished code works for people.
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
