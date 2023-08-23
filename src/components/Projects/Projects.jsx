import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='projects-wrapper container'>
            <div className="row d-flex flex-column">
                <div className='col-md-12'>
                    <div className="row building-row">
                        <div className='building-greatness col-md-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <rect x="0.5" y="1" width="17" height="17" stroke="#2721F2"/>
                                <circle cx="9" cy="9.5" r="3" fill="#2721F2"/>
                            </svg>
                            <span>CANDID CONVICTION</span>
                        </div>
                        <h2 className='col-md-4 d-flex justify-content-center'>LAYİHƏLƏR</h2>
                        <div className='col-md-4'></div>
                    </div>
                </div>
                <p className='projects-content col-md-12'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                    Our companies are proving that you can build a world-class technology company anywhere. 
                    We believe the best advantages are the ones you already have. Build where your talent is. 
                    Build where your customers are. Build where you’re strongest.
                </p>
                <div className='row'>
                    <div className='col-md-4 project-empty-div'></div>
                    <div className='col-md-8 px-4'>
                        <div className='project-button-div'>
                            <Link to='/' className='project-button'>VIEW OUR PORTFOLIO</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;