import React from 'react';
import './Hero.css';
import hero_img from '../../assets/images/hero-img.webp';
import hero_img_light from '../../assets/images/hero-img-light.webp';
import { useSelector } from 'react-redux';

const Hero = () => {
    const isDarkMode = useSelector(state => state.modeReducer.mode);

    return (
        <div className='hero-section container'>
            <h2>50 İLİ gerİdə qoyarkən...</h2>
            <img className='img-fluid' src={isDarkMode === 'dark' ? hero_img: hero_img_light} alt="hero-img" />
            <ul className='hero-ul'>
                <li>MAGİSTRAL YOL , KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ</li>
                <li>METRO LAYİHƏLƏRİ</li>
                <li>HAVA LİMANI LAYİHƏLƏR</li>
                <li>DƏMİRYOLU LAYİHƏLƏR</li>
                <li>SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ</li>
                <li>ÜST QURULUŞ LAYİHƏLƏRİ</li>
            </ul>
        </div>
    );
};

export default Hero;