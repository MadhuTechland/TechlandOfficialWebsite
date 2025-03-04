import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart, // E-Commerce
  faUtensils,     // Food Delivery
  faBriefcase,    // Job Search
  faCoins,        // Financial
  faHandHoldingHeart, // Non-Profit
  faRing,         // Wedding Planning
  faCarSide,          // Car Rental
  faUsers,        // HR & Recruitment
  faTruck,        // Delivery
  faTools,        // General Utilities
} from '@fortawesome/free-solid-svg-icons';
// Import project images
import abhisreeweb from "../../Components/Assets/Projectimg/abhisreeweb.png";
import cashexbiteboxweb from "../../Components/Assets/Projectimg/cashexbiteboxweb.png";
import cashexweb from "../../Components/Assets/Projectimg/cashexweb.png";
import meatoweb from "../../Components/Assets/Projectimg/meatoweb.jpeg";
import nudealweb from "../../Components/Assets/Projectimg/nudealweb.png";
import templecityweb from "../../Components/Assets/Projectimg/templecityweb.png";
import workoasisweb from "../../Components/Assets/Projectimg/workoasisweb.png";
import nudeal from "../../Components/Assets/Projectimg/nudeal.png";
import primepantry from "../../Components/Assets/Projectimg/primepantry.png";
import sapid from "../../Components/Assets/Projectimg/sapid.png";
import templecity from "../../Components/Assets/Projectimg/templecity.png";
import wedding from "../../Components/Assets/wedding.jpg";
import help from "../../Components/Assets/help.png";
import car from "../../Components/Assets/Car Rental.png";
import Vaaree from "../../Components/Assets/vaare.png";
import bigbagImage from "../../Components/Assets/Projectimg/bigbagImage.png";
import activeItzoneImage from "../../Components/Assets/Projectimg/activeItzoneImage.png";
import bullionImage from "../../Components/Assets/Projectimg/bullionImage.png";

