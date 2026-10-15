import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights() {
  const highlights = [
    ...projects.filter((project) => project.area === "3d").slice(0, 2),
    projects.find((project) => project.id === "pizzeria-site"),
    projects.find((project) => project.id === "ice-cream-panda"),
  ].filter(Boolean);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">Selected 3D, programming, and UX/UI work, combining completed projects with a current responsive pizzeria wireframe project.</p>
          </div>
        </div>
        <ProjectGrid projects={highlights} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}