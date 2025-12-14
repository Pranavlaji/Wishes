import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about" className="about-us">
            <div className="about-us-header">
                <div className="label-container">
                    <div className="circle-indicator"></div>
                    <span className="about-label">About us</span>
                </div>
                <h2 className="about-headline">
                    We shape stories with intention, blending <span className="grey-text">cinematic craft and strategic precision </span>
                    <span className="grey-text">into media that moves people.</span>
                </h2>
            </div>

            <div className="about-grid-container">
                <div className="stats-column">
                    <div className="stat-card">
                        <h3>25<span className="plus-sign">+</span></h3>
                        <p>Years of experience</p>
                    </div>
                    <div className="stat-card">
                        <h3>1000<span className="plus-sign">+</span></h3>
                        <p>Projects completed</p>
                    </div>
                    <div className="stat-card">
                        <h3>25<span className="plus-sign">+</span></h3>
                        <p>Members on board</p>
                    </div>
                    <div className="stat-card">
                        <h3>75%</h3>
                        <p>Conversion rate improvement</p>
                    </div>
                    <button className="more-btn">
                        More about us
                        <span className="arrow-icon">↗</span>
                    </button>
                </div>

                <div className="image-column">
                    <img src="card.png" alt="Cinematic movement" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