// Project Data for Different Categories
export const categories = {
  "E-Commerce": [
    {
      "id": 1,
      "title": "Prime Pantry",
      "description": "Multi-user e-commerce website for pantry items.",
      "link": "https://plus.eshopweb.store/?store=prime-pantry",
      "technologies_used": ["React", "Node.js", "Stripe API"],
      "status": "Live",
      "platform": "Web",
      "image": primepantry // Add the corresponding image
    },
    {
      "id": 2,
      "title": "Eshop User App",
      "description": "Android application for users to shop on the Eshop platform.",
      "link": "https://play.google.com/store/apps/details?id=com.wrteam.eshop.pro",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": cashexbiteboxweb // Add the corresponding image
    },
    // {
    //   "id": 3,
    //   "title": "Eshop User iOS App",
    //   "description": "iOS application for users to shop on the Eshop platform.",
    //   "link": "https://testflight.apple.com/join/ZqKwNk27",
    //   "technologies_used": ["Swift", "Firebase", "Google Maps API"],
    //   "status": "Live",
    //   "platform": "iOS",
    //   "image": cashexweb // Add the corresponding image
    // },
    {
      "id": 4,
      "title": "Nudeal",
      "description": "A fully integrated web-based shopping platform that offers advanced inventory and order management.",
      "link": "https://nr12brandsshop.in/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": nudealweb // Add the corresponding image
    },
    {
      "id": 5,
      "title": "Nudeal App",
      "description": "A fully functional mobile app designed to enhance user experience and productivity.",
      "link": "https://play.google.com/store/apps/details?id=com.nudeal.user&pcampaignid=web_share",
      "technologies_used": ["Flutter", "Firebase", "REST API"],
      "status": "Live",
      "platform": "Android",
      "image": nudeal // Add the corresponding image
    },
    {
      "id": 6,
      "title": "Vaaree App",
      "description": "Handpicked aesthetic collections for home and lifestyle.",
      "link": "https://play.google.com/store/apps/details?id=com.coffye.gnvaib",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": Vaaree // Add the corresponding image
    }
    ,
    {
      "id": 7,
      "title": "Sapid App",
      "description": "A modern e-commerce store.",
      "link": "",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "In Progress",
      "platform": "Android",
      "image": sapid // Add the corresponding image
    },
    {
      "id": 8,
      "title": "BigBag",
      "description": "An e-commerce platform for purchasing and managing bulk orders.",
      "link": "https://bigbag.dokans.website/",
      "technologies_used": ["React", "Node.js", "MongoDB"],
      "status": "Live",
      "platform": "Web",
      "image": bigbagImage // Assign the imported image
    },
    {
      "id": 8, // Unique ID for the project
      "title": "Active Itzone Ecommerce Demo",
      "description": "A demo e-commerce platform showcasing features for online shopping and store management.",
      "link": "https://demo.activeitzone.com/ecommerce/",
      "technologies_used": ["Laravel", "Vue.js", "MySQL"], // Update with actual technologies used
      "status": "Live",
      "platform": "Web",
      "image": activeItzoneImage // Assign the imported image
    }

  ],
  "Food Delivery": [
    {
      "id": 1,
      "title": "CashX BiteBox",
      "description": "A modern web platform for online food ordering and restaurant management.",
      "link": "https://biteboxes.in/",
      "technologies_used": ["React", "Node.js", "MongoDB"],
      "status": "In Development",
      "platform": "Web",
      "image": cashexbiteboxweb // Add the corresponding image
    },
    {
      "id": 2,
      "title": "MeatO",
      "description": "An online food delivery service that connects users with local restaurants.",
      "link": "https://meato.co/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": meatoweb // Add the corresponding image
    }
  ],
  "Job Search": [
    {
      "id": 1,
      "title": "Workoasis",
      "description": "A job search platform that bridges the gap between job seekers and employers.",
      "link": "https://workoasis.in/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": workoasisweb // Add the corresponding image
    }
  ],
  "Financial": [
    {
      "id": 1,
      "title": "CashX Web",
      "description": "A fintech web application for managing digital payments and transactions.",
      "link": "https://www.cashex.app/",
      "technologies_used": ["Laravel", "Vue.js", "MySQL"],
      "status": "Live",
      "platform": "Web",
      "image": cashexweb // Add the corresponding image
    },
    {
      "id": 2,
      "title": "Account & Expense Manager",
      "description": "An app for managing and tracking expenses.",
      "link": "https://play.google.com/store/apps/details?id=com.itwaves.accountmanager",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": help // Add the corresponding image
    },
    {
      "id": 3,
      "title": "ePayhub",
      "description": "An app for paying credit card bills.",
      "link": "https://play.google.com/store/apps/details?id=com.epayhub.mobile",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": help // Add the corresponding image
    },
    {
      "id": 4,
      "title": "Bullion",
      "description": "A web application for tracking and managing bullion investments.",
      "link": "https://bullion.bugfinder.app/",
      "technologies_used": ["React", "Node.js", "MongoDB"],
      "status": "Live",
      "platform": "Web",
      "image": bullionImage // Assign the imported image
    }
  ],
  "Non-Profit": [
    {
      "id": 1,
      "title": "Abhisree Foundation",
      "description": "A non-profit organization website dedicated to supporting social causes and initiatives.",
      "link": "https://abhisreefoundation.org/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": abhisreeweb // Add the corresponding image
    }
  ],
  "Wedding Planning": [
    {
      "id": 1,
      "title": "WedMeGood App",
      "description": "Wedding planning made simple with the WedMeGood App.",
      "link": "https://play.google.com/store/apps/details?id=com.wedmegood.planner",
      "technologies_used": ["Swift", "CoreData", "Firebase"],
      "status": "Live",
      "platform": "Android",
      "image": wedding // Add the corresponding image
    }
  ],
  "Car Rental": [
    {
      "id": 1,
      "title": "Savaari App",
      "description": "Savaari’s 24x7 Cab Booking Services for outstation and local travel.",
      "link": "https://play.google.com/store/apps/details?id=com.savaari.app",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": car // Add the corresponding image
    }
  ],
  "HR & Recruitment": [
    {
      "id": 1,
      "title": "Find HR App",
      "description": "An app for finding HR and recruitment services.",
      "link": "https://play.google.com/store/apps/details?id=com.find.candidate",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": help // Add the corresponding image
    }
  ],
  "Delivery": [
    {
      "id": 1,
      "title": "Delivery Boy Login",
      "description": "Web portal for delivery personnel to manage orders.",
      "link": "https://eshop-pro.eshopweb.store/delivery_boy/login",
      "technologies_used": ["React", "Node.js", "MongoDB"],
      "status": "Live",
      "platform": "Web",
      "image": help // Add the corresponding image
    },
    {
      "id": 2,
      "title": "Delivery Boy iOS App",
      "description": "iOS application for delivery personnel.",
      "link": "https://testflight.apple.com/join/F7AstWFF",
      "technologies_used": ["Swift", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "iOS",
      "image": help // Add the corresponding image
    }
  ],
  "General Utilities": [
    {
      "id": 1,
      "title": "MeeHelp App",
      "description": "A user-friendly mobile app for finding helpers and services.",
      "link": "https://play.google.com/store/apps/details?id=com.meehelp.meehelp",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": help // Add the corresponding image
    },
    {
      "id": 2,
      "title": "Temple City App",
      "description": "An innovative Android application for temple services and priest bookings.",
      "link": "https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share",
      "technologies_used": ["Kotlin", "Node.js", "MongoDB"],
      "status": "In Development",
      "platform": "Android",
      "image": templecity // Add the corresponding image
    },
    {
      "id": 3,
      "title": "Temple City Web",
      "description": "An innovative web application for temple services and priest bookings.",
      "link": "",
      "technologies_used": ["Kotlin", "Node.js", "MongoDB"],
      "status": "In Development",
      "platform": "Android",
      "image": templecityweb // Add the corresponding image
    },

  ]
};
const categoryIcons = {
  "E-Commerce": faShoppingCart,
  "Food Delivery": faUtensils,
  "Job Search": faBriefcase,
  "Financial": faCoins,
  "Non-Profit": faHandHoldingHeart,
  "Wedding Planning": faRing,
  "Car Rental": faCarSide,
  "HR & Recruitment": faUsers,
  "Delivery": faTruck,
  "General Utilities": faTools,
};
const Accordion = () => {
  const navigate = useNavigate();
  const [visibleProjects,] = useState(3);

  const handleViewAll = (category) => {
    navigate(`/portfolio/${category}`, { state: { projects: categories[category], categoryName: category } });
  };

  return (
    <div className="portfolio-container">
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-section">
          <h2 className="category-header">
            <span >
              {category}
            </span>
            <FontAwesomeIcon icon={categoryIcons[category]} className="category-icon" />
          </h2>
          <div className="projects-grid">
            {categories[category].slice(0, visibleProjects).map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-card-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {/* <div className="technologies">
                    {project.technologies_used.join(", ")}
                  </div> */}
                  {/* <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Visit Project
                  </a> */}

                </div>
              </div>
            ))}
          </div>
          <button
            className="view-all-button"
            onClick={() => handleViewAll(category)}
          >
            View All
          </button>

        </div>
      ))}
    </div>
  );
};

export default Accordion;