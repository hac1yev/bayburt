import React, { useState } from 'react';
import './Projects.css';
import project1 from '../../assets/images/projects/project1.svg';
import project2 from '../../assets/images/projects/project2.svg';
import project3 from '../../assets/images/projects/project3.svg';
import more_icon from '../../assets/images/more-icon.svg';
import { Link } from 'react-router-dom';

const allProjects = [
    {
        id: 'p1',
        footerHead: 'MAGİSTRAL YOL, KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project1,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p2',
        footerHead: 'DƏMİRYOLU LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project2,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p3',
        footerHead: 'METRO LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project3,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p4',
        footerHead: 'SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project1,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p5',
        footerHead: 'HAVA LİMANI LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project2,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p6',
        footerHead: 'ÜST QURULUŞ LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project3,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
];

const continuedProjects = [
    {
        id: 'p1',
        footerHead: 'MAGİSTRAL YOL, KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project1,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p2',
        footerHead: 'DƏMİRYOLU LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project2,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    
];

const completedProjects = [
    {
        id: 'p3',
        footerHead: 'METRO LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project3,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p4',
        footerHead: 'SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project1,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p5',
        footerHead: 'HAVA LİMANI LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project2,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
    {
        id: 'p6',
        footerHead: 'ÜST QURULUŞ LAYİHƏLƏRİ',
        footerText: 'Construction Works of Trabzon – Askale Bridge and Tunnel',
        img: project3,
        desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu...'
    },
];

const Projects = () => {
    const [projectTab,setProjectTab] = useState(1);
    
    const handleClick = (param) => {
        setProjectTab(param)
    }

    return (
        <div className='container'>
            <div className="row my-4">
                <div className="col-4 text-center">
                    <span className={projectTab === 1 ? 'project-tab active-project-tab' : 'project-tab'} onClick={handleClick.bind(null, 1)}>TÜM PROJELER</span>
                </div>
                <div className="col-4 text-center">
                    <span className={projectTab === 2 ? 'project-tab active-project-tab' : 'project-tab'} onClick={handleClick.bind(null, 2)}>DEVAM EDEN PROJELER</span>
                </div>
                <div className="col-4 text-center">
                    <span className={projectTab === 3 ? 'project-tab active-project-tab' : 'project-tab'} onClick={handleClick.bind(null, 3)}>TAMAMLANAN PROJELER</span>
                </div>
            </div>
            <div className="row">
                {projectTab === 1 && allProjects.map((item) => (
                    <div 
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-3" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                    >
                        <div className="px-0 project-card">
                            <div className='project-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to="/projects" className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>
                        </div>
                        <h5 className='project-card-h5 mt-3'>{item.footerHead}</h5>
                    </div>
                ))}
                {projectTab === 2 && continuedProjects.map((item) => (
                    <div 
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-3" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                    >
                        <div className="px-0 project-card">
                            <div className='project-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to="/projects" className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>
                        </div>
                        <h5 className='project-card-h5 mt-3'>{item.footerHead}</h5>
                    </div>
                ))}
                {projectTab === 3 && completedProjects.map((item) => (
                    <div 
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-3" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"  
                    >
                        <div className="px-0 project-card">
                            <div className='project-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to="/projects" className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>
                        </div>
                        <h5 className='project-card-h5 mt-3'>{item.footerHead}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;