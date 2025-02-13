import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css"; // CSS file for styling

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Show button when scrolled down 300px
    useEffect(() => {
        const toggleVisibility = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            const scrollTop = document.body.scrollTop; // Pixels scrolled from the top
            const scrollHeight =
                document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const scrollPercentage = (scrollTop / scrollHeight) * 100; // Scroll percentage

            // Calculate scroll progress
            // const scrollHeight = document.body.scrollHeight - document.body.clientHeight;
            // const scrollPosition = document.body.scrollTop;
            // const progress = (scrollPosition / scrollHeight) * 100;
            setScrollProgress(scrollPercentage);
        };

        document.body.addEventListener("scroll", toggleVisibility);
        return () => document.body.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top when clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll-to-top-container">
            <div className="progress-ring">
                <svg className="progress-ring-svg" width="80" height="80">
                    <circle
                        className="progress-ring-background"
                        stroke="#e6e6e6"
                        strokeWidth="8"
                        fill="transparent"
                        cx="40"
                        cy="40"
                        r="35"
                        style={{ strokeDasharray: `${scrollProgress * 2.2} 100` }}

                    />
                    <circle
                        className="progress-ring-circle"
                        stroke="#00c6ff"
                        strokeWidth="8"
                        fill="transparent"
                        cx="40"
                        cy="40"
                        r="35"
                        style={{ strokeDasharray: `${scrollProgress * 2.2} 100` }}
                    />
                </svg>
                <button
                    className={`scroll-to-top ${isVisible ? "show" : "hide"}`}
                    onClick={scrollToTop}
                >
                    ↑
                </button>
            </div>
        </div>
    );
};

export default ScrollToTopButton;
