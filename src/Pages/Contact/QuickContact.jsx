import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // Assuming you're using SCSS for styles

const QuickContact = ({ close }) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false); // State to control alert visibility
    const [alertType, setAlertType] = useState(''); // For success or error alert styles

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                close()
            }, 5000); // Hide alert after 5 seconds

        }
    };

    return (
        <div className="unique-form-container-bg">
            <div className="unique-form-container">
                <div className='unique-form-container-header'>
                    <h3>Get a Quote</h3>
                    <button className="unique-form-close-button" onClick={close}>
                        <svg fill="none" viewBox="0 0 15 15" height="15" width="15">
                            <path strokeLinecap="round" strokeWidth="2" stroke="white" d="M1 14L14 1"></path>
                            <path strokeLinecap="round" strokeWidth="2" stroke="white" d="M1 1L14 14"></path>
                        </svg>
                    </button>
                </div>

                {/* Custom Alert */}
                {showAlert && (
                    <div className={`custom-alert ${alertType}`}>
                        <p>{responseMessage}</p>
                    </div>
                )}

                <form className="unique-form" onSubmit={handleSubmit}>
                    <div className="unique-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="unique-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                    </div>

                    <div className="unique-form-submit-container">
                        <button type="submit" className="unique-form-submit-button" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default QuickContact;
