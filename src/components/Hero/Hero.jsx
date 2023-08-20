import React, { useState } from 'react';
import './Hero.css';
import hero_img from '../../assets/images/hero-img.webp';
import hero_img_light from '../../assets/images/hero-img-light.webp';
import { useSelector } from 'react-redux';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Hero = () => {
    const isDarkMode = useSelector(state => state.modeReducer.mode);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='hero-section container'>
            <h2>50 İLİ gerİdə qoyarkən...</h2>
            <img className='img-fluid' src={isDarkMode === 'dark' ? hero_img : hero_img_light} alt="hero-img" />
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



            <div className='row justify-content-between leader-message-container'>
                <div className='col-lg-3 leader-message-first'>
                    <h1>RƏHBƏRİN MESAJI</h1>
                    <button className='mybtn'>VIEW OUR STORY</button>
                </div>
                <div className="leader-message-inner col-lg-8">
                    <p>Həyatımızın ilk pəncərəsinin açıldığı "ailə" müəssisəsini ayaqda üstə saxlayan sağlam    prinsiplər, ənənələr, gündəlik davranışlar, müəssisənin uzun müddətli var olmasını təmin edirlər. Bir müəssisə, yaşayan bir orqanizm olaraq təsvir edilərkən, onun, eynilə insanlar kimi emosional və ictimai həyata sahib olaraq və daha çox çalışaraq, səy göstərərək, fiziki, mənəvi, zehni və ictimai zəkasını inkişaf etdirməsi gözlənilir.</p>
                    <b>Abdurrahman Şentürk <br /> İdarə Heyəti Rəhbəri</b>
                </div>
            </div>

            <div className="projects-container container">
                <h1>Layihələr</h1>

                <div className="all-projects">
                    <ul>
                        <li
                            onMouseEnter={handleMouseEnter}

                            id='5'
                        >
                            <Link to='/'>MAGİSTRAL YOL , KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {isHovered && (
                                <div className="image-container">
                                    <img
                                        src="/1.png"
                                        alt="on hover"
                                        onMouseLeave={handleMouseLeave}
                                    />
                                </div>
                            )}
                        </li>
                        <li>
                            <Link to='/'>METRO LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li>
                            <Link to='/'>HAVA LİMANI LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li>
                            <Link to='/'>DƏMİR YOLU LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li>
                            <Link to='/'>SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                        <li>
                            <Link to='/'>ÜST QURULUŞ LAYİHƏLƏRİ</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;