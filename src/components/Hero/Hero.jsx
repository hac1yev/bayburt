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
                    <li>MAGİSTRAL YOL , KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ</li><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987 5.34V4.206H2.772L4.221 4.395L4.326 4.164L3.15 3.282L1.89 2.001L2.688 1.224L3.948 2.484L4.851 3.639L5.082 3.534L4.893 2.085V0.299999H6.027V2.085L5.838 3.534L6.069 3.639L6.972 2.484L8.232 1.224L9.03 2.001L7.77 3.282L6.594 4.164L6.699 4.395L8.148 4.206H9.933V5.34H8.148L6.699 5.172L6.594 5.382L7.77 6.285L9.03 7.545L8.232 8.343L6.972 7.083L6.069 5.907L5.838 6.012L6.027 7.461V9.246H4.893V7.461L5.082 6.012L4.851 5.907L3.948 7.083L2.688 8.343L1.89 7.545L3.15 6.285L4.326 5.382L4.221 5.172L2.772 5.34H0.987Z" fill="#928EFF" />
                    </svg>

                    <li>METRO LAYİHƏLƏRİ</li><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987 5.34V4.206H2.772L4.221 4.395L4.326 4.164L3.15 3.282L1.89 2.001L2.688 1.224L3.948 2.484L4.851 3.639L5.082 3.534L4.893 2.085V0.299999H6.027V2.085L5.838 3.534L6.069 3.639L6.972 2.484L8.232 1.224L9.03 2.001L7.77 3.282L6.594 4.164L6.699 4.395L8.148 4.206H9.933V5.34H8.148L6.699 5.172L6.594 5.382L7.77 6.285L9.03 7.545L8.232 8.343L6.972 7.083L6.069 5.907L5.838 6.012L6.027 7.461V9.246H4.893V7.461L5.082 6.012L4.851 5.907L3.948 7.083L2.688 8.343L1.89 7.545L3.15 6.285L4.326 5.382L4.221 5.172L2.772 5.34H0.987Z" fill="#928EFF" />
                    </svg>

                    <li>HAVA LİMANI LAYİHƏLƏR</li><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987 5.34V4.206H2.772L4.221 4.395L4.326 4.164L3.15 3.282L1.89 2.001L2.688 1.224L3.948 2.484L4.851 3.639L5.082 3.534L4.893 2.085V0.299999H6.027V2.085L5.838 3.534L6.069 3.639L6.972 2.484L8.232 1.224L9.03 2.001L7.77 3.282L6.594 4.164L6.699 4.395L8.148 4.206H9.933V5.34H8.148L6.699 5.172L6.594 5.382L7.77 6.285L9.03 7.545L8.232 8.343L6.972 7.083L6.069 5.907L5.838 6.012L6.027 7.461V9.246H4.893V7.461L5.082 6.012L4.851 5.907L3.948 7.083L2.688 8.343L1.89 7.545L3.15 6.285L4.326 5.382L4.221 5.172L2.772 5.34H0.987Z" fill="#928EFF" />
                    </svg>

                    <li>DƏMİRYOLU LAYİHƏLƏR</li><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987 5.34V4.206H2.772L4.221 4.395L4.326 4.164L3.15 3.282L1.89 2.001L2.688 1.224L3.948 2.484L4.851 3.639L5.082 3.534L4.893 2.085V0.299999H6.027V2.085L5.838 3.534L6.069 3.639L6.972 2.484L8.232 1.224L9.03 2.001L7.77 3.282L6.594 4.164L6.699 4.395L8.148 4.206H9.933V5.34H8.148L6.699 5.172L6.594 5.382L7.77 6.285L9.03 7.545L8.232 8.343L6.972 7.083L6.069 5.907L5.838 6.012L6.027 7.461V9.246H4.893V7.461L5.082 6.012L4.851 5.907L3.948 7.083L2.688 8.343L1.89 7.545L3.15 6.285L4.326 5.382L4.221 5.172L2.772 5.34H0.987Z" fill="#928EFF" />
                    </svg>

                    <li>SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ</li><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.987 5.34V4.206H2.772L4.221 4.395L4.326 4.164L3.15 3.282L1.89 2.001L2.688 1.224L3.948 2.484L4.851 3.639L5.082 3.534L4.893 2.085V0.299999H6.027V2.085L5.838 3.534L6.069 3.639L6.972 2.484L8.232 1.224L9.03 2.001L7.77 3.282L6.594 4.164L6.699 4.395L8.148 4.206H9.933V5.34H8.148L6.699 5.172L6.594 5.382L7.77 6.285L9.03 7.545L8.232 8.343L6.972 7.083L6.069 5.907L5.838 6.012L6.027 7.461V9.246H4.893V7.461L5.082 6.012L4.851 5.907L3.948 7.083L2.688 8.343L1.89 7.545L3.15 6.285L4.326 5.382L4.221 5.172L2.772 5.34H0.987Z" fill="#928EFF" />
                    </svg>

                    <li>ÜST QURULUŞ LAYİHƏLƏRİ</li>
                </ul>
            </Marquee>
        </div>
    );
}

export default Hero;