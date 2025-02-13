import React, { useRef, useEffect, useCallback } from "react";
import "./Projects.css";
import nudeal from '../../Components/Assets/Projectimg/nudeal.png'
import meato from '../../Components/Assets/Projectimg/meato.png'
import sapid from '../../Components/Assets/Projectimg/sapid.png'
import templecity from '../../Components/Assets/Projectimg/templecity.png'


import abhisreeweb from '../../Components/Assets/Projectimg/abhisreeweb.png';
import cashexbiteboxweb from '../../Components/Assets/Projectimg/cashexbiteboxweb.png';
import cashexweb from '../../Components/Assets/Projectimg/cashexweb.png';
import meatoweb from '../../Components/Assets/Projectimg/meatoweb.jpeg';
import nudealweb from '../../Components/Assets/Projectimg/nudealweb.png';
import templecityweb from '../../Components/Assets/Projectimg/templecityweb.png';
import workoasisweb from '../../Components/Assets/Projectimg/workoasisweb.png';


const Projects = () => {
    const moblieProjects = [


        { name: "Nudeal", logo: nudeal, },
        { name: "Meat O", logo: meato, },
        { name: "Sapid", logo: sapid, },
        { name: "Temple City", logo: templecity, },

    ];
    const pcProjects = [
        { name: "Abhisree foundation", logo: abhisreeweb, },
        { name: "Bitebox ", logo: cashexbiteboxweb, },
        { name: "Cashex ", logo: cashexweb, },
        { name: "Meato", logo: meatoweb, },
        { name: "Nudeal", logo: nudealweb, },
        { name: "Temple city", logo: templecityweb, },
        { name: "Work Oasis", logo: workoasisweb, },

    ];



    // Refs and states for clients and testimonials
    const cardContainerRef = useRef(null);
    const testimonialContainerRef = useRef(null);
    const animationFrameClients = useRef(null);
    const animationFrameTestimonials = useRef(null);
    const scrollAmountClients = useRef(0);
    const scrollAmountTestimonials = useRef(0);
    const scrollSpeed = useRef(1);
    const scrollBackClients = useRef(false);
    const scrollBackTestimonials = useRef(false);

    const scrollContent = useCallback((containerRef, animationFrameRef, scrollAmountRef, scrollBackRef) => {
        if (containerRef.current) {
            // Check if scrolling should reverse
            if (!scrollBackRef.current && scrollAmountRef.current >= containerRef.current.scrollWidth - containerRef.current.clientWidth) {
                scrollBackRef.current = true;
            } else if (scrollBackRef.current && scrollAmountRef.current <= 0) {
                scrollBackRef.current = false;
            }

            // Adjust the scroll position
            scrollAmountRef.current += scrollBackRef.current ? -scrollSpeed.current : scrollSpeed.current;
            containerRef.current.scrollTo(scrollAmountRef.current, 0);

            // Request next animation frame
            animationFrameRef.current = requestAnimationFrame(() => scrollContent(containerRef, animationFrameRef, scrollAmountRef, scrollBackRef));
        }
    }, []);

    useEffect(() => {
        // Start scrolling clients
        animationFrameClients.current = requestAnimationFrame(() =>
            scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)
        );

        // Start scrolling testimonials
        animationFrameTestimonials.current = requestAnimationFrame(() =>
            scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)
        );

        // Clean up on unmount
        return () => {
            cancelAnimationFrame(animationFrameClients.current);
            cancelAnimationFrame(animationFrameTestimonials.current);
        };
    }, [scrollContent]);

    return (
        <section className="project-section">
            <div className="project-container">
                <h2 className="project-title">Our Moblie Projects</h2>
                <span className="project-subtitle">
                    We are proud to have partnered with exceptional clients across various industries.
                </span>
                <div
                    className="project-grid"
                    onMouseEnter={() => cancelAnimationFrame(animationFrameClients.current)}
                    onMouseLeave={() => (animationFrameClients.current = requestAnimationFrame(() =>
                        scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}
                    onTouchStart={() => cancelAnimationFrame(animationFrameClients.current)}
                    // onTouchEnd={() => (animationFrameClients.current = requestAnimationFrame(() =>
                    //     scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}

                    ref={cardContainerRef}
                >
                    {moblieProjects.map((client, index) => (
                        <div key={index} className="project-card">
                            <img src={client.logo} alt={client.name} className="project-logo-moblie" />
                            <p className="project-name">{client.name}</p>
                            <div className="mobileBtn"></div>
                        </div>
                    ))}
                </div>


                <h2 className="project-title">Our Website Projects</h2>
                <span className="project-subtitle">
                    We are proud to have partnered with exceptional clients across various industries.
                </span>
                <div
                    className="project-grid"
                    onMouseEnter={() => cancelAnimationFrame(animationFrameTestimonials.current)}
                    onMouseLeave={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
                        scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
                    onTouchStart={() => cancelAnimationFrame(animationFrameTestimonials.current)}
                    // onTouchEnd={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
                    //     scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
                    ref={testimonialContainerRef}
                >
                    {pcProjects.map((client, index) => (
                        <div key={index} className="project-card">
                            <img src={client.logo} alt={client.name} className="project-logo-pc" />
                            <p className="project-name">{client.name}</p>
                            <div className="pcStand"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Projects;

