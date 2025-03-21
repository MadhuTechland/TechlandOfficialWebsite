import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Portfolio.css'; // Import the updated CSS file

// import abhisreeweb from '../../Components/Assets/Projectimg/abhisreeweb.png';
// import cashexbiteboxweb from '../../Components/Assets/Projectimg/cashexbiteboxweb.png';
// import cashexweb from '../../Components/Assets/Projectimg/cashexweb.png';
// import meatoweb from '../../Components/Assets/Projectimg/meatoweb.jpeg';
// import nudealweb from '../../Components/Assets/Projectimg/nudealweb.png';
// import templecityweb from '../../Components/Assets/Projectimg/templecityweb.png';
// import workoasisweb from '../../Components/Assets/Projectimg/workoasisweb.png';

// import nudeal from '../../Components/Assets/Projectimg/nudeal.png'
// import meato from '../../Components/Assets/Projectimg/meato.png'
// import sapid from '../../Components/Assets/Projectimg/sapid.png'
// import templecity from '../../Components/Assets/Projectimg/templecity.png'
import Accordion from './Accordion';

const Portfolio = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const statsRef = useRef(null);
    const stats = useRef([
        { label: "Mobile Apps", value: 156, icon: <i className="fa-solid fa-mobile-screen"></i> },
        { label: "Websites", value: 94, icon: <i className="fa-solid fa-globe"></i> },
        { label: "Projects", value: 52, icon: <i className="fa-solid fa-laptop-code"></i> },
        { label: "Happy Clients", value: 350, icon: <i className="fa-solid fa-user-group"></i> }
    ]);



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


    return (
        <div className="main-container">
            <div className="header-section">
                <h1>Portfolio | Successful Projects in Web & App Development</h1>
                <p>View our portfolio showcasing successful digital marketing, web development, and app
                development projects delivered in Hyderabad.</p>
            </div>

            <Accordion />

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
                        <div key={stat.label} className="project-stat">
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
