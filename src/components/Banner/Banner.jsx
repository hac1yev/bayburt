import React from 'react';
// import banner from '../../assets/images/banner.svg';
import './Banner.css';

const Banner = ({ title, description }) => {
    return (
        <div className='banner-container'>
            <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Banner;