import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Gallery3D from "./pages/Gallery3D.jsx";
import Programming from "./pages/Programming.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/3d" element={<Gallery3D />} />
          <Route path="/work/3d/:id" element={<ProjectDetail area="3d" />} />
          <Route path="/work/code" element={<Programming />} />
          <Route path="/work/code/:id" element={<ProjectDetail area="code" />} />
          <Route path="/3d" element={<Navigate to="/work/3d" replace />} />
          <Route path="/programacao" element={<Navigate to="/work/code" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
