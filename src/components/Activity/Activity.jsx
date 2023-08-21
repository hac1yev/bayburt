import React, { useState } from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

const Activity = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
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
    );
};

export default Activity;