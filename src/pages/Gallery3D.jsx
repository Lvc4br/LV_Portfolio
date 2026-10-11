import { projects } from "../data/projects.js";
import ProjectGrid from "../components/ui/ProjectGrid.jsx";

export default function Gallery3D() {
  const work = projects.filter((project) => project.area === "3d");

  return (
    <>
      <section className="section" id="3D">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">3D</span>
            <div>
              <h1 className="section-title">All 3D work.</h1>
              <p className="section-copy">
                Modeling, materials, lighting and procedural workflows — a
                growing collection of 3D studies and full scenes.
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