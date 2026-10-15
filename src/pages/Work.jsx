import { Link } from "react-router-dom";
import atemImage from "../assets/atem_mini_pro.webp";

export default function Work() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <div>
            <h1 className="section-title">Selected work.</h1>
            <p className="section-copy">
              Explore 3D, programming, and UX/UI projects, including work that
              connects visual design and technology.
            </p>
          </div>
        </div>

        <div className="work-grid work-grid--categories">
          <Link className="project-card" to="/work/3d">
            <div className="project-card__visual visual--product">
              <img src={atemImage} alt="ATEM Mini Pro 3D render" loading="lazy" />
              <span>01</span>
              <i>3D</i>
            </div>
            <div className="project-card__body">
              <div><p className="mono">3D</p><h3>3D Work</h3></div>
              <span className="project-card__arrow">↗</span>
            </div>
          </Link>

          <Link className="project-card" to="/work/code">
            <div className="project-card__visual visual--code">
              <div className="project-card__placeholder project-card__placeholder--label" aria-hidden="true">HTML · CSS · JS</div>
              <span>02</span>
              <i>Code</i>
            </div>
            <div className="project-card__body">
              <div><p className="mono">Code</p><h3>Programming Work</h3></div>
              <span className="project-card__arrow">↗</span>
            </div>
          </Link>

          <Link className="project-card" to="/work/ux-ui">
            <div className="project-card__visual visual--code">
              <div className="project-card__placeholder project-card__placeholder--label" aria-hidden="true">Pizzeria · UX/UI</div>
              <span>03</span>
              <i>UX/UI</i>
            </div>
            <div className="project-card__body">
              <div><p className="mono">UX/UI</p><h3>Design Work</h3></div>
              <span className="project-card__arrow">↗</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
