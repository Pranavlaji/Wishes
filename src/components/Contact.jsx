import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div style={{ backgroundColor: '#ffffff' }}>
            <section id="contact" className="contact-section">
                <div className="contact-header">
                    <div className="circle-indicator"></div>
                    <span className="contact-label">Contact</span>
                </div>

                <div className="contact-content-grid">
                    <div className="contact-left-col">
                        <h2 className="contact-headline">Let’s Talk About Your Project</h2>

                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" placeholder="Melborn Becky" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" placeholder="MelbornBecky@gmail.com" className="form-input" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <input type="text" id="message" placeholder="Enter your message" className="form-input" />
                            </div>

                            <button type="submit" className="submit-button">
                                <span className="label">Submit</span> <span className="arrow">→</span>
                            </button>
                        </form>

                        <div className="contact-info">
                            <a href="mailto:hello@wishes.com" className="contact-email">hello@wishes.com</a>
                            <p className="contact-phone">(123) 456-7890</p>
                        </div>
                    </div>

                    <div className="contact-right-col">
                        <p className="contact-subtext">
                            Book a quick discovery call with our team and explore how design, storytelling, and strategy come together to elevate your business.
                        </p>
                        <div className="contact-image-wrapper">
                            {/* Placeholder for the image from design */}
                            <div className="contact-image-placeholder"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
