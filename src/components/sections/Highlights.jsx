import { Link } from "react-router-dom";
import { projects, sortProjects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights() {
  const highlights = sortProjects(
    [
      ...projects.filter((project) => project.area === "3d").slice(0, 2),
      projects.find((project) => project.id === "ice-cream-panda"),
      projects.find((project) => project.id === "pizzeria-site"),
    ].filter(Boolean)
  );

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">
              Selected 3D and programming work, prioritizing completed work and
              presenting the pizzeria as a design-to-code project still in progress.
            </p>
          </div>
        </div>
        <ProjectGrid projects={highlights} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}