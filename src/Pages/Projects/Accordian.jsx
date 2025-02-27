import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";

// Import project images
import abhisreeweb from "../../Components/Assets/Projectimg/abhisreeweb.png";
import cashexbiteboxweb from "../../Components/Assets/Projectimg/cashexbiteboxweb.png";
import cashexweb from "../../Components/Assets/Projectimg/cashexweb.png";
import meatoweb from "../../Components/Assets/Projectimg/meatoweb.jpeg";
import nudealweb from "../../Components/Assets/Projectimg/nudealweb.png";
import templecityweb from "../../Components/Assets/Projectimg/templecityweb.png";
import workoasisweb from "../../Components/Assets/Projectimg/workoasisweb.png";
import nudeal from "../../Components/Assets/Projectimg/nudeal.png";
import meato from "../../Components/Assets/Projectimg/meato.png";
import sapid from "../../Components/Assets/Projectimg/sapid.png";
import templecity from "../../Components/Assets/Projectimg/templecity.png";

// Project Data for Different Categories
const categories = [
  {
    name: "Web Applications",
    data: [
      { id: 1, img: abhisreeweb, title: "Project 1", description: "This is a short description about the project." },
      { id: 2, img: cashexbiteboxweb, title: "Project 2", description: "This project focuses on modern web applications." },
      { id: 3, img: cashexweb, title: "Project 3", description: "A robust and scalable application for businesses." },
    ],
  },
  {
    name: "Mobile Applications",
    data: [
      { id: 1, img: nudealweb, title: "Mobile App 1", description: "This is a feature-rich mobile app." },
      { id: 2, img: templecityweb, title: "Mobile App 2", description: "An innovative Android application." },
      { id: 3, img: workoasisweb, title: "Mobile App 3", description: "An iOS app with a sleek UI." },
    ],
  },
  {
    name: "E-Commerce Applications",
    data: [
      { id: 1, img: sapid, title: "E-Commerce 1", description: "A modern e-commerce store." },
      { id: 2, img: nudeal, title: "E-Commerce 2", description: "Seamless online shopping experience." },
      { id: 3, img: nudeal, title: "E-Commerce 3", description: "Fashion e-commerce platform." },
    ],
  },
  {
    name: "Food Delivery Websites",
    data: [
      { id: 1, img: meatoweb, title: "Food Delivery 1", description: "Fast food delivery service." },
      { id: 2, img: templecity, title: "Food Delivery 2", description: "Order from your favorite restaurants." },
      { id: 3, img: nudeal, title: "Food Delivery 3", description: "Pizza delivery at your doorstep." },
    ],
  },
];

const Accordian = () => {
  const navigate = useNavigate();

  return (
    <div className="project-items">
      <h2 align="center">🚀 Our Projects</h2>

      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <div className="project-container">
            {category.data.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.img} alt={project.title} className="project-img" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

          {/* "See More" Button - Navigates to New Page with Category Data */}
          <div className="see-more-container">
            <button
              className="see-more-btn"
              onClick={() => navigate(`/projects/${category.name}`, { state: { projects: category.data } })}
            >
              See More {category.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
