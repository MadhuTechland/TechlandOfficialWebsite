import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
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
import wedmegood from "../../Components/Assets/Projectimg/wedmegood.png";
import accountexpensemanager from "../../Components/Assets/Projectimg/accountexpensemanager.png";
import vaaree from "../../Components/Assets/Projectimg/vaaree.png";
import bigbag from "../../Components/Assets/Projectimg/bigbagImage.png";
import activeitzone from "../../Components/Assets/Projectimg/activeItzoneImage.png";
import epayhub from "../../Components/Assets/Projectimg/epayhub.png";
import bullion from "../../Components/Assets/Projectimg/bullionImage.png";
import savaari from "../../Components/Assets/Projectimg/savaari.png";
import findHR from "../../Components/Assets/Projectimg/findHR.png";
import eshop from "../../Components/Assets/Projectimg/eshop.png";
import meehelp from "../../Components/Assets/Projectimg/meehelp.png";

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
      "image": primepantry,
      "project_overview": "Prime Pantry is a feature-rich e-commerce platform designed for grocery and pantry shopping. It allows users to browse a wide range of products, add items to their cart, and complete secure transactions. The platform is optimized for high performance, offering a mobile-responsive design and SEO-friendly product pages. Built with React and Node.js, it provides a seamless user experience with real-time inventory management and a secure checkout process.",
      "features": [
        "SEO-optimized product pages with structured data",
        "Mobile-responsive design for seamless shopping",
        "Secure checkout with Stripe API integration",
        "Real-time inventory management with MongoDB",
        "User-friendly admin dashboard for product and order management"
      ],
      "timeline": {
        "Planning & Research": "2 weeks",
        "UI/UX Design": "3 weeks",
        "Backend Development": "4 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Managing a large and dynamic product inventory",
          "solution": "Used MongoDB for efficient database management and real-time updates"
        },
        {
          "problem": "Ensuring high-speed performance for an image-heavy site",
          "solution": "Implemented lazy loading, image compression, and CDN caching"
        },
        {
          "problem": "Enhancing SEO for better search engine visibility",
          "solution": "Optimized metadata, structured product data, and improved site speed"
        },
        {
          "problem": "Providing a seamless checkout experience",
          "solution": "Integrated Stripe API with an intuitive checkout flow"
        }
      ]
    },
    {
      "id": 2,
      "title": "Eshop User App",
      "description": "Android application for users to shop on the Eshop platform.",
      "link": "https://play.google.com/store/apps/details?id=eShop.multivendor.customer&pcampaignid=web_share",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": eshop,
      "project_overview": "Eshop User App is a modern e-commerce mobile application that enables users to browse products, place orders, track deliveries, and make secure payments. The app is optimized for a fast and smooth shopping experience, with a user-friendly interface and real-time notifications. Built with React Native, it ensures seamless performance across different Android devices while leveraging Firebase for real-time updates and analytics.",
      "features": [
        "User-friendly product browsing and search",
        "Secure checkout with Stripe API integration",
        "Real-time order tracking with Firebase",
        "Push notifications for offers and updates",
        "Dark mode support for enhanced user experience"
      ],
      "timeline": {
        "Planning & Research": "2 weeks",
        "UI/UX Design": "3 weeks",
        "Backend Development": "4 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring a smooth and responsive UI across various devices",
          "solution": "Implemented React Native's flexible layout system with optimized animations"
        },
        {
          "problem": "Handling real-time order tracking efficiently",
          "solution": "Integrated Firebase Realtime Database for instant updates"
        },
        {
          "problem": "Managing push notifications and user engagement",
          "solution": "Used Firebase Cloud Messaging (FCM) for personalized notifications"
        },
        {
          "problem": "Optimizing app performance and load times",
          "solution": "Implemented lazy loading, caching strategies, and optimized API calls"
        }
      ]
    },

    {
      "id": 4,
      "title": "Nudeal",
      "description": "A fully integrated web-based shopping platform that offers advanced inventory and order management.",
      "link": "https://nr12brandsshop.in/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": nudealweb,
      "project_overview": "NR12 Brands Shop is a feature-rich e-commerce website designed to provide users with a seamless shopping experience. The platform offers a diverse range of premium brand products with a user-friendly interface, secure payment gateways, and a fully optimized SEO structure to improve search engine rankings. It is built using modern web technologies to ensure speed, scalability, and responsiveness across all devices.",
      "features": [
        "SEO-friendly product pages with structured data",
        "Fast-loading pages with optimized assets",
        "Mobile-first responsive design",
        "Secure payment integration with Stripe API",
        "User-friendly admin panel for product management"
      ],
      "timeline": {
        "Planning & Research": "2 weeks",
        "UI/UX Design": "3 weeks",
        "Backend Development": "4 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Slow performance due to large product images",
          "solution": "Implemented lazy loading and image compression techniques"
        },
        {
          "problem": "SEO ranking issues",
          "solution": "Optimized metadata, added schema markup, and improved site speed"
        },
        {
          "problem": "Managing a large inventory dynamically",
          "solution": "Used MongoDB for efficient product categorization and retrieval"
        },
        {
          "problem": "Ensuring a seamless checkout experience",
          "solution": "Integrated Stripe API with an intuitive UI/UX flow"
        }
      ]
    },
    {
      "id": 5,
      "title": "Nudeal App",
      "description": "A fully functional mobile app designed to enhance user experience and productivity.",
      "link": "https://play.google.com/store/apps/details?id=com.nudeal.user&pcampaignid=web_share",
      "technologies_used": ["Flutter", "Firebase", "REST API"],
      "status": "Live",
      "platform": "Android",
      "image": nudeal,
      "project_overview": "Nudeal User App is an advanced e-commerce mobile application designed to offer users the best deals on a wide range of products. The app features real-time discounts, a user-friendly shopping experience, and secure payment options. Built with React Native, it provides a seamless and responsive UI across all Android devices. With Firebase integration, it ensures instant updates on offers, order tracking, and push notifications to keep users engaged.",
      "features": [
        "Exclusive deals and discounts updated in real-time",
        "Secure checkout with Stripe API integration",
        "Real-time order tracking using Firebase",
        "Push notifications for offers and order updates",
        "Seamless browsing experience with a mobile-first design"
      ],
      "timeline": {
        "Planning & Research": "2 weeks",
        "UI/UX Design": "3 weeks",
        "Backend Development": "4 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Managing dynamic pricing and real-time deals",
          "solution": "Implemented Firebase Firestore for real-time product price updates"
        },
        {
          "problem": "Ensuring fast loading times despite high user traffic",
          "solution": "Optimized API calls, used caching strategies, and lazy-loaded assets"
        },
        {
          "problem": "User engagement through notifications and promotions",
          "solution": "Integrated Firebase Cloud Messaging (FCM) for targeted push notifications"
        },
        {
          "problem": "Providing a smooth checkout experience",
          "solution": "Implemented Stripe API with an intuitive and secure payment flow"
        }
      ]
    },
    {
      "id": 6,
      "title": "Vaaree App",
      "description": "Handpicked aesthetic collections for home and lifestyle.",
      "link": "https://play.google.com/store/apps/details?id=com.coffye.gnvaib",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": vaaree,
      "project_overview": "Vaaree is a home decor and lifestyle shopping app designed to bring elegance and warmth to every home. The platform connects users with high-quality, handpicked products from certified sellers across India. With an intuitive shopping experience, personalized recommendations, and secure payment options, Vaaree transforms home decor shopping into a seamless and enjoyable experience. The app is built with React Native for a smooth and responsive user experience, while Firebase handles real-time updates and order tracking.",
      "features": [
        "Curated selection of premium home decor items",
        "Seamless browsing experience with a mobile-first design",
        "Secure checkout with Stripe API integration",
        "Real-time order tracking with Firebase",
        "Personalized recommendations based on user preferences"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "5 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "4 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring high-quality images without slowing down load times",
          "solution": "Implemented image optimization, lazy loading, and CDN integration"
        },
        {
          "problem": "Providing accurate product recommendations",
          "solution": "Used AI-based recommendation algorithms for personalized shopping"
        },
        {
          "problem": "Managing multiple sellers and product authenticity",
          "solution": "Verified sellers through a strict approval process and implemented quality checks"
        },
        {
          "problem": "Enhancing the checkout and payment experience",
          "solution": "Integrated Stripe API for seamless transactions and multiple payment options"
        }
      ]
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
      "image": bigbag,
      "project_overview": "BigBag is a feature-rich e-commerce platform designed to provide users with a seamless online shopping experience. It offers a wide range of products, a secure checkout process, and an intuitive user interface. The platform is built with React for a dynamic frontend, Node.js for a scalable backend, and MongoDB for efficient data management. It also integrates Stripe API for secure transactions and optimized performance for a smooth shopping experience.",
      "features": [
        "SEO-friendly product pages with structured data",
        "Secure and seamless checkout with Stripe API",
        "Mobile-responsive design for a smooth user experience",
        "Real-time inventory and order management system",
        "User-friendly admin panel for product and order tracking"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "5 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Handling high traffic and ensuring fast load times",
          "solution": "Implemented caching strategies, optimized API calls, and used a CDN for asset delivery"
        },
        {
          "problem": "Ensuring secure transactions and data protection",
          "solution": "Integrated Stripe API for secure payments and implemented data encryption"
        },
        {
          "problem": "Managing a large inventory with dynamic updates",
          "solution": "Used MongoDB for real-time inventory tracking and optimized database queries"
        },
        {
          "problem": "Enhancing SEO for better search engine visibility",
          "solution": "Implemented structured product data, optimized metadata, and improved page speed"
        }
      ]
    },
    {
      "id": 8, // Unique ID for the project
      "title": "Active Itzone Ecommerce Demo",
      "description": "A demo e-commerce platform showcasing features for online shopping and store management.",
      "link": "https://demo.activeitzone.com/ecommerce/",
      "technologies_used": ["Laravel", "Vue.js", "MySQL"], // Update with actual technologies used
      "status": "Live",
      "platform": "Web",
      "image": activeitzone,
      "project_overview": "Active eCommerce CMS is a robust multi-vendor platform designed for businesses looking to create an online marketplace. It supports digital and physical products, multiple payment gateways, and vendor management. The platform is built using Laravel for the backend, Vue.js for dynamic frontend components, and MySQL for data management. With an intuitive admin panel and seller dashboard, it allows seamless product listing, order management, and analytics tracking.",
      "features": [
        "Multi-vendor support with separate seller dashboards",
        "SEO-friendly product pages and metadata",
        "Mobile-responsive design for a smooth shopping experience",
        "Multiple payment gateway integrations (Stripe, PayPal, etc.)",
        "Advanced search and filtering options for easy navigation",
        "Automated inventory and order tracking",
        "Live chat support and customer feedback system"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "4 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Managing multiple vendors with separate stores",
          "solution": "Implemented a structured seller dashboard with individual performance analytics"
        },
        {
          "problem": "Optimizing performance for high product volume",
          "solution": "Used caching techniques and optimized database queries for faster load times"
        },
        {
          "problem": "Ensuring smooth payment transactions",
          "solution": "Integrated multiple payment gateways with secure API authentication"
        },
        {
          "problem": "Handling SEO for thousands of products",
          "solution": "Implemented dynamic meta tags, structured data, and fast-loading images"
        }
      ]
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
      "image": cashexbiteboxweb,
      "project_overview": "BiteBox is a student-friendly food ordering platform that integrates with Cashex for secure and cashless transactions. Designed to offer convenience for students, it allows them to order food using a unique secure code or cash. The platform also includes parental controls for tracking expenses and setting spending limits, ensuring a hassle-free dining experience.",
      "features": [
        "Seamless integration with Cashex for secure transactions",
        "Cashless ordering via secure codes",
        "Parental control to track and set spending limits",
        "User-friendly mobile and web interface",
        "Real-time order tracking and notifications",
        "Multiple payment options, including cash and digital wallets"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "5 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring seamless integration with Cashex",
          "solution": "Developed a secure API connection with encryption for smooth transactions"
        },
        {
          "problem": "Providing real-time order tracking",
          "solution": "Implemented Firebase for instant updates and push notifications"
        },
        {
          "problem": "Balancing security with a user-friendly experience",
          "solution": "Used multi-layer authentication for transactions while maintaining a simple UI"
        }
      ]
    },
    {
      "id": 2,
      "title": "MeatO",
      "description": "An online food delivery service that connects users with local restaurants.",
      "link": "https://meato.co/",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Web",
      "image": meatoweb,
      "project_overview": "Meato is an on-demand fresh meat delivery platform that connects customers with trusted local meat providers. It ensures quality and freshness by sourcing meat directly from local stores and delivering it efficiently. With an easy-to-use platform, Meato offers seamless ordering, secure payments, and real-time delivery tracking.",
      "features": [
        "Partnership with trusted local meat providers",
        "Fresh meat delivery straight to customers' doorsteps",
        "Real-time order tracking and notifications",
        "Multiple payment options, including digital wallets and cash",
        "User-friendly mobile and web interface",
        "Subscription-based delivery options for regular meat orders"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "5 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring fresh and timely meat delivery",
          "solution": "Implemented an optimized delivery scheduling system with real-time tracking"
        },
        {
          "problem": "Building trust with customers regarding meat quality",
          "solution": "Partnered with verified local suppliers and included quality assurance labels"
        },
        {
          "problem": "Managing high-demand delivery slots",
          "solution": "Used AI-based slot allocation to balance demand and availability"
        }
      ]
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
      "image": workoasisweb,
      "project_overview": "Work Oasis is a job portal that bridges the gap between talented job seekers and hiring companies. It provides an intuitive platform for users to find job opportunities, apply seamlessly, and connect with potential employers. With a strong focus on transparency, fairness, and collaboration, Work Oasis ensures a positive recruitment experience for all.",
      "features": [
        "Advanced job search and filtering options",
        "User-friendly profile creation and resume upload",
        "Employer dashboard for job posting and candidate management",
        "AI-based job recommendations for better matches",
        "Secure payment gateway for premium job listings",
        "Real-time notifications and job alerts"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "4 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Matching job seekers with relevant opportunities",
          "solution": "Implemented AI-based job recommendation and filtering system"
        },
        {
          "problem": "Ensuring a seamless application process",
          "solution": "Developed an intuitive resume builder and quick-apply feature"
        },
        {
          "problem": "Managing high traffic and user engagement",
          "solution": "Optimized database queries and integrated caching mechanisms"
        }
      ]
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
      "image": cashexweb,
      "project_overview": "Cashex is a powerful digital wallet and financial management platform designed to provide secure, seamless transactions. Whether for students, businesses, or individuals, Cashex simplifies money management with smart spending controls, instant transactions, and real-time tracking. Integrated with multiple payment methods, it offers a hassle-free digital financial experience.",
      "features": [
        "Secure digital wallet for seamless transactions",
        "Parental control features for student spending",
        "Real-time transaction tracking and history",
        "Multiple payment methods, including bank transfers and cards",
        "Instant fund transfers with minimal processing time",
        "Business-friendly payment solutions for vendors and merchants"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "4 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring transaction security and fraud prevention",
          "solution": "Implemented end-to-end encryption and multi-factor authentication"
        },
        {
          "problem": "Providing real-time transaction updates",
          "solution": "Integrated Firebase for instant notifications and updates"
        },
        {
          "problem": "Managing high-volume transactions efficiently",
          "solution": "Optimized backend architecture and implemented caching mechanisms"
        }
      ]
    },
    {
      "id": 2,
      "title": "Account & Expense Manager",
      "description": "An app for managing and tracking expenses.",
      "link": "https://play.google.com/store/apps/details?id=com.itwaves.accountmanager",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": accountexpensemanager,
      "project_overview": "Account & Expense Manager is a user-friendly financial tracking app that empowers individuals to take control of their finances. It provides budgeting tools, multiple account tracking, and a seamless expense management system. Designed for both personal and business use, the app ensures security, convenience, and accessibility—even without an internet connection.",
      "features": [
        "Add and track multiple accounts",
        "Advanced search feature for quick transaction lookup",
        "Generate detailed PDF and CSV reports",
        "Face ID/Biometric lock for enhanced security",
        "Supports multiple currencies for global users",
        "Effortless backup and restore functionality",
        "Offline mode for managing finances without an internet connection"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "5 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring data security for financial transactions",
          "solution": "Implemented biometric authentication and encrypted local storage"
        },
        {
          "problem": "Providing offline functionality for financial tracking",
          "solution": "Integrated SQLite for local data storage and seamless synchronization"
        },
        {
          "problem": "Generating comprehensive reports in multiple formats",
          "solution": "Developed an automated report generator supporting PDF and CSV exports"
        }
      ]
    },
    {
      "id": 3,
      "title": "ePayhub",
      "description": "An app for paying credit card bills.",
      "link": "https://play.google.com/store/apps/details?id=com.epayhub.mobile",
      "technologies_used": ["Flutter", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "Android",
      "image": epayhub,
      "project_overview": "ePayhub is a smart bill payment app designed to simplify financial management. It consolidates all recurring expenses into a single platform, allowing users to pay their bills securely with a credit card. With advanced encryption, seamless transactions, and reward-earning potential, ePayhub enhances convenience and security for users managing their finances.",
      "features": [
        "Centralized bill management for all recurring payments",
        "Secure credit card payment with encryption protocols",
        "Earn rewards and cashback on bill payments",
        "User-friendly interface for hassle-free transactions",
        "Automated reminders to avoid missed payments",
        "Support for multiple bill types, including utilities, loans, and subscriptions"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "4 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring secure and seamless transactions",
          "solution": "Implemented Stripe API with industry-standard encryption and fraud protection"
        },
        {
          "problem": "Managing multiple bill categories and payment cycles",
          "solution": "Developed a dynamic billing system with categorized tracking and reminders"
        },
        {
          "problem": "Enhancing user engagement with reward programs",
          "solution": "Integrated a reward-tracking system linked to credit card transactions"
        }
      ]
    },
    {
      "id": 4,
      "title": "Bullion",
      "description": "A web application for tracking and managing bullion investments.",
      "link": "https://bullion.bugfinder.app/",
      "technologies_used": ["React", "Node.js", "MongoDB"],
      "status": "Live",
      "platform": "Web",
      "image": bullion,
      "project_overview": "Bullion is a comprehensive platform designed for individuals and investors looking to buy, resell, and vault precious metals securely. With an increasing global demand for gold due to economic uncertainties, Bullion provides a seamless experience for diversifying and protecting wealth. The platform ensures the highest level of security, transparency, and accessibility for managing investments in gold and other valuable metals.",
      "features": [
        "Buy, sell, and store precious metals securely",
        "Multi-location vaulting for maximum security",
        "Real-time price tracking and market insights",
        "Blockchain integration for transparent transactions",
        "Secure payment processing with multiple options",
        "User-friendly interface for easy investment management"
      ],
      "timeline": {
        "Planning & Research": "5 weeks",
        "UI/UX Design": "6 weeks",
        "Backend Development": "7 weeks",
        "Frontend Development": "6 weeks",
        "Integration & Testing": "5 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring secure transactions and storage for high-value assets",
          "solution": "Integrated blockchain technology and multi-layered encryption for vault security"
        },
        {
          "problem": "Providing real-time gold price tracking",
          "solution": "Implemented API integrations with financial market data sources"
        },
        {
          "problem": "Managing multi-location vaulting efficiently",
          "solution": "Developed a dynamic vault management system with automated tracking"
        }
      ]
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
      "image": abhisreeweb,
      "project_overview": "Abhisree Foundation is a registered social development organization committed to creating a better society by supporting underprivileged communities. The organization focuses on rural and urban youth, with special attention to women, persons with disabilities, and tribal communities. Through various initiatives, Abhisree Foundation works towards education, healthcare, skill development, and social welfare in Telangana and Andhra Pradesh.",
      "features": [
        "Support for underprivileged communities",
        "Focus on women empowerment and tribal welfare",
        "Skill development and education initiatives",
        "Healthcare and social welfare programs",
        "Online donation and volunteer registration system",
        "User-friendly website for awareness and engagement"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "1 week"
      },
      "challenges": [
        {
          "problem": "Ensuring accessibility for diverse communities",
          "solution": "Implemented a responsive and multilingual website to improve reach"
        },
        {
          "problem": "Managing online donations and volunteer registrations",
          "solution": "Integrated a secure payment gateway and a streamlined volunteer management system"
        },
        {
          "problem": "Creating awareness and engagement through digital means",
          "solution": "Developed an interactive blog and newsletter system to keep users informed"
        }
      ]
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
      "image": wedmegood,
      "project_overview": "WedMeGood is a leading wedding planner app in India, designed to simplify wedding planning for couples. The app provides access to trusted vendors, beautiful wedding venues, and curated inspirations for every aspect of a wedding. From creating digital wedding invitations to browsing millions of decor and outfit ideas, WedMeGood ensures a seamless experience for brides, grooms, and families.",
      "features": [
        "Find and book trusted wedding vendors",
        "Create digital wedding invitations and videos",
        "Manage wedding budget and checklists",
        "Access a vast collection of wedding ideas",
        "Shop for designer bridal lehengas and sarees",
        "Plan weddings in multiple cities with vendor recommendations"
      ],
      "timeline": {
        "Planning & Research": "6 weeks",
        "UI/UX Design": "8 weeks",
        "Backend Development": "10 weeks",
        "Frontend Development": "9 weeks",
        "Integration & Testing": "5 weeks",
        "Final Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Ensuring a seamless vendor-booking experience",
          "solution": "Developed an intuitive UI with real-time vendor availability and booking system"
        },
        {
          "problem": "Managing a large database of wedding vendors and inspirations",
          "solution": "Optimized database architecture with efficient search and filtering capabilities"
        },
        {
          "problem": "Handling secure transactions for vendor bookings and online shopping",
          "solution": "Integrated Stripe API and secured payment gateways for seamless transactions"
        }
      ]
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
      "image": savaari,
      "project_overview": "Savaari is a top-rated car rental app in India, providing a seamless booking experience for outstation travel, one-way trips, local hourly rentals, and airport transfers. With services in over 2000 cities and a commitment to safety, reliability, and transparent pricing, Savaari ensures a comfortable travel experience for its users. The app also offers corporate car rentals for business professionals.",
      "features": [
        "Book outstation cabs with flexible itineraries",
        "One-way taxi service with all-inclusive pricing",
        "Airport pickup and drop services across India",
        "Local hourly cab rental with multiple package options",
        "Corporate car rental solutions for business travel",
        "Live tracking and secure payment options"
      ],
      "timeline": {
        "Planning & Research": "6 weeks",
        "UI/UX Design": "7 weeks",
        "Backend Development": "10 weeks",
        "Frontend Development": "9 weeks",
        "Integration & Testing": "6 weeks",
        "Final Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Managing real-time cab availability across 2000+ cities",
          "solution": "Integrated Google Maps API with optimized backend algorithms for dynamic cab allocation"
        },
        {
          "problem": "Ensuring secure and seamless payment processing",
          "solution": "Implemented Stripe API and multiple payment options, including UPI, credit/debit cards, and wallets"
        },
        {
          "problem": "Providing accurate fare estimates with transparent pricing",
          "solution": "Developed an AI-based fare calculation model that factors in distance, state taxes, tolls, and driver allowances"
        }
      ]
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
      "image": findHR,
      "project_overview": "findHR is an innovative job-seeking app designed to connect job seekers with real-time HR professionals across multiple industries. The platform allows users to communicate via chat, calls, and video consultations, ensuring personalized career support. Additionally, findHR provides market trends, career advice, and mock interview sessions to help candidates excel in their professional journeys.",
      "features": [
        "Real-time chat, voice, and video consultations with HR professionals",
        "Personalized career advice and guidance",
        "Mock interviews to improve job readiness",
        "Industry trends and market insights for job seekers",
        "Job matching based on skills and career goals",
        "Secure payment options for premium career consultations"
      ],
      "timeline": {
        "Planning & Research": "5 weeks",
        "UI/UX Design": "6 weeks",
        "Backend Development": "8 weeks",
        "Frontend Development": "7 weeks",
        "Integration & Testing": "5 weeks",
        "Final Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Ensuring seamless video consultations between job seekers and HR professionals",
          "solution": "Implemented WebRTC technology for real-time video communication with minimal latency"
        },
        {
          "problem": "Providing accurate job matches based on user skills",
          "solution": "Developed an AI-based matching algorithm that analyzes user profiles and job listings"
        },
        {
          "problem": "Maintaining secure transactions for premium consultation services",
          "solution": "Integrated Stripe API with end-to-end encryption to ensure safe and seamless payments"
        }
      ]
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
      "image": eshop,
      "project_overview": "Eshop Pro Delivery Boy is a specialized delivery management platform designed to streamline order deliveries for the Eshop Pro e-commerce ecosystem. The platform provides real-time order tracking, delivery status updates, and navigation assistance to optimize the efficiency of delivery personnel. Integrated with Firebase for seamless notifications and Google Maps API for route optimization, it ensures fast and reliable order fulfillment.",
      "features": [
        "Real-time order tracking for efficient delivery management",
        "Live navigation and optimized route suggestions using Google Maps API",
        "Instant notifications for new order assignments",
        "Delivery status updates for both customers and admins",
        "Earnings dashboard for delivery personnel",
        "Secure login and authentication system"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Ensuring real-time order updates for delivery personnel",
          "solution": "Integrated Firebase real-time database for instant status updates"
        },
        {
          "problem": "Providing accurate navigation and optimized routes",
          "solution": "Implemented Google Maps API with real-time traffic updates"
        },
        {
          "problem": "Enhancing security for delivery personnel logins",
          "solution": "Used Firebase Authentication with OTP verification for secure access"
        }
      ]
    },
    {
      "id": 2,
      "title": "Delivery Boy iOS App",
      "description": "iOS application for delivery personnel.",
      "link": "https://testflight.apple.com/join/F7AstWFF",
      "technologies_used": ["Swift", "Firebase", "Google Maps API"],
      "status": "Live",
      "platform": "iOS",
      "image": eshop,
      "project_overview": "Eshop Pro Delivery Boy is a specialized delivery management platform designed to streamline order deliveries for the Eshop Pro e-commerce ecosystem. The platform provides real-time order tracking, delivery status updates, and navigation assistance to optimize the efficiency of delivery personnel. Integrated with Firebase for seamless notifications and Google Maps API for route optimization, it ensures fast and reliable order fulfillment.",
      "features": [
        "Real-time order tracking for efficient delivery management",
        "Live navigation and optimized route suggestions using Google Maps API",
        "Instant notifications for new order assignments",
        "Delivery status updates for both customers and admins",
        "Earnings dashboard for delivery personnel",
        "Secure login and authentication system"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "5 weeks",
        "Integration & Testing": "3 weeks",
        "Final Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Ensuring real-time order updates for delivery personnel",
          "solution": "Integrated Firebase real-time database for instant status updates"
        },
        {
          "problem": "Providing accurate navigation and optimized routes",
          "solution": "Implemented Google Maps API with real-time traffic updates"
        },
        {
          "problem": "Enhancing security for delivery personnel logins",
          "solution": "Used Firebase Authentication with OTP verification for secure access"
        }
      ]
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
      "image": meehelp,
      "project_overview": "MeeHelp is a platform designed to bridge the gap between domestic helpers and households looking for assistance. Users can book professional help for cooking, cleaning, babysitting, patient care, and elder care. The platform offers real-time booking, verified helpers, and an easy-to-use interface to ensure a hassle-free experience.",
      "features": [
        "Instant booking for domestic helpers",
        "Part-time and full-time helper options",
        "Verified and experienced candidates",
        "Secure and reliable service with background checks",
        "Transparent pricing with no hidden charges",
        "Free replacements if unsatisfied with a helper",
        "Support for multiple categories including cooks, cleaners, and caregivers",
        "Live chat and WhatsApp integration for quick support"
      ],
      "timeline": {
        "Planning & Research": "4 weeks",
        "UI/UX Design": "5 weeks",
        "Backend Development": "7 weeks",
        "Frontend Development": "6 weeks",
        "Testing & QA": "3 weeks",
        "Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Ensuring safety and reliability of domestic helpers",
          "solution": "Implemented a strict verification process and background checks"
        },
        {
          "problem": "Providing instant availability of helpers",
          "solution": "Developed an optimized matching algorithm to connect users with nearby helpers"
        },
        {
          "problem": "Handling customer dissatisfaction and service replacements",
          "solution": "Introduced free replacements and a customer support system for issue resolution"
        }
      ]
    },
    {
      "id": 2,
      "title": "Temple City App",
      "description": "An innovative Android application for temple services and priest bookings.",
      "link": "https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share",
      "technologies_used": ["Kotlin", "Node.js", "MongoDB"],
      "status": "In Development",
      "platform": "Android",
      "image": templecity,
      "project_overview": "Pujari App enables priests to handle their religious services digitally, ensuring smooth bookings, easy communication, and a better client experience. The app offers features such as profile customization, real-time booking management, and expertise listing to help Pujaris connect with devotees efficiently.",
      "features": [
        "Real-time booking management with instant notifications",
        "Profile customization to highlight expertise and experience",
        "Service listing for various rituals and ceremonies",
        "Integrated calendar for schedule management",
        "Secure messaging for direct communication with clients",
        "Easy rescheduling or cancellation of bookings",
        "Multi-language support for broader accessibility"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "5 weeks",
        "Testing & QA": "3 weeks",
        "Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Managing booking conflicts and availability",
          "solution": "Integrated a smart calendar with automated availability tracking"
        },
        {
          "problem": "Ensuring smooth communication between Pujaris and clients",
          "solution": "Implemented secure in-app messaging and notification alerts"
        },
        {
          "problem": "Expanding services to different regions with local languages",
          "solution": "Developed multi-language support for better accessibility"
        }
      ]
    },
    {
      "id": 3,
      "title": "Temple City Web",
      "description": "An innovative web application for temple services and priest bookings.",
      "link": "",
      "technologies_used": ["Kotlin", "Node.js", "MongoDB"],
      "status": "In Development",
      "platform": "Android",
      "image": templecityweb,
      "project_overview": "Pujari App enables priests to handle their religious services digitally, ensuring smooth bookings, easy communication, and a better client experience. The app offers features such as profile customization, real-time booking management, and expertise listing to help Pujaris connect with devotees efficiently.",
      "features": [
        "Real-time booking management with instant notifications",
        "Profile customization to highlight expertise and experience",
        "Service listing for various rituals and ceremonies",
        "Integrated calendar for schedule management",
        "Secure messaging for direct communication with clients",
        "Easy rescheduling or cancellation of bookings",
        "Multi-language support for broader accessibility"
      ],
      "timeline": {
        "Planning & Research": "3 weeks",
        "UI/UX Design": "4 weeks",
        "Backend Development": "6 weeks",
        "Frontend Development": "5 weeks",
        "Testing & QA": "3 weeks",
        "Deployment": "2 weeks"
      },
      "challenges": [
        {
          "problem": "Managing booking conflicts and availability",
          "solution": "Integrated a smart calendar with automated availability tracking"
        },
        {
          "problem": "Ensuring smooth communication between Pujaris and clients",
          "solution": "Implemented secure in-app messaging and notification alerts"
        },
        {
          "problem": "Expanding services to different regions with local languages",
          "solution": "Developed multi-language support for better accessibility"
        }
      ]
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
  // const navigate = useNavigate();
  const [visibleProjects,] = useState(3);

  // const handleViewAll = (category) => {
  //   navigate(`/portfolio/${category}`, { state: { projects: categories[category], categoryName: category } });
  // };

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
          <a
            className="view-all-button"
            href={`/portfolio/${category}`}
          // onClick={() => handleViewAll(category)}
          >
            View All
          </a>

        </div>
      ))}
    </div>
  );
};

export default Accordion;