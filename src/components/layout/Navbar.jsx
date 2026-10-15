import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink className="nav__brand" to="/" end onClick={closeMenu} aria-label="LT. — Home">LT<span>.</span></NavLink>
        <nav id="primary-navigation" className={open ? "nav__links is-open" : "nav__links"}>
          <NavLink to="/work" end onClick={closeMenu}>Work</NavLink>
          <NavLink to="/work/3d" onClick={closeMenu}>3D</NavLink>
          <NavLink to="/work/code" onClick={closeMenu}>Code</NavLink>
          <NavLink to="/work/ux-ui" onClick={closeMenu}>UX/UI</NavLink>
          <NavLink to="/" state={{ scrollTo: "about" }} onClick={closeMenu}>About</NavLink>
          <NavLink to="/" state={{ scrollTo: "contact" }} onClick={closeMenu}>Contact</NavLink>
        </nav>
        <button
          className="nav__menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}