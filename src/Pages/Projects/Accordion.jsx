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
import wedding from "../../Components/Assets/wedding.jpg";
import help from "../../Components/Assets/help.png";
import car from "../../Components/Assets/Car Rental.png";
import Vaaree from "../../Components/Assets/vaare.png";

// Project Data for Different Categories
const categories = [
  {
    "name": "Web Applications",
    "data": [
      {
        "id": 1,
        "img": abhisreeweb,
        "title": "Abhisree Foundation",
        "description": "A non-profit organization website dedicated to supporting social causes and initiatives.",
        "more_description": "A non-profit organization website dedicated to supporting social causes and initiatives. The platform enables users to donate, volunteer, and stay updated on various charitable programs, ensuring transparency and impact-driven contributions.",
        "links": ["https://abhisreefoundation.org/"],
        "category": "Web",
        "client_name": "abhisreefoundation",
        "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
        "duration": "45 days",
        "status": "Live",
        "team_size": 4
      },
      {
        "id": 2,
        "img": cashexbiteboxweb,
        "title": "CashX",
        "description": "A modern web platform for online food ordering and restaurant management.",
        "more_description": "This project helps restaurants digitize their ordering process with real-time tracking and payment integration.",
        "links": ["https://biteboxes.in/"],
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
        "title": "CashX WEb",
        "description": "A fintech web application for managing digital payments and transactions.",
        "more_description": "A robust and scalable platform enabling businesses to manage transactions securely with multi-layer authentication.",
        "links": [""],
        "category": "fintech",
        "client_name": "Cashex",
        "technologies_used": ["Laravel", "Vue.js", "MySQL"],
        "duration": "5 months",
        "status": "Live",
        "team_size": 5
      },
      {
        "id": 4,
        "img": meato,
        "title": "MeatO",
        "description": "An online food delivery service that connects users with local restaurants",
        "more_description": "An online food delivery service that connects users with local restaurants, offering real-time order tracking, restaurant partnerships, and a hassle-free ordering experience. The platform supports multiple cuisines, easy payment options, and live customer support.",
        "links": ["https://meato.co/"],
        "category": "mobile",
        "client_name": "MeatO PVT.LTD",
        "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
        "duration": " 1 months",
        "status": "Live",
        "team_size": 4
      },
      {
        "id": 5,
        "img": nudealweb,
        "title": "Nudeal",
        "description": "A fully integrated web-based shopping platform that offers advanced inventory and order management.",
        "more_description": "This app allows users to book puja services, find temple information, and get personalized religious guidance.",
        "links": ["https://nr12brandsshop.in/"],
        "category": "WEb",
        "client_name": "Nudeal ltb",
        "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
        "duration": "one months",
        "status": "Live",
        "team_size": 4
      },
      {
        "id": 6,
        "img": workoasisweb,
        "title":"workoasis",
        "description": "A job search platform that bridges the gap between job seekers and employers. ",
        "more_description": " A job search platform that bridges the gap between job seekers and employers. It provides smart filters for job searches, resume-building tools, real-time job alerts, and a seamless application process for both candidates and recruiters.",
        "links": ["https://workoasis.in/"],
        "category": "mobile",
        "client_name": "Temple City",
        "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
        "duration": "3 months",
        "status": "Live",
        "team_size": 4
      },
    ]
  }
,{
      "name": "Mobile Applications",
      "data": [
        {
          "id": 1,
          "img": nudealweb,
          "title": "Nudeal App",
          "description": "This is a feature-rich mobile app.",
          "links": ["https://play.google.com/store/apps/details?id=com.nudeal.user&pcampaignid=web_share"],
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
          "title": "Temple City",
          "description": "An innovative Android application.",
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
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
          "img": wedding,
          "img": wedding,
          "title": "Wedding planer",
          "description": "Wedding planning made simple with the WedMeGood App",
          "more_description": "Wedding planning made simple with the WedMeGood App",
          "links": ["https://play.google.com/store/apps/details?id=com.wedmegood.planner"],
          "category": "mobile",
          "client_name": "We plan your wed",
          "technologies_used": ["Swift", "CoreData", "Firebase"],
          "duration": "2 months",
          "status": "Live",
          "team_size": 5
        },
        {
          "id": 4,
          "img":help ,
          "title": " Find Helpers",
          "description": "A user-friendly mobile app for temple services and priest bookings.",
          "more_description": "This app allows users to book puja services, find temple information, and get personalized religious guidance.",
          "links": ["https://play.google.com/store/apps/details?id=com.meehelp.meehelp"],
          "category": "mobile",
          "client_name": " Find Helpers",
          "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
          "duration": "3 months",
          "status": "Live",
          "team_size": 4
        },
        {
          "id": 5,
          "img": Vaaree,
          "title": "Vaaree",
          "description": "Handpicked aesthetic collections - Choose the designs that reflect your style and personality.",
          "more_description": "Welcome to Vaaree, where every corner is filled with warmth, style, and inspiration. We believe that home is more than just a place—it's a feeling. That's why we've curated a handpicked selection of high-quality products, sourced from certified sellers across India.",
          "links": ["https://play.google.com/store/apps/details?id=com.coffye.gnvaib"],
          "category": "mobile",
          "client_name": "Varee job consultent",
          "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
          "duration": "3 months",
          "status": "Live",
          "team_size": 4
        },
        {
          "id": 6,
          "img": car,
          "title": "Car Rental",
          "description": "Savaari’s 24x7 Cab Booking Services",
          "more_description": "Savaari is India’s premier car rental service, offering Safe & Reliable cabs in over 2000 cities. With 18 years of experience in the cab industry, Savaari is a trusted cab booking app for Outstation Cabs, Oneway drops, Local Hourly Rentals & Airport Car rentals.",
          "links": ["https://play.google.com/store/apps/details?id=com.savaari.app"],
          "category": "mobile",
          "client_name": "Abhi Cars",
          "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
          "duration": "3 months",
          "status": "Live",
          "team_size": 4
        },
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
          "more_description": "A marketplace for fashion brands with integrated social commerce features.",
          "category": "e-commerce",
          "client_name": "Nudeal Fashion",
          "technologies_used": ["Shopify", "React", "GraphQL"],
          "duration": "4 months",
          "status": "In Development",
          "team_size": 5
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
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
          "links": ["https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share"],
          "category": "food-delivery",
          "client_name": "Nudeal Eats",
          "technologies_used": ["React Native", "Firebase", "Google Maps API"],
          "duration": "4 months",
          "status": "Live",
          "team_size": 3
        },
        {
          "id": 4,
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
          "id": 5,
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
          "id": 6,
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
      ]
    }
  
];

const Accordion= () => {
  const navigate = useNavigate();

  return (
    <div className="project-items">
      <h2 align="center">🚀 Our Projects</h2>

      {categories.map((category, index) => (
        <div key={index}>
          <h3>{category.name}</h3>
          <div className="project-container">
            {category.data.slice(0,4).map((project) => (
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
              onClick={() =>  { navigate(`/projects/${category.name}`, { state: { projects: category.data } });document.body.scrollTo({ top: 0, behavior: "smooth" });
            }}
            >
              See More {category.name}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
