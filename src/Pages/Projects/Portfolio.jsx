import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Portfolio.css'; // Import the updated CSS file

import abhisreeweb from '../../Components/Assets/Projectimg/abhisreeweb.png';
import cashexbiteboxweb from '../../Components/Assets/Projectimg/cashexbiteboxweb.png';
import cashexweb from '../../Components/Assets/Projectimg/cashexweb.png';
import meatoweb from '../../Components/Assets/Projectimg/meatoweb.jpeg';
import nudealweb from '../../Components/Assets/Projectimg/nudealweb.png';
import templecityweb from '../../Components/Assets/Projectimg/templecityweb.png';
import workoasisweb from '../../Components/Assets/Projectimg/workoasisweb.png';

import nudeal from '../../Components/Assets/Projectimg/nudeal.png'
import meato from '../../Components/Assets/Projectimg/meato.png'
import sapid from '../../Components/Assets/Projectimg/sapid.png'
import templecity from '../../Components/Assets/Projectimg/templecity.png'

const Portfolio = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const statsRef = useRef(null);
    const projects = {
        mobile: [
            {
                title: "Events Apps",
                description: "A dynamic platform that allows users to seamlessly discover, join, and organize events based on their interests. The app features event listings, ticket bookings, real-time notifications, and social media integration, making event participation effortless.",
                images: [templecity],
                links: [`https://play.google.com/store/apps/details?id=com.templecity.pujari&pcampaignid=web_share`],
                category: "mobile"
            },
            {
                title: "E-commerce Apps",
                description: "A robust e-commerce application designed to provide a seamless shopping experience. Features include an intuitive product catalog, secure payment gateways, order tracking, personalized recommendations, and an efficient user interface for easy navigation.",
                images: [nudeal],
                links: [`https://play.google.com/store/apps/details?id=com.nudeal.user&pcampaignid=web_share`],
                category: "mobile"
            },
            {
                title: "Food Delivery Apps",
                description: "A cutting-edge food ordering and delivery platform that bridges customers with local restaurants. Key features include real-time tracking, multiple payment options, user-friendly interface, AI-driven food recommendations, and a seamless checkout process.",
                images: [meato, sapid],
                links: [
                    `https://play.google.com/store/apps/details?id=com.meato.customer&pcampaignid=web_share`,
                    null
                ],
                category: "mobile"
            }
        ],
        web: [
            {
                title: "E-commerce Platform",
                description: "A fully integrated web-based shopping platform that offers advanced inventory and order management. The platform provides a smooth and secure online shopping experience, complete with user accounts, product categorization, real-time order tracking, and multiple payment gateway integrations.",
                images: [nudealweb],
                links: [`https://nr12brandsshop.in/`],
                category: "web"
            },
            {
                title: "Financial Services",
                description: "An innovative financial management and investment platform that provides users with seamless transactions, budgeting tools, investment tracking, and secure fund transfers. It features a user-friendly dashboard, AI-driven financial insights, and multi-layered security protocols.",
                images: [cashexbiteboxweb, cashexweb],
                links: [`https://biteboxes.in/`, `https://www.cashex.app/`],
                category: "web"
            },
            {
                title: "Food Delivery",
                description: "An online food delivery service that connects users with local restaurants, offering real-time order tracking, restaurant partnerships, and a hassle-free ordering experience. The platform supports multiple cuisines, easy payment options, and live customer support.",
                images: [meatoweb],
                links: [`https://meato.co/`],
                category: "web"
            },
            {
                title: "Jobs Portal",
                description: "A job search platform that bridges the gap between job seekers and employers. It provides smart filters for job searches, resume-building tools, real-time job alerts, and a seamless application process for both candidates and recruiters.",
                images: [workoasisweb],
                links: [`https://workoasis.in/`],
                category: "web"
            },
            {
                title: "Pooja Service",
                description: "An online platform designed for booking puja services and purchasing religious products. It offers a seamless user experience with online consultation services, puja kits, and expert guidance on various religious ceremonies.",
                images: [templecityweb],
                links: [`https://green-gorilla-677652.hostingersite.com/`],
                category: "web"
            },
            {
                title: "Foundation",
                description: "A non-profit organization website dedicated to supporting social causes and initiatives. The platform enables users to donate, volunteer, and stay updated on various charitable programs, ensuring transparency and impact-driven contributions.",
                images: [abhisreeweb],
                links: [`https://abhisreefoundation.org/`],
                category: "web"
            }
        ]
    };



    const stats = useRef([
        { label: "Mobile Apps", value: 156, icon: <i class="fa-solid fa-mobile-screen"></i> },
        { label: "Websites", value: 94, icon: <i class="fa-solid fa-globe"></i> },
        { label: "Projects", value: 52, icon: <i class="fa-solid fa-laptop-code"></i> },
        { label: "Happy Clients", value: 350, icon: <i class="fa-solid fa-user-group"></i> }
    ]);

    const [activeImageIndices, setActiveImageIndices] = useState({
        mobile: Array(projects.mobile.length).fill(0),
        web: Array(projects.web.length).fill(0),
    });

    const animateStats = useCallback(() => {
        stats.current.forEach((stat, index) => {
            let start = 0;
            const increment = Math.ceil(stat.value / 50);
            const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                    start = stat.value;
                    clearInterval(timer);
                }
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = start;
                    return newCounts;
                });
            }, 40);
        });
    }, [stats]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting && !animationTriggered) {
                    setAnimationTriggered(true);
                    animateStats();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(statsRef.current);
            }
        };
    }, [animateStats, animationTriggered]);

    // Carousel navigation functions for each project
    const goToNextImage = (ev, category, index) => {
        ev.preventDefault()
        ev.stopPropagation()
        const newIndices = { ...activeImageIndices };
        newIndices[category][index] = (newIndices[category][index] + 1) % projects[category][index].images.length;
        setActiveImageIndices(newIndices);
    };

    const goToPrevImage = (ev, category, index) => {
        ev.preventDefault()
        ev.stopPropagation()
        const newIndices = { ...activeImageIndices };
        newIndices[category][index] = (newIndices[category][index] - 1 + projects[category][index].images.length) % projects[category][index].images.length;
        setActiveImageIndices(newIndices);
    };

    const renderProjectSection = ({ title, items, category, isMobile = false }) => (
        <div className="project-section">
            <h2>{title}</h2>
            <div className="project-items">
                {items.map((project, index) => (
                    <div key={index} className={`project-item ${index % 2 === 0 ? " " : 'reversed'}`}>
                        <div className={`project-image-wrapper mobile  `}>
                            {project.images.length > 1 ? <button className="carousel-btn prev" onClick={(ev) => goToPrevImage(ev, category, index)}>
                                &#8592;
                            </button> : null}
                            <img
                                src={project.images[activeImageIndices[category][index]]}
                                alt={`${project.title}`}
                            />
                            {project.images.length > 1 ? <button className="carousel-btn next" onClick={(ev) => goToNextImage(ev, category, index)}>
                                &#8594;
                            </button> : null}
                        </div>
                        <div className={`project-info-wrapper mobile`}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button ><a style={{ all: 'unset' }} href={project.links[activeImageIndices[category][index]]} target="_blank" rel="noreferrer" >View Project</a></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="main-container">
            <div className="header-section">
                <h1>Our Work Portfolio</h1>
                <p>We create beautiful digital experiences that help businesses grow and succeed in the modern world.</p>
            </div>

            {renderProjectSection({ title: "Mobile Applications", items: projects.mobile, category: "mobile", isMobile: true })}
            {renderProjectSection({ title: "Web Projects", items: projects.web, category: "web", reversed: true })}

            {/* Project Completion Section */}
            <div className="project-container" ref={statsRef}>
                <div className="project-header">
                    <h1>Project Milestones</h1>
                    <p>
                        We’ve successfully delivered projects across diverse industries,
                        ensuring innovation and excellence at every step.
                    </p>
                </div>
                <div className="project-stats">
                    {stats.current.map((stat, index) => (
                        <div key={index} className="project-stat">
                            {stat.icon}
                            <h2>{counts[index]}+</h2>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
