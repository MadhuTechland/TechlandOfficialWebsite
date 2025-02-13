import React, { useState } from 'react';
import "./Contact.css";
import axios from "axios";
import contactimg from '../../Components/Assets/contactus.mp4';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
    const [alertType, setAlertType] = useState(''); // For success or error alert styles

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setLoading(true);
        setResponseMessage("");

        try {
            const API_URL = "https://legacy.techlanditsolutions.com/api/contacts";

            const response = await axios.post(API_URL, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Success:", response.data);
            setResponseMessage("Message sent successfully!");
            setAlertType('success'); // Set alert type to success
            setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage("Failed to submit form. Please try again.");
            setAlertType('error'); // Set alert type to error
        } finally {
            setLoading(false);
            setShowAlert(true); // Show the alert after the submission
            setTimeout(() => {
                setShowAlert(false)
            }, 5000); // Hide alert after 5 seconds
        }
    };



    return (
        <>
            <div className='contact-title-header'>
                <h1 className="contact-title">Ready to Start Your Digital Journey?</h1>
                <p className="contact-content">
                    We’d love to hear from you! Whether you have inquiries about our services or need a tailored solution for your business, our team is here to help. Reach out to us today, and let’s discuss how we can drive your business forward with innovative and scalable technology solutions.
                </p>
            </div>
            {/* Custom Alert */}
            {showAlert && (
                <div className={`custom-alert ${alertType}`}>
                    <p>{responseMessage}</p>
                </div>
            )}

            <div className="contact-container-fluid">


                <div className="contact__card">
                    <div className="contact__content">
                        <h2 className="contact__heading">Contact Us</h2>

                        <div className="contact__list">
                            {/* Phone */}
                            <div className="contact-item">
                                <div className="contact-item__icon-box">
                                    <div className="contact-item__icon-circle">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>
                                </div>
                                <div className="contact-item__details">
                                    <h3 className="contact-item__title">Phone</h3>
                                    <a href="tel:+917842385604" className="contact-item__link">
                                        +91 784 238 5604
                                    </a>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="contact-item">
                                <div className="contact-item__icon-box">
                                    <div className="contact-item__icon-circle">
                                        <i class="fa-solid fa-envelope"></i>
                                    </div>
                                </div>
                                <div className="contact-item__details">
                                    <h3 className="contact-item__title">Email</h3>
                                    <a href="mailto:info@techlanditsolutions.com" className="contact-item__link">
                                        info@techlanditsolutions.com
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="contact-item">
                                <div className="contact-item__icon-box">
                                    <div className="contact-item__icon-circle">
                                        <i class="fa-solid fa-location-dot"></i>                                            </div>
                                </div>
                                <div className="contact-item__details">
                                    <h3 className="contact-item__title">Address</h3>
                                    <a
                                        href="https://maps.app.goo.gl/N13ixNnC7UHf7nwT9"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="contact-item__link"
                                    >
                                        VR Sunshine, 302, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='orstyle'>
                    Or
                </div>
                <div className="contact-form-content">
                    <form className="contact-form-control" onSubmit={handleSubmit}>
                        <div className="contact-input-field">
                            <input
                                type="text"
                                name="name"
                                className="contact-input"
                                placeholder=" "
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <label className="contact-label">Name</label>
                        </div>

                        <div className="contact-input-field">
                            <input
                                type="tel"
                                name="phone"
                                className="contact-input"
                                placeholder=" "
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <label className="contact-label">Phone Number</label>
                        </div>

                        <div className="contact-input-field">
                            <input
                                type="email"
                                name="email"
                                className="contact-input"
                                placeholder=" "
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <label className="contact-label">E-mail</label>
                        </div>

                        <div className="contact-input-field">
                            <textarea
                                id="message"
                                name="message"
                                className="contact-input"
                                placeholder=" "
                                required
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <label className="contact-label">Message</label>
                        </div>

                        <button
                            type="submit"
                            className="contact-submit-btn"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Submit"}
                        </button>


                    </form>
                </div>

                <video
                    src={contactimg}
                    width="40%"
                    autoPlay
                    loop
                    muted
                    style={{ mixBlendMode: 'multiply', marginTop: '-50px', flex: '1 1' }}
                    aria-label="Introduction video about Techland IT Solutions"
                />
            </div>
        </>
    );
}

export default Contact;
