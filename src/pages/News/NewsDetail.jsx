import React from 'react';
import './News.css';
import { useParams } from 'react-router-dom';
import { newsApi } from '../../assets/dummyApi/newsApi';

const NewsDetail = () => {
    const { newsId } = useParams();

    let findedNews = newsApi.flat().find((item) => item.id === newsId);    

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-12 news-card news-detail-card">
                    <div className='news-detail-img'>
                        {findedNews.img && <img src={findedNews.img.default} alt="news" />}
                    </div>
                    <p>{findedNews.desc}</p>
                    <span>{findedNews.date}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;