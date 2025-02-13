import React from "react";
import "./About.css";
import intrologo from '../../Components/Assets/aboutus.mp4';
import mission from '../../Components/Assets/mission.mp4';
import vision from '../../Components/Assets/ourvision.mp4';

const AboutUs = () => {
    return (
        <main className="about-us" role="main">
            <section className="aboutintro">
                <article>
                    <header className="about-header">
                        <h1>Who We Are?</h1>
                        <p>
                            Techland IT Solutions is a forward-thinking technology company dedicated to
                            delivering innovative digital solutions. From app development to e-commerce platforms,
                            we empower businesses with tools to thrive in a digital-rst world. Our team of skilled
                            professionals combines creativity, technical expertise, and a client-rst mindset to craft
                            solutions tailored to your unique needs
                        </p>
                    </header>
                </article>


                <video
                    src={intrologo}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Introduction video about Techland IT Solutions"
                />
            </section>

            <section className="aboutus-section reverse about-header">
                <article>
                    <header>
                        <h2>Our Mission</h2>
                    </header>
                    <p>
                        At Techland IT Solutions, our mission is to drive transformative growth for businesses by harnessing the power of innovative technology. We deliver scalable, customer-centric digital solutions designed to solve complex challenges and enhance operational efficiency. By focusing on long-term impact, we ensure our clients are not only equipped to overcome today’s obstacles but are also empowered to seize new opportunities and thrive in the digital landscape of tomorrow.

                    </p>
                </article>
                <video
                    src={mission}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Mission video of Techland IT Solutions"
                />
            </section>

            <section className="aboutus-section about-header">
                <article>
                    <header>
                        <h2>Our Vision</h2>
                    </header>
                    <p>
                        Our vision is to be a global leader in providing innovative and sustainable technology solutions that empower businesses to succeed in an ever-evolving digital world. We aim to bridge the gap between technology and business, creating tailored solutions that drive meaningful transformation, foster growth, and enable our clients to unlock their full potential in a rapidly changing marketplace.                    </p>
                </article>
                <video
                    src={vision}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px' }}
                    aria-label="Vision video of Techland IT Solutions"
                />
            </section>

            <section className="about-values">
                <header>
                    <h2>Our Core Values</h2>
                </header>
                <div className="values-grid">
                    <article className="value-item">
                        <header>
                            <h3>Innovation</h3>
                        </header>
                        <p>We embrace creativity and leverage the latest technologies to deliver innovative solutions.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Integrity</h3>
                        </header>
                        <p>We operate with honesty and transparency in everything we do.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Customer-Centricity</h3>
                        </header>
                        <p>Our clients are at the center of our success, and their satisfaction is our top priority.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Excellence</h3>
                        </header>
                        <p>We are committed to maintaining the highest quality standards in all our work.</p>
                    </article>
                    <article className="value-item">
                        <header>
                            <h3>Collaboration</h3>
                        </header>
                        <p>We value teamwork and foster strong partnerships with our clients and stakeholders.</p>
                    </article>
                </div>
            </section>
            <section className="aboutus-container">


                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>What We Do</h2>
                        <p>
                            At Techland IT Solutions, we provide a diverse range of IT services tailored to meet the unique needs of our clients. Our services include:
                        </p>
                        <ul>
                            <li>
                                <strong>Web Development:</strong> Creating responsive and engaging websites tailored to your business needs.
                            </li>
                            <li>
                                <strong>Mobile App Development:</strong> Building user-friendly mobile apps for iOS, Android, and cross-platform solutions.
                            </li>
                            <li>
                                <strong>Digital Marketing:</strong> Implementing strategies to enhance your brand's online visibility and reach.
                            </li>
                            <li>
                                <strong>Custom Software Development:</strong> Tailored software solutions to address complex business challenges.
                            </li>
                            <li>
                                <strong>Cloud and IT Consulting:</strong> Helping businesses migrate to the cloud and optimize their IT infrastructure.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1 aboutus-reverse">
                    <div className="aboutus-content">
                        <h2>Why Choose Techland IT Solutions?</h2>
                        <ul>
                            <li>
                                <strong>Proven Expertise:</strong> With years of experience and a portfolio of successful projects, we bring unmatched expertise to every project.
                            </li>
                            <li>
                                <strong>Innovative Approach:</strong> Leveraging the latest technologies and best practices to deliver solutions that meet your business needs.
                            </li>
                            <li>
                                <strong>Client-Centric Focus:</strong> Building strong relationships with our clients and exceeding expectations.
                            </li>
                            <li>
                                <strong>Global Reach:</strong> Trusted by businesses worldwide, enabling us to build a diverse and loyal client base.
                            </li>
                            <li>
                                <strong>Dedicated Team:</strong> Our team of highly skilled developers, designers, and strategists work tirelessly to bring your ideas to life.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>Our Milestones</h2>
                        <ul>
                            <li>
                                <strong>2018:</strong> Techland IT Solutions was founded with a vision to create impactful digital solutions.
                            </li>
                            <li>
                                <strong>2020:</strong> Delivered our 100th successful project, spanning industries like healthcare, retail, and education.
                            </li>
                            <li>
                                <strong>2022:</strong> Expanded our global footprint, with clients in the USA, Europe, and Asia.
                            </li>
                            <li>
                                <strong>2024:</strong> Launched AI-driven solutions to help businesses automate workflows and improve decision-making.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="aboutus-section1 aboutus-reverse">
                    <div className="aboutus-content">
                        <h2>Meet Our Team</h2>
                        <p>
                            Our team is the backbone of our success. Comprising talented individuals with diverse expertise in <strong>development</strong>,
                            <strong>design</strong>, <strong>marketing</strong>, and <strong>strategy</strong>, we are united by a passion for technology and a
                            commitment to excellence. Every member of our team brings a unique perspective, allowing us to deliver solutions that are creative,
                            effective, and innovative.
                        </p>
                    </div>
                </div>

                <div className="aboutus-section1">
                    <div className="aboutus-content">
                        <h2>Our Journey</h2>
                        <p>
                            Techland IT Solutions was founded with a simple yet ambitious goal: to empower businesses by delivering innovative and reliable technology solutions. What began as a small team with a vision to drive digital transformation has evolved into a trusted partner for organizations around the globe. Through dedication, hard work, and a relentless pursuit of excellence, we have continuously expanded our expertise and service offerings.

                            From our humble beginnings in Hyderabad, India, we have made significant strides in the fields of mobile app development, web solutions, e-commerce, and digital marketing. Each project we undertake is a testament to our commitment to excellence and our drive to provide the best possible solutions to our clients.

                            As we continue to grow and innovate, our journey is not just about expanding our services but also about making a lasting impact—transforming businesses and helping them thrive in the digital age.                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;
