import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProjectList.css";

const WebAllProjects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { projects } = location.state || { projects: [] };

  useEffect(() => {
    if (!projects.length) {
      navigate("/");
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500); 
    
  }, [projects, navigate]);

  

  const [activeImageIndices, setActiveImageIndices] = useState(
    projects.reduce((acc, _, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const goToNextImage = (index) => {
    if (!projects[index].images || projects[index].images.length === 0) return;
    setActiveImageIndices((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % projects[index].images.length,
    }));
  };

  const goToPrevImage = (index) => {
    if (!projects[index].images || projects[index].images.length === 0) return;
    setActiveImageIndices((prev) => ({
      ...prev,
      [index]: (prev[index] - 1 + projects[index].images.length) % projects[index].images.length,
    }));
  };

  return (
    <div className="main-container">
      <h2 align="center">📌 More Projects</h2>

      <div className="project-items">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 0 ? "" : "reversed"}`}>
            
            {/* Image Carousel Section */}
            <div className="project-image-wrapper mobile">
              {project.images && project.images.length > 1 && (
                <button className="carousel-btn prev" onClick={() => goToPrevImage(index)}>
                  &#8592;
                </button>
              )}

              <img
                src={project.images && project.images.length > 0 ? project.images[activeImageIndices[index]] : project.img}
                alt={project.title}
              />

              {project.images && project.images.length > 1 && (
                <button className="carousel-btn next" onClick={() => goToNextImage(index)}>
                  &#8594;
                </button>
              )}
            </div>

            {/* Project Info Section */}
            <div className="project-info-wrapper mobile">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="button-container">
                {/* View Project Button */}
                {project.links && (
                  <button className="view-project-btn">
                    <a
                      style={{ all: "unset" }}
                      href={project.links[activeImageIndices[index]]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  </button> 
                )}

                {/* View Project Description Button */}
                <button
                  className="view-project-btn"
                  onClick={() => navigate(`/project-description/${index}`, { state: { project } })}
                >
                  View Project Description
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Go Back Button */}
      <div className="see-more-container">
        <button className="see-more-btn" onClick={() => window.history.back()}>
          ⬅ Go Back
        </button>
      </div>
    </div>
  );
};

export default WebAllProjects;
