import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import homepage_background from '../Assets/homepage_background.jpg';

export const Hero = () => {
    return (
        <div className='hero'>
            <div>
                <img src={homepage_background} alt="Hero" />
            </div>
            <div className="hero-left">
                <div class="welcome-message">
                    🎅 Welcome New Offers on Merch! 🎅
                </div>
                <p>collections</p>
                <p>for everyone</p>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="Arrow Icon" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
