import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h1 className="footer-logo">wishes</h1>
                        <span className="footer-tagline">The <em>Media</em> Agency</span>
                    </div>
                    <div className="footer-address">
                        <p>Creating premium experiences at<br />123 Street, Sui Town, ZIP</p>
                    </div>
                </div>

                <div className="footer-middle">
                    <div className="newsletter-container">
                        <label className="newsletter-label">
                            Stay ahead of your competitors by joining our newsletter
                        </label>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="MelbornBecky@gmail.com"
                                className="newsletter-input"
                            />
                            <button type="submit" className="newsletter-submit">
                                &rarr;
                            </button>
                        </form>
                    </div>
                    <h2 className="reach-us-title">Reach Us</h2>
                </div>

                <div className="footer-bottom">
                    <a href="#" className="footer-nav-link">Home</a>
                    <a href="#" className="footer-nav-link">About us</a>
                    <a href="#" className="footer-nav-link">Work</a>
                    <a href="#" className="footer-nav-link">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
