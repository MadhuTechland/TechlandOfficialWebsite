import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import IntroSection from "./Pages/Hero/IntroSection";
// import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";
import SocialSideBar from "./Pages/Social/SocialSideBar";
import TeamBlogs from "./Pages/Blogs/TeamBlogs";
import OurTeam from "./Pages/OurTeam/OurTeam";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/About/AboutMain";
import DetailedServices from "./Pages/Services/DetailedServices";
import Portfolio from "./Pages/Projects/Portfolio";
import ScrollToTopButton from "./Components/Navbar/ScrollToTopButton";

// import Portfolio from "./Pages/Portfolio/";
// import Pricing from "./Pages/Pricing/";
// import Team from "./Pages/Team/";
// import Contact from "./Pages/Contact/";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.body.scrollTop; // Pixels scrolled from the top
      const scrollHeight =
        document.body.scrollHeight - window.innerHeight; // Total scrollable height
      const scrollPercentage = (scrollTop / scrollHeight) * 100; // Scroll percentage

      // Update the progress bar width using CSS
      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        progressBar.style.width = `${scrollPercentage}%`;
      }
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <Router>
        <Navbar />


        <Routes>
          <Route path="/" element={<IntroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<DetailedServices />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<><OurTeam /><TeamBlogs /></>} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
        <SocialSideBar />
      </Router>
      <ScrollToTopButton />
    </>
  );
};

export default App;
