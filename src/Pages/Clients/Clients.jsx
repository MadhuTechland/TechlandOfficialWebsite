import React from 'react';
import './Clients.css';
import { useEffect, useRef, useCallback } from "react";
// import person from '../../Components/Assets//person.jpg'
import boutique from '../../Components/Assets/logo/boutique.jpg'
import Meato from '../../Components/Assets/logo/Meato.png'
import Templecity from '../../Components/Assets/logo/Templecity.png'
import news_local from '../../Components/Assets/logo/news_local.png'
import nudeal from '../../Components/Assets/logo/nudeal.jpeg'
import sapid from '../../Components/Assets/logo/sapid.png'
import workoasis from '../../Components/Assets/logo/workoasis.webp'
import trustlabs from '../../Components/Assets/logo/trustlabsLogo.png';

const Clients = () => {
	const clients = [
		{ name: "Boutique", logo: boutique },
		{ name: "Meat O", logo: Meato },
		{ name: "Temple City", logo: Templecity },
		{ name: "V News", logo: news_local },
		{ name: "Nudeal", logo: nudeal },
		{ name: "Sapid", logo: sapid },
		{ name: "Work Oasis", logo: workoasis },
		{ name: "Trust Labs", logo: trustlabs },

	];

	const testimonials = [
		{
			client: "Boutique",
			feedback: "Techland IT Solutions gave our boutique a stunning online presence. The website and app look amazing!",
		},
		{
			client: "Meat O",
			feedback: "The e-commerce platform they created for Meat O is top-notch. Fast and reliable service.",
		},
		{
			client: "Temple City",
			feedback: "Techland IT Solutions truly understood our vision for Temple City. Our new site is a game-changer!",
		},
		{
			client: "V News",
			feedback: "టెక్‌ల్యాండ్ IT సొల్యూషన్స్ మా న్యూస్ ప్లాట్‌ఫారమ్‌ను సులభంగా ఉపయోగపడేలా మరియు డైనామిక్‌గా మార్చింది. అద్భుతమైన పని!",
		},
		{
			client: "Nudeal",
			feedback: "టెక్‌ల్యాండ్ IT సొల్యూషన్స్‌తో పని చేయడం చాలా సంతోషంగా ఉంది. వారు మా ఆలోచనలను అద్భుతంగా వాస్తవంగా మార్చారు.",
		},
		{
			client: "Sapid",
			feedback: "The team at Techland delivered creative and effective solutions for our site. We couldn’t be happier!",
		},
		{
			client: "Work Oasis",
			feedback: "Techland IT Solutions designed our website with great attention to detail and professionalism. Very satisfied!",
		},
		{
			client: "Trust Labs",
			feedback: "The Trust Labs team is thankful for Techland’s exceptional service. Our website looks fantastic and works flawlessly!",
		},
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
		<section className="clients-section">
			<div className="clients-container">
				<h2 className="clients-title">Our Clients</h2>
				<span className="clients-subtitle">
					We are proud to have partnered with exceptional clients across various industries.
				</span>
				<div
					className="clients-grid"
					onMouseEnter={() => cancelAnimationFrame(animationFrameClients.current)}
					onMouseLeave={() => (animationFrameClients.current = requestAnimationFrame(() =>
						scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}
					onTouchStart={() => cancelAnimationFrame(animationFrameClients.current)}
					// onTouchEnd={() => (animationFrameClients.current = requestAnimationFrame(() =>
					// 	scrollContent(cardContainerRef, animationFrameClients, scrollAmountClients, scrollBackClients)))}

					ref={cardContainerRef}
				>
					{clients.map((client, index) => (
						<div key={index} className="client-card">
							<img src={client.logo} alt={client.name} className="client-logo" />
							<p className="client-name">{client.name}</p>
						</div>
					))}
				</div>

				<div className="testimonials">
					<h3 className="testimonials-title">What Our Clients Say</h3>
					<div
						className="testimonial-grid"
						onMouseEnter={() => cancelAnimationFrame(animationFrameTestimonials.current)}
						onMouseLeave={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
							scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
						onTouchStart={() => cancelAnimationFrame(animationFrameTestimonials.current)}
						// onTouchEnd={() => (animationFrameTestimonials.current = requestAnimationFrame(() =>
						// 	scrollContent(testimonialContainerRef, animationFrameTestimonials, scrollAmountTestimonials, scrollBackTestimonials)))}
						ref={testimonialContainerRef}
					>
						{testimonials.map((testimonial, index) => (
							<div className="testimonial-card">
								{/* <img src={person} alt="" /> */}
								<div key={index}>
									<p className="testimonial-feedback">“{testimonial.feedback}”</p>
									<p className="testimonial-client">- {testimonial.client}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Clients;
