import React, { } from "react";
import { useLocation, useParams, } from "react-router-dom";
import { ArrowLeft, Calendar, ExternalLink, } from "lucide-react";
import "./ProjectDescription.css";
import { categories } from "./Accordion";


const ProjectDetail = () => {
  const location = useLocation();
  const param = useParams()

  const project = location?.state?.project || categories?.[param.category].find(a => parseInt(a.id) === parseInt(param.id)) || {};
  const categoryName = location?.state?.categoryName || param?.category || {};
  // const { project, categoryName } = location.state || {};

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <p>Sorry, the project you're looking for doesn't exist.</p>
        <a href="/" className="back-link">
          <ArrowLeft size={16} /> Back to Projects
        </a>
      </div>
    );
  }

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <a href={`/portfolio/${categoryName}`} className="back-button">
          <ArrowLeft size={20} /> Back to Projects
        </a>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-date">
          <Calendar size={16} /> {formatDate(project.date)}
        </p>
      </div>

      <div className="project-detail-content">
        <div className="project-detail-main">
          <div className="project-detail-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-image"
            />
          </div>

          <div className="project-detail-description-section">
            <h2 className="section-title">Project Overview</h2>
            <p className="project-detail-description">{project.description}</p>

            {/* Extended description - this would come from the full project data */}
            <p className="project-detail-extended-description">
              This project was developed to address specific challenges in the {project.title.toLowerCase()} domain.
              It incorporates modern design principles and cutting-edge technologies to deliver a seamless user experience.
              The development process involved extensive research, prototyping, and iterative testing to ensure the final
              product meets the highest standards of quality and performance.
            </p>
          </div>

          <div className="project-detail-features-section">
            <h2 className="section-title">Key Features</h2>
            <ul className="project-detail-features">
              <li>Responsive design that works on all devices</li>
              <li>Intuitive user interface with modern aesthetics</li>
              <li>Optimized performance for fast loading times</li>
              <li>Comprehensive documentation for easy maintenance</li>
              <li>Scalable architecture to accommodate future growth</li>
            </ul>
          </div>

          <div className="project-detail-challenges-section">
            <h2 className="section-title">Challenges & Solutions</h2>
            <div className="challenge-solution">
              <h3>Challenge 1</h3>
              <p>
                Implementing real-time updates while maintaining application performance.
              </p>
              <h3>Solution</h3>
              <p>
                Utilized WebSockets with an optimized data transfer protocol to minimize
                payload size while ensuring timely updates.
              </p>
            </div>
            <div className="challenge-solution">
              <h3>Challenge 2</h3>
              <p>
                Ensuring consistent user experience across different browsers and devices.
              </p>
              <h3>Solution</h3>
              <p>
                Implemented a comprehensive testing strategy using cross-browser testing
                tools and device emulators to identify and address compatibility issues.
              </p>
            </div>
          </div>
        </div>

        <div className="project-detail-sidebar">
          <div className="project-detail-tech-section">
            <h2 className="section-title">Technologies Used</h2>
            <div className="project-detail-tech-tags">
              {project.technologies_used.map((tech, index) => (
                <span key={index} className="project-detail-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="project-detail-links-section">
            <h2 className="section-title">Project Links</h2>
            <div className="project-detail-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-detail-link"
              >
                <ExternalLink size={16} /> Live Demo
              </a>

            </div>
          </div>

          <div className="project-detail-timeline-section">
            <h2 className="section-title">Project Timeline</h2>
            <div className="project-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Planning & Research</h3>
                  <p>2 weeks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Design & Prototyping</h3>
                  <p>3 weeks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Development</h3>
                  <p>6 weeks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Testing & Refinement</h3>
                  <p>2 weeks</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Deployment</h3>
                  <p>1 week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;