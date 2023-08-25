import React from 'react';
import banner from '../../assets/images/banner.svg';
import './Banner.css';

const Banner = ({ title, description }) => {
    return (
        <div className='banner-container'>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Banner;