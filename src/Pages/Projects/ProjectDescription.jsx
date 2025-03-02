import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProjectDescription.css";

const ProjectDescription = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500); // Delay of 100ms
  }, []);
  

  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div className="project-description-container">
      {/* <button className="back-btn" onClick={() => navigate(-1)}>⬅ Go Back</button> */}

      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="client-name">Client: {project.client_name}</p>
      </div>

      <div className="project-content">
        {/* Image Section */}
        <div className="image-section">
          <img src={project.img} alt={project.title} className="project-image" />
        </div>

        {/* Project Details */}
        <div className="details-section">
          <p className="description">{project.description}</p>
          <p className="more-description">{project.more_description}</p>

          <div className="project-meta">
            <p><strong>Technologies Used:</strong></p>
            <div className="tech-list">
              {project.technologies_used.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>

            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Team Size:</strong> {project.team_size}</p>
          </div>

          {project.links && project.links.length > 0 && (
            <a
              href={project.links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="view-project-btn"
            >
              🔗 View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
