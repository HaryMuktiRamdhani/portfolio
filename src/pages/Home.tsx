import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroNama from "../components/heronama";
import What from "../components/penghargaan";
import About from "../components/about";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";
import Gallery from "../components/gallery";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;

    if (scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(scrollTo);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <HeroNama />
      <What />
      <About />
      <Skills />
      <Portfolio />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}
