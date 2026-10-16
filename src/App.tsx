import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PortfolioDetail from "./pages/portfolioDetail";
import GalleryDetail from "./pages/galleryDetail";
import AllPortfolio from "./pages/AllPortfolio";
import AllGallery from "./pages/AllGallery";

import Navigasi from "./components/navigasi";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigasi />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<AllPortfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/gallery" element={<AllGallery />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
      </Routes>
    </div>
  );
}

export default App;
