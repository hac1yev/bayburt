import React from 'react';
import './News.css';
import Banner from '../../components/Banner/Banner';
import { newsApi } from '../../assets/dummyApi/newsApi';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div>
            <Banner title="XƏBƏRLƏR" description="ƏSAS SƏHİFƏ/XƏBƏRLƏR" />
            <div className="container my-5">
                <div className="row">
                    {newsApi.map(item => (
                        <div class="column">
                            {item.map(imgItem => (
                                <Link onClick={() => window.scrollTo(0, 0)} to={`/news/${imgItem.id}`} class="news-card">
                                    <div className='news-card-img'>
                                        {imgItem.img?.default && <img src={imgItem.img?.default} alt={imgItem.date} />}
                                    </div>
                                    <p>{imgItem.desc}</p>
                                    <span>{imgItem.date}</span>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;