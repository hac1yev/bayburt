import React from 'react';
import { allProjects } from '../../assets/dummyApi/project-api';
import { useParams } from 'react-router-dom';
import projectDetail1 from '../../assets/images/projects/projectDetail1.svg';
import projectDetail2 from '../../assets/images/projects/projectDetail2.svg';
import './Projects.css';

const ProjectDetail = () => {
    const { projectId } = useParams();
    let findedItem = allProjects.find(item => item.id === projectId);  

    return (
        <div className='container my-3'>
            <div className="row">
                <h4 className='project-detail-title'>{findedItem.footerText}</h4>
            </div>
            <div className='row projectdetailrow'>
                <div className='my-3'>
                    <div className="col-12 project-detail-row"></div>
                </div>
                <p className='project-detail-desc'>{findedItem.allDesc}</p>
                <div className='col-lg-6'>
                    <div className='project-detail-left'>
                        <img src={projectDetail2} alt="projectDetail2" />
                    </div>
                </div>
                <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                    <div className="row project-detail-right w-100">
                        <div className="col-lg-12 px-0">
                            <div className='project-detail-img1'>
                                <img src={projectDetail1} alt="projectDetail1" />
                            </div>
                        </div>
                        <div className="col-lg-12 px-0">
                            <div className='project-detail-img2'>
                                <img src={projectDetail1} alt="projectDetail1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;