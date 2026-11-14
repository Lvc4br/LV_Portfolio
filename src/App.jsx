import { useCallback, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Gallery3D from "./pages/Gallery3D.jsx";
import Programming from "./pages/Programming.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Academic from "./pages/Academic.jsx";
import TCC from "./pages/TCC.jsx";
import Experience from "./pages/Experience.jsx";
import InteractiveLab from "./pages/InteractiveLab.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", loading);
    return () => document.body.classList.remove("is-loading");
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={finishLoading} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/3d" element={<Gallery3D />} />
          <Route path="/work/3d/:id" element={<ProjectDetail area="3d" />} />
          <Route path="/work/code" element={<Programming />} />
          <Route path="/work/code/:id" element={<ProjectDetail area="code" />} />
          <Route path="/lab" element={<InteractiveLab />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/academic/tcc" element={<TCC />} />
          <Route path="/academic/projects" element={<Navigate to="/academic" replace />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work/ux-ui" element={<Navigate to="/work/code" replace />} />
          <Route path="/work/ux-ui/:id" element={<Navigate to="/work/code/pizzeria-site" replace />} />
          <Route path="/3d" element={<Navigate to="/work/3d" replace />} />
          <Route path="/programacao" element={<Navigate to="/work/code" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
