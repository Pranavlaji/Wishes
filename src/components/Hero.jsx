import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img src="/hero-bg.webp" alt="Background" />
                <div className="overlay"></div>
            </div>

            <div className="content-wrapper">
                <div className="hero-text-main">
                    <h1>
                        We Create What People<br />
                        Feel Before They<br />
                        Understand.
                    </h1>
                </div>

                <div className="hero-text-sub">
                    <div className="sub-line-1">
                        <span className="serif-text small">The</span>
                        <span className="serif-text large">Media</span>
                    </div>
                    <div className="sub-line-2">
                        <span className="serif-text small">Agency</span>
                    </div>
                </div>

                <div className="hero-footer-logo">
                    <span>wishes</span>
                    <sup className="trademark">®</sup>
                </div>
            </div>
        </section>
    );
};

export default Hero;
