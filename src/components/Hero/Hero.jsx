import React, { useEffect, useState } from 'react';
import './Hero.css';
import hero_img1 from '../../assets/images/4n.webp';
import hero_img2 from '../../assets/images/3n.png';
import hero_img3 from '../../assets/images/2n.png';
import hero_img4 from '../../assets/images/1n.png';

import hero_img5 from '../../assets/images/4nd.webp';
import hero_img6 from '../../assets/images/3nd.png';
import hero_img7 from '../../assets/images/2nd.png';
import hero_img8 from '../../assets/images/1nd.png';
// import hero_img_light from '../../assets/images/hero-img-light.webp';
import { useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";

const Hero = () => {
    const isDarkMode = useSelector(state => state.modeReducer.mode);
    const [image, setImage] = useState('')

    useEffect(() => {
        let imgArray = [
            hero_img1,
            hero_img2,
            hero_img3,
            hero_img4
        ];
        let newArray = [hero_img5,hero_img6,hero_img7,hero_img8];
        let photos;


        if (isDarkMode === 'light') {
            photos = newArray
        }
        else {
            photos = imgArray
        }
        function images() {
            var randomNumber1 = Math.floor(Math.random() * photos.length);
            const selectedImages = photos[randomNumber1]
            setImage(selectedImages);
        }
        images()
    }, [isDarkMode])


    return (
        <div className='hero-section container'>
            <h2>50 İLİ gerİdə qoyarkən...</h2>
            <img className='img-fluid main-img' src={image} alt="" />
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
};

export default Hero;