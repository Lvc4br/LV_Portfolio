import { Link } from "react-router-dom";
import "../styles/pages/NotFound.css";

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container">
        <div className="not-found__content">
          <p className="eyebrow">404 / Page not found</p>
          <h1 className="section-title">This page doesn't exist.</h1>
          <p className="section-copy">
            The link may be outdated, or the page may have moved.
          </p>
          <Link className="button button--solid" to="/">
            Return home
          </Link>
        </div>
      </div>
    </section>
  );
}
