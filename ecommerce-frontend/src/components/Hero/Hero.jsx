import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';

// Hero component for the main hero section in the Shop page.

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow pointing to the latest collection" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
