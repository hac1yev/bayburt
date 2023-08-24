import React, { useEffect, useState } from 'react';
import './Hero.css';
import hero_img1 from '../../assets/images/1l.png';
import hero_img2 from '../../assets/images/2l.png';
import hero_img3 from '../../assets/images/3l.png';
import hero_img4 from '../../assets/images/4l.png';

import hero_img5 from '../../assets/images/1d.png';
import hero_img6 from '../../assets/images/2d.png';
import hero_img7 from '../../assets/images/3d.png';
import hero_img8 from '../../assets/images/4d.png';
// import hero_img_light from '../../assets/images/hero-img-light.webp';
import { useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";

const Hero = () => {
    const isDarkMode = useSelector(state => state.modeReducer.mode);
    const [photos, setPhotos] = useState([])
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {

        const imgArray = [
            hero_img1,
            hero_img2,
            hero_img3,
            hero_img4
        ];

        let newArray = [hero_img5, hero_img6, hero_img7, hero_img8];

        if (isDarkMode === 'light') {
            setPhotos(newArray)
        }
        else {
            setPhotos(imgArray)
        }


        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [isDarkMode]);


    return (
        <div className='hero-section container'>
            <h2>50 İLİ gerİdə qoyarkən...</h2>
            <img className='img-fluid main-img' src={photos[currentImageIndex]} alt="" />
            <Marquee pauseOnHover='true' speed={40}>
                <ul className='hero-ul'>
                    <li>MAGİSTRAL YOL , KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ</li>
                    <li>METRO LAYİHƏLƏRİ</li>
                    <li>HAVA LİMANI LAYİHƏLƏR</li>
                    <li>DƏMİRYOLU LAYİHƏLƏR</li>
                    <li>SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ</li>
                    <li>ÜST QURULUŞ LAYİHƏLƏRİ</li>
                </ul>
            </Marquee>
        </div>
    );
}

export default Hero;