import React from "react";
import "./TeamBlogs.css";
import outing1 from "../../Components/Assets/outin.png"; // Replace with your outing image
import outing2 from "../../Components/Assets/outing1.png"; // Replace with your outing image
import outing3 from "../../Components/Assets/outing2.png"; // Replace with your outing image


const TeamBlogs = () => {
    const blogs = [
        {
            title: "Team Outing to the Beach",
            date: "January 2025",
            image: outing1,
            description: "Our team had an amazing time at the beach, enjoying the sun, games, and quality time together. Here are some highlights of the outing!",
            link: "#",
        },
        {
            title: "Winter Vacation Getaway",
            date: "December 2024",
            image: outing2,
            description: "Our team spent a relaxing winter vacation at the mountains, bonding over winter activities and creating unforgettable memories.",
            link: "#",
        },
        {
            title: "Team Building Activity at the Park",
            date: "November 2024",
            image: outing3,
            description: "A fun-filled day of team-building exercises at the local park. Everyone participated in activities that encouraged collaboration and teamwork!",
            link: "#",
        },
        {
            title: "Summer Vacation Adventures",
            date: "August 2024",
            image: outing1,
            description: "The team had a great time at a summer getaway, hiking, exploring, and relaxing in nature. Check out the best moments from our trip!",
            link: "#",
        },
    ];

    return (
        <section className="blogs-section">
            <div className="blogs-container">
                <h2 className="blogs-title">Team Blogs</h2>
                <p className="blogs-subtitle">Check out the highlights from our recent team outings and vacations!</p>
                <div className="blogs-grid">
                    {blogs.map((blog, index) => (
                        <div key={index} className="blog-card">
                            <img src={blog.image} alt={blog.title} className="blog-image" />
                            <div className="blog-overlay">
                                <h3>{blog.title}</h3>
                                <p>{blog.date}</p>
                                <p style={{ fontSize: '10px' }}>{blog.description}</p>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamBlogs;
