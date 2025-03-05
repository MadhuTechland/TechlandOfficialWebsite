import React, { } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import './ProjectList.css';
import { categories } from "./Accordion";


const WebAllProjects = () => {

  const location = useLocation();
  // const navigate = useNavigate();
  const param = useParams()

  const projects = location?.state?.projects || categories?.[param.category] || {};
  const categoryName = location?.state?.categoryName || param?.category || {};

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  // const handleView = (project) => {
  //   navigate(`/portfolio/${categoryName}/${project.id}`, { state: { project, categoryName }, });
  // };
  return (
    <div className="allproproject-gallery">
      <div className="allprogallery-header">
        <h1 className="allprogallery-title">{categoryName || "Project Showcase"}</h1>
        <p className="allprogallery-subtitle">
          Explore my collection of projects showcasing various technologies and creative solutions
        </p>
      </div>

      <div className="allproproject-grid">
        {projects.map((project) => (
          <div key={project.id} className="allproproject-card">
            <div className="allproproject-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="allproproject-image"
              />
            </div>

            <div className="allproproject-content">
              <h3 className="allproproject-title">{project.title}</h3>
              <p className="allproproject-description">{project.description}</p>

              <div className="allprotech-tags">
                {project.technologies_used.map((tech, index) => (
                  <span key={tech} className="allprotech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="allproproject-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="allproview-project"
                >
                  View Project <ArrowUpRight size={16} />
                </a>
                <a
                  href={`/portfolio/${categoryName}/${project.id}`}
                  // onClick={() => handleView(project)}
                  className="allproview-project"
                >
                  View Details <ArrowUpRight size={16} />
                </a>

                {project.date && (
                  <span className="allproproject-date">
                    {formatDate(project.date)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAllProjects;