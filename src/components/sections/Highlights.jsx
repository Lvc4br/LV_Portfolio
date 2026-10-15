import { Link } from "react-router-dom";
import { projects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights() {
  const highlights = [
    projects.find((project) => project.id === "atem-mini-pro"),
    projects.find((project) => project.id === "jewelry"),
    projects.find((project) => project.id === "ice-cream-panda"),
  ].filter(Boolean);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think, design, and build.</h2>
            <p className="section-copy">
              A focused selection of the strongest projects, chosen to highlight visual thinking,
              technical organization, and a balanced mix of 3D craft and front-end execution.
            </p>
          </div>
        </div>
        <ProjectGrid projects={highlights} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}