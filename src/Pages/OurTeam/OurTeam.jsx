import React from "react";
import "./OurTeam.css";
import personImg2 from '../../Components/Assets/Personimg/varaprasadimg.png'
import personImg from '../../Components/Assets/Personimg/madhuimg.png'

const OurTeam = () => {
    const team = [
        {
            name: "Madhu Kadali",
            role: "CEO & Founder",
            image: personImg,
            social: {
                linkedin: "https://www.linkedin.com/in/madhu-kadali-31992122b/",

            },
        },
        {
            name: "Vara Prasad",
            role: "Managing Director",
            image: personImg2,
            social: {
                linkedin: "https://www.linkedin.com/company/techland-it-solutions/",

            },
        },
        // {
        //     name: "Michael Johnson",
        //     role: "Lead Developer",
        //     image: personImg,
        //     social: {
        //         linkedin: "https://linkedin.com/in/michaeljohnson",
        //         twitter: "https://twitter.com/michaeljohnson",
        //     },
        // },
        // {
        //     name: "Emily Davis",
        //     role: "UI/UX Designer",
        //     image: personImg,
        //     social: {
        //         linkedin: "https://linkedin.com/in/emilydavis",
        //         twitter: "https://twitter.com/emilydavis",
        //     },
        // },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <h2 className="team-title">Our Team</h2>
                <p className="team-subtitle">
                    Meet the talented individuals who make Techland IT Solutions a success.
                </p>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                {member.social.linkedin && (
                                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                )}
                                {member.social.twitter && (
                                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
