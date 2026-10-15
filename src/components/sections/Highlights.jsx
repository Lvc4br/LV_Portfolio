import { Link } from "react-router-dom";
import { projects, sortProjects } from "../../data/projects.js";
import ProjectGrid from "../ui/ProjectGrid.jsx";

export default function Highlights() {
  const highlights = [
    projects.find((project) => project.id === "atem-mini-pro"),
    projects.find((project) => project.id === "handheld-console"),
    projects.find((project) => project.id === "ice-cream-panda"),
  ].filter(Boolean);

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">01 / Work</span>
          <div>
            <h2 className="section-title">Selected work that shows how I think and build.</h2>
            <p className="section-copy">
              Three strongest pieces of work, selected to emphasize completed projects,
              strong visual thinking, and a clear balance between 3D craft and front-end execution.
            </p>
          </div>
        </div>
        <ProjectGrid projects={highlights} />
        <Link to="/work" className="more">Explore all projects</Link>
      </div>
    </section>
  );
}