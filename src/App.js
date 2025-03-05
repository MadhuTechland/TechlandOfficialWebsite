import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IntroSection from "./Pages/Hero/IntroSection";
import TeamBlogs from "./Pages/Blogs/TeamBlogs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/About/AboutMain";
import DetailedServices from "./Pages/Services/DetailedServices";
import Portfolio from "./Pages/Projects/Portfolio";
import WebAllProjects from "./Pages/Projects/WebAllProjects";
import ProjectDescription from "./Pages/Projects/ProjectDescription";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IntroSection />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<DetailedServices />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="team" element={<><OurTeam /><TeamBlogs /></>} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio/:category" element={<WebAllProjects />} />
          <Route path="portfolio/:category/:id" element={<ProjectDescription />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
