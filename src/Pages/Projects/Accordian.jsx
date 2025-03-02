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
    "name": "Web Applications",
    "data": [
      {
        "id": 1,
        "img": abhisreeweb,
        "title": "Project 1",
        "description": "A user-friendly mobile app for temple services and priest bookings.",
        "more_description": "This app allows users to book puja services, find temple information, and get personalized religious guidance.",
        "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
        "category": "mobile",
        "client_name": "Temple City",
        "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
        "duration": "3 months",
        "status": "Live",
        "team_size": 4
      },
      {
        "id": 2,
        "img": cashexbiteboxweb,
        "title": "Project 2",
        "description": "A modern web platform for online food ordering and restaurant management.",
        "more_description": "This project helps restaurants digitize their ordering process with real-time tracking and payment integration.",
        "links": ["https://cashexbitebox.com"],
        "category": "web",
        "client_name": "Cashex BiteBox",
        "technologies_used": ["React", "Node.js", "MongoDB"],
        "duration": "6 months",
        "status": "In Development",
        "team_size": 6
      },
      {
        "id": 3,
        "img": cashexweb,
        "title": "Project 3",
        "description": "A fintech web application for managing digital payments and transactions.",
        "more_description": "A robust and scalable platform enabling businesses to manage transactions securely with multi-layer authentication.",
        "links": ["https://cashexweb.com"],
        "category": "fintech",
        "client_name": "Cashex",
        "technologies_used": ["Laravel", "Vue.js", "MySQL"],
        "duration": "5 months",
        "status": "Live",
        "team_size": 5
      }
    ]
  }
,{
      "name": "Mobile Applications",
      "data": [
        {
          "id": 1,
          "img": nudealweb,
          "title": "Mobile App 1",
          "description": "This is a feature-rich mobile app.",
          "more_description": "A fully functional mobile app designed to enhance user experience and productivity.",
          "category": "mobile",
          "client_name": "Nudeal Solutions",
          "technologies_used": ["Flutter", "Firebase", "REST API"],
          "duration": "4 months",
          "status": "Live",
          "team_size": 3
        },
        {
          "id": 2,
          "img": templecityweb,
          "title": "Mobile App 2",
          "description": "An innovative Android application.",
          "more_description": "A customized Android solution built to serve unique business needs.",
          "category": "mobile",
          "client_name": "Temple City",
          "technologies_used": ["Kotlin", "Node.js", "MongoDB"],
          "duration": "5 months",
          "status": "In Development",
          "team_size": 4
        },
        {
          "id": 3,
          "img": workoasisweb,
          "title": "Mobile App 3",
          "description": "An iOS app with a sleek UI.",
          "more_description": "A visually stunning iOS app ensuring smooth performance and top-notch security.",
          "category": "mobile",
          "client_name": "Work Oasis",
          "technologies_used": ["Swift", "CoreData", "Firebase"],
          "duration": "6 months",
          "status": "Live",
          "team_size": 5
        }
      ]
    },
    {
      "name": "E-Commerce Applications",
      "data": [
        {
          "id": 1,
          "img": sapid,
          "title": "E-Commerce 1",
          "description": "A modern e-commerce store.",
          "more_description": "A fully responsive online store with advanced product filtering and checkout features.",
          "category": "e-commerce",
          "client_name": "Sapid Ventures",
          "technologies_used": ["React", "Node.js", "Stripe API"],
          "duration": "6 months",
          "status": "Live",
          "team_size": 6
        },
        {
          "id": 2,
          "img": nudeal,
          "title": "E-Commerce 2",
          "description": "Seamless online shopping experience.",
          "more_description": "A user-friendly e-commerce platform with AI-powered product recommendations.",
          "category": "e-commerce",
          "client_name": "Nudeal Mart",
          "technologies_used": ["Laravel", "Vue.js", "MySQL"],
          "duration": "5 months",
          "status": "Live",
          "team_size": 4
        },
        {
          "id": 3,
          "img": nudeal,
          "title": "E-Commerce 3",
          "description": "Fashion e-commerce platform.",
          "more_description": "A marketplace for fashion brands with integrated social commerce features.",
          "category": "e-commerce",
          "client_name": "Nudeal Fashion",
          "technologies_used": ["Shopify", "React", "GraphQL"],
          "duration": "4 months",
          "status": "In Development",
          "team_size": 5
        }
      ]
    },
    {
      "name": "Food Delivery Websites",
      "data": [
        {
          "id": 1,
          "img": meatoweb,
          "title": "Food Delivery 1",
          "description": "Fast food delivery service.",
          "more_description": "A hyperlocal delivery service that connects users to nearby restaurants in real-time.",
          "category": "food-delivery",
          "client_name": "Meato Express",
          "technologies_used": ["Next.js", "MongoDB", "Firebase"],
          "duration": "5 months",
          "status": "Live",
          "team_size": 4
        },
        {
          "id": 2,
          "img": templecity,
          "title": "Food Delivery 2",
          "description": "Order from your favorite restaurants.",
          "more_description": "A food ordering platform with AI-based meal suggestions and route optimization.",
          "category": "food-delivery",
          "client_name": "Temple City Foods",
          "technologies_used": ["Flutter", "Node.js", "PostgreSQL"],
          "duration": "6 months",
          "status": "In Development",
          "team_size": 5
        },
        {
          "id": 3,
          "img": nudeal,
          "title": "Food Delivery 3",
          "description": "Pizza delivery at your doorstep.",
          "more_description": "A feature-packed pizza delivery app with real-time tracking and quick reordering.",
          "category": "food-delivery",
          "client_name": "Nudeal Eats",
          "technologies_used": ["React Native", "Firebase", "Google Maps API"],
          "duration": "4 months",
          "status": "Live",
          "team_size": 3
        }
      ]
    }
  
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
