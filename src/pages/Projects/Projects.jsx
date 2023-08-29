import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import project1 from '../../assets/images/projects/project1.svg';
import project2 from '../../assets/images/projects/project2.svg';
import project3 from '../../assets/images/projects/project3.svg';

const Projects = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center mt-4">
                    <div className="row w-100">
                        <div className="col-12 px-0 project-card">
                            <h3>Tüm projeler</h3>
                            <div className='project-img'>
                                <img src={project1} alt="project1" />
                                <Link to="/projects/1" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>MAGİSTRAL YOL, KÖRPÜ VƏ TUNEL LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                        <div className='col-12 px-0 mt-4 project-card'>
                            <div className='project-img'>
                                <img src={project1} alt={project1} />
                                <Link to="/projects/2" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>DƏMİRYOLU LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center mt-4">
                    <div className="row w-100">
                        <div className="col-12 px-0 project-card">
                            <h3>DEVAM EDEN projeler</h3>
                            <div className='project-img'>
                                <img src={project2} alt="project2" />
                                <Link to="/projects/3" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>METRO LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                        <div className='col-12 px-0 mt-4 project-card'>
                            <div className='project-img'>
                                <img src={project2} alt="project2" />
                                <Link to="/projects/4" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>SULAMA, BƏND VƏ LİMAN LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center mt-4">
                    <div className="row w-100">
                        <div className="col-12 px-0 project-card">
                            <h3>TAMAMLANAN projeler</h3>
                            <div className='project-img'>
                                <img src={project3} alt="project3" />
                                <Link to="/projects/5" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>HAVA LİMANI LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                        <div className='col-12 px-0 mt-4 project-card'>
                            <div className='project-img'>
                                <img src={project3} alt="project3" />
                                <Link to="/projects/6" className='project-more'>
                                    Ətraflı
                                </Link>
                            </div>
                            <h5>ÜST QURULUŞ LAYİHƏLƏRİ</h5>
                            <p>Construction Works of Trabzon – Askale Bridge and Tunnel</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;