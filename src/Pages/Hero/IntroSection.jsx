import React from "react";
import "./IntroSection.css";
import intrologo from "../../Components/Assets/web-developer-animation.mp4"; // Replace with actual image path
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import Projects from "../Projects/Projects";
import OurTeam from "../OurTeam/OurTeam";
import Contact from "../Contact/Contact";
import TeamBlogs from "../Blogs/TeamBlogs";

// import sectionDivider from '../../Components/Assets/sectionDividers.png'
// import servicesImage from "./assets/servicesImage.jpg"; // Replace with actual image path

const IntroSection = () => {


	return (
		<>

			<section className="intro-section">
				<div className="intro-container">
					<div className="intro-content">
						<h1 className="intro-title">Transforming Ideas into Digital Excellence</h1>
						<p className="intro-description">
							Empowering businesses with cutting-edge technology solutions in
							App Development, Flutter Development, Digital Marketing, UI/UX Design, Web
							Development, and E-Commerce Solutions
						</p>
						{/* <ul className="intro-services">
							<li>✔ Mobile App Development</li>
							<li>✔ Flutter & Cross-Platform Development</li>
							<li>✔ E-Commerce Solutions</li>
							<li>✔ Web Development</li>
							<li>✔ Digital Marketing (SEO, PPC, GMB)</li>
							<li>✔ Intuitive UI/UX Design</li>
						</ul> */}
						<button className="intro-learn-more" style={{ marginRight: 5, marginBottom: 5 }} onClick={() => window.location.href = '/services'} >
							<span className="intro-circle" aria-hidden="true">
								<span className="intro-icon intro-arrow"></span>
							</span>
							<span className="intro-button-text">Explore Our Services</span>
						</button >
						<button className="intro-learn-more" onClick={() => window.location.href = '/contact'}>
							<span className="intro-circle" aria-hidden="true">
								<span className="intro-icon intro-arrow"></span>
							</span>
							<span className="intro-button-text">Get in Touch</span>
						</button >

					</div >

					{/* <div className="morphing-box"> */}
					< video src={intrologo} width="50%" autoPlay loop muted style={{ mixBlendMode: 'multiply' }}>
					</video >

					{/* </div> */}

				</div >
			</section >
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#bfc3f9", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#2c77f5", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad1)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad1)"></path>
			</svg>
			<Services />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad2)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad2)"></path>
			</svg>
			<Clients />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<Projects />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<OurTeam />
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<TeamBlogs />

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
				<defs>
					<linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" style={{ stopColor: "#c6c2f5", stopOpacity: 1 }} />
						<stop offset="100%" style={{ stopColor: "#b554ff", stopOpacity: 1 }} />
						<stop offset="50%" style={{ stopColor: "#f9c4f6", stopOpacity: 1 }} />
					</linearGradient>
				</defs>
				<path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5" fill="url(#grad3)"></path>
				<path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z" fill="url(#grad3)"></path>
			</svg>
			<Contact />

		</>
	);
};

export default IntroSection;
