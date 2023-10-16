import React from 'react';
import Banner from '../../components/Banner/Banner';
import { activityData } from '../../assets/dummyApi/activity-api';
import './Activity.css';
import { Link } from 'react-router-dom';

const Activity = () => {
    return (
        <div className='activity-section'>
            <Banner title='FƏALİYYƏT SAHƏLƏRİ' description='ƏSAS SƏHİFƏ/FƏALİYYƏT SAHƏLƏRİ' />
            <div className="container my-5">
                <div className="row">
                    {activityData.map((item) => (
                        <div 
                            className="col-lg-4 col-md-6 activity-col"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="500"
                        >
                            <Link onClick={() => window.scrollTo(0,0)} to="/construction" className='activity-card'>
                                <div className='activity-img'>
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activity;