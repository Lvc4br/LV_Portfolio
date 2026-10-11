import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights() {
  const highlights = [
    ...projects.filter((project) => project.area === "3d").slice(0, 2),
    projects.find((project) => project.id === "tcc-etec"),
    projects.find((project) => project.id === "game-site"),
  ].filter(Boolean);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">Selected 3D and programming projects, including my graduation project and a games website built with Flask and Neon.</p>
          </div>
        </div>
        <ProjectGrid projects={highlights} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}