import React from 'react';
import './Header.css';

// Hero component for the main hero section in the Shop page.

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <p>Welcome</p>
                <div className="hero-latest-btn">
                    <p> Sign Up now to view our Latest Collection</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
