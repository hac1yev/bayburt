import React, { useState } from 'react';
import './Activity.css';
import { Link } from 'react-router-dom';

const Activity = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imgId,setImgId] = useState('');

    const dummyData = [
        {
            id: 1,
            image: '/1.png',
            link: 'MAGİSTRAL YOL , KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ',
            path: '/projects/highway'
        },
        {
            id: 2,
            image: '/2.png',
            link: 'METRO LAYİHƏLƏRİ',
            path: '/projects/subway'
        },
        {
            id: 3,
            image: '/3.png',
            link: 'HAVA LİMANI LAYİHƏLƏRİ',
            path: '/projects/airport'
        },
        {
            id: 4,
            image: '/4.png',
            link: 'DƏMİR YOLU LAYİHƏLƏRİ',
            path: '/projects/railway'
        },
        {
            id: 5,
            image: '/5.png',
            link: 'SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ',
            path: '/projects/dam-port'
        },
        {
            id: 6,
            image: '/6.png',
            link: 'ÜST QURULUŞ LAYİHƏLƏRİ',
            path: '/projects/superstructure'
        },
    ]

    const handleMouseEnter = (id) => {
        setIsHovered(true);
        setImgId(id);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        
    };

    return (
        <div className="projects-container container">
                <h1>Fəaliyyət Sahələri</h1>

                <div className="all-projects">
                    <ul>
                    {
                        dummyData.map((item) => 
                            <li
                                id={item.id}
                                key={item.id}
                                onMouseEnter={handleMouseEnter.bind(null, item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link  
                                    to={item.path}>{item.link}</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="47" viewBox="0 0 49 51" fill="none">
                                    <path d="M2 49L47 2M47 2V47.12M47 2H3.8" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                {isHovered && (
                                    <div className="image-container">
                                        <img
                                            id='activity_id'
                                            src={`/${imgId}.png`}
                                            alt="on hover"
                                        />
                                    </div>
                                )}
                            </li>
                        )
                    }
                    </ul>
                </div>
            </div>
    );
};

export default Activity;