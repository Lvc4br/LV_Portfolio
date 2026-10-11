import Hero from "../components/sections/Hero.jsx";
import Highlights from "../components/sections/Highlights.jsx";
import ThreeDTeaser from "../components/sections/ThreeDTeaser.jsx";
import CodeTeaser from "../components/sections/CodeTeaser.jsx";
import ThreeDCode from "../components/sections/ThreeDCode.jsx";
import Skills from "../components/sections/Skills.jsx";
import About from "../components/sections/About.jsx";
import Contact from "../components/sections/Contact.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, document.title, window.location.pathname);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.state]);

  return (
    <>
      <Hero />
      <Highlights />
      <ThreeDTeaser />
      <CodeTeaser />
      <ThreeDCode />
      <Skills />
      <About />
      <Contact />
    </>
  );
}
