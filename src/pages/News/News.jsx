import React from 'react';
import './News.css';
import Banner from '../../components/Banner/Banner';
import { newsApi } from '../../assets/dummyApi/newsApi';

const News = () => {
    return (
        <div>
            <Banner />
            <div className="container my-5">
                <div className="row">
                    {newsApi.map(item => (
                        <div class="column">
                            <img src={item.img?.default} style={{width: '100%'}} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;