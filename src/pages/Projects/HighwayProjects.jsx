import React, { useState } from 'react';
import './Projects.css';
import more_icon from '../../assets/images/more-icon.svg';
import { Link } from 'react-router-dom';
import { allProjects } from '../../assets/dummyApi/project-api';
import { continuedProjects } from '../../assets/dummyApi/project-api';
import { completedProjects } from '../../assets/dummyApi/project-api';

const HighwayProjects = () => {
    const [showDetailId,setShowDetailId] = useState(null);
    const [projectTab,setProjectTab] = useState(1);
    
    const handleClick = (param) => {
        setProjectTab(param)
    }

    const handleShowDetail = (id) => {
        setShowDetailId(id);
    };

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
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-4" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                    >
                        <div className="px-0 project-cards">
                            <div className='project-other-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            {showDetailId === item.id && <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to={`/projects/${item.id}`} className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>}
                        </div>
                        {!(showDetailId === item.id) && <p className='project-card-p' onClick={handleShowDetail.bind(null, item.id)}>{item.footerText}</p>}
                    </div>
                ))}
                {projectTab === 2 && continuedProjects.map((item) => (
                    <div 
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-4" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"
                    >
                        <div className="px-0 project-cards">
                            <div className='project-other-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            {showDetailId === item.id && <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to={`/projects/${item.id}`} className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>}
                        </div>
                        {!(showDetailId === item.id) && <p className='project-card-p' onClick={handleShowDetail.bind(null, item.id)}>{item.footerText}</p>}
                    </div>
                ))}
                {projectTab === 3 && completedProjects.map((item) => (
                    <div 
                        className="col-lg-4 col-md-6 d-flex flex-column justify-content-center mt-4" 
                        key={item.id}
                        data-aos="zoom-in-down"
                        data-aos-duration="500"  
                    >
                        <div className="px-0 project-cards">
                            <div className='project-other-img'>
                                <img src={item.img} alt="project1" />
                            </div>
                            {showDetailId === item.id && <div className='project-content'>
                                <p>{item.footerText}</p>
                                <span>
                                    {item.desc}
                                </span>
                                <Link to={`/projects/${item.id}`} className="project-more-button mt-3">
                                    <img src={more_icon} alt="more" />
                                    Ətraflı
                                </Link>
                            </div>}
                        </div>
                        {!(showDetailId === item.id) && <p className='project-card-p' onClick={handleShowDetail.bind(null, item.id)}>{item.footerText}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HighwayProjects;