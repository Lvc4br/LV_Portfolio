import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import tracker from "../../lib/analytics.js";

const links = [
  { to: "/work", label: "Work" },
  { to: "/lab", label: "Interactive Lab" },
  { to: "/academic", label: "Academic" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleContact = () => {
    tracker.track("contact_click");
    closeMenu();
  };

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink className="nav__brand" to="/" end onClick={closeMenu} aria-label="LT. — Home">
          LT<span>.</span>
        </NavLink>
        <nav id="primary-navigation" className={open ? "nav__links is-open" : "nav__links"} aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/work"}
              onClick={link.to === "/contact" ? handleContact : closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          ref={menuButtonRef}
          className="nav__menu"
          type="button"
          onClick={() => setOpen((isOpen) => !isOpen)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
