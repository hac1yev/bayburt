import React from 'react';
import { allProjects } from '../../assets/dummyApi/project-api';
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import projectDetail1 from '../../assets/images/projects/projectDetail1.svg';
import projectDetail2 from '../../assets/images/projects/projectDetail2.svg';
import close_icon from '../../assets/images/close.png';
import fullscreen from '../../assets/images/pr-detail-fullscreen.svg';
import './Projects.css';
import { useState } from 'react';

const ProjectDetail = () => {
    const [openSlider,setOpenSlider] = useState(false);

    const { projectId } = useParams();
    let findedItem = allProjects.find(item => item.id === projectId);  

    const images = [
        {
          original: projectDetail1,
          thumbnail: projectDetail1,
        },
        {
          original: projectDetail2,
          thumbnail: projectDetail2,
        },
        {
          original: projectDetail1,
          thumbnail: projectDetail1,
        },
      ];

      const handleOpenSlider = () => {
        setOpenSlider(true);
      };

      const handleCloseSlider = () => {
        setOpenSlider(false);
      };

    return (
        <>
            <div className='container my-3'>
                <div className="row">
                    <h4 
                        className='project-detail-title'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700"
                    >
                        {findedItem.footerText}
                    </h4>
                </div>
                <div className='row projectdetailrow'>
                    <div className='my-3'>
                        <div className="col-12 project-detail-row"></div>
                    </div>
                    <p 
                        className='project-detail-desc'
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="700"
                    >
                        {findedItem.allDesc}
                    </p>
                    <div className='col-lg-6'>
                        <div className='project-detail-left'>
                            <div className='pr-fullscreen' onClick={handleOpenSlider}>
                                <img 
                                    src={fullscreen} 
                                    alt="fullscreen" 
                                />
                            </div>
                            <img 
                                className="pr-detail-left-img" 
                                src={projectDetail2} 
                                alt="projectDetail2" 
                                data-aos="zoom-in"
                                data-aos-easing="linear"
                                data-aos-duration="700"
                            />
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        <div className="row project-detail-right w-100">
                            <div className="col-lg-12 px-0">
                                <div className='project-detail-img1'>
                                    <img
                                        src={projectDetail1} 
                                        alt="projectDetail1" 
                                        data-aos="zoom-in"
                                        data-aos-easing="linear"
                                        data-aos-duration="700"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-12 px-0">
                                <div className='project-detail-img2'>
                                    <img 
                                        src={projectDetail1} 
                                        alt="projectDetail1" 
                                        data-aos="zoom-in"
                                        data-aos-easing="linear"
                                        data-aos-duration="700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {openSlider && <div className='project-detail-overlay'>
                <img src={close_icon} className='project-detail-close-icon' alt="close-icon" onClick={handleCloseSlider} />
                <ImageGallery items={images} />
            </div>}
        </>
    );
};

export default ProjectDetail;