import React from 'react'
import './Services.css'
import { useEffect, useRef, useCallback } from "react";
import uiux from '../../Components/Assets/UIUX.png'
import webdev from '../../Components/Assets/webdev.jpg'
import appdev from '../../Components/Assets/appdev.avif'
import eCommerceIcon from '../../Components/Assets/ecommerce-custom-web-banner.webp'
import digitalMarketingIcon from '../../Components/Assets/digital-marketing.png'
const Services = () => {
	const services = [
		{
			icon: appdev,
			title: "App Development",
			description: "Building robust, scalable, and intuitive mobile applications tailored to your business needs.",
		},
		{
			icon: webdev,
			title: "Web Development",
			description: "Creating responsive, high-performance websites that enhance your online presence.",
		},
		{
			icon: eCommerceIcon,
			title: "E-Commerce Solutions",
			description: "Designing seamless e-commerce platforms to provide engaging shopping experiences.",
		},
		{
			icon: digitalMarketingIcon,
			title: "Digital Marketing",
			description: "Boosting your visibility with SEO, PPC, and social media strategies.",
		},
		{
			icon: uiux,
			title: "UI/UX Design",
			description: "Crafting user-centric and visually stunning interfaces to elevate user experiences.",
		},
	];

	const cardContainerRef = useRef(null);
	const animationFrame = useRef(null);
	const scrollAmount = useRef(0);
	const scrollSpeed = useRef(1);
	const scrollback = useRef(false);

	const scrollCards = useCallback(() => {
		if (cardContainerRef.current) {
			// Scroll till the end
			if (!scrollback.current && (scrollAmount.current >= cardContainerRef.current.scrollWidth - cardContainerRef.current.clientWidth)) {
				// Reset to the start after reaching the end
				scrollback.current = true;
			} else {
				if (scrollback.current) {
					scrollAmount.current = scrollAmount.current - scrollSpeed.current;
				} else {
					scrollAmount.current += scrollSpeed.current;
				}
				if (scrollAmount.current < 1) {
					scrollback.current = false;
				}
			}

			// Scroll the container to the updated position
			cardContainerRef.current.scrollTo(scrollAmount.current, 0);
			animationFrame.current = requestAnimationFrame(scrollCards); // Request next frame for smooth animation
		}
	}, []);

	useEffect(() => {
		animationFrame.current = requestAnimationFrame(scrollCards); // Start scrolling when component is mounted

		return () => {
			cancelAnimationFrame(animationFrame.current); // Clean up the animation on unmount
		};
	}, [scrollCards]);
	return (
		<section className="services-section">
			<div className="services-container">
				<h2 className="services-title">Our Services</h2>
				<span className="services-subtitle">
					At Techland IT Solutions, we offer a wide range of services to help your business thrive in the digital world.
				</span>

				<div className="unique-card-container"
					ref={cardContainerRef}>
					{services.map((service, index) => (
						<div key={index} className="unique-card"

							onMouseEnter={() => cancelAnimationFrame(animationFrame.current)}
							onMouseLeave={() => (animationFrame.current = requestAnimationFrame(scrollCards))}
							onTouchStart={() => cancelAnimationFrame(animationFrame.current)}
						// onTouchEnd={() => (animationFrame.current = requestAnimationFrame(scrollCards))}
						>
							<img src={service.icon} alt={service.title} className="service-icon" />
							<h3 className="service-title">{service.title}</h3>
							<p className="service-description">{service.description}</p>
						</div>
					))}


				</div>

			</div>
		</section>
	)
}

export default Services