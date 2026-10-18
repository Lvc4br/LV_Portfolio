import { useNavigate } from "react-router-dom";
import tracker from "../../lib/analytics.js";

export default function Footer() {
  const navigate = useNavigate();

  const goToContact = (event) => {
    event.preventDefault();
    tracker.track("contact_click");
    navigate("/", { state: { scrollTo: "contact" } });
  };

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__logo">
            LUCA TONIOLO<span>.</span>
          </div>
          <p>3D × CODE</p>
        </div>
        <div className="footer__links">
          <a href="https://github.com/Lvc4br" onClick={() => tracker.track("github_click")} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="#contact" onClick={goToContact}>
            Contact ↗
          </a>
          <a href="https://www.linkedin.com/in/luca-toniolo/" onClick={() => tracker.track("linkedin_click")} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="https://www.artstation.com/lvc4br" onClick={() => tracker.track("artstation_click")} target="_blank" rel="noreferrer">
            ArtStation ↗
          </a>
          <a href="https://www.behance.net/Toniolo_Luca" onClick={() => tracker.track("behance_click")} target="_blank" rel="noreferrer">
            Behance ↗
          </a>
          <a href="https://www.therookies.co/u/Lvc4br" onClick={() => tracker.track("therookies_click")} target="_blank" rel="noreferrer">
            The Rookies ↗
          </a>
        </div>
        <div className="footer__meta">
          <span>São Paulo, Brazil</span>
          <span>© {new Date().getFullYear()} Luca Toniolo</span>
        </div>
      </div>
    </footer>
  );
}
