import React from 'react';
import Banner from '../../components/Banner/Banner';
import './DirectorsBoard.css';

const DirectorsBoard = () => {

    return (
        <div className='directors-board'>
            <Banner title={`İdarə Heyəti`} description={`HAQQIMIZDA / İDARƏ HEYƏTİ`} />
            <div className='container my-5'>
                <div 
                    className="directors-board-composition row"
                >
                    <h2 
                        className='col-12 mt-3 text-center'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        İDARƏ HEYƏTİNİN TƏRKİBİ
                    </h2>
                    <div 
                        className='col-lg-6'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3>ABDURRAHMAN ŞENTÜRK</h3>
                        <p>İdarə heyətinin sədri</p>
                    </div>
                    <div 
                        className='col-lg-6'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3>ALİ ŞENTÜRK</h3>
                        <p>İdarə heyətinin rəhbərinin müavini</p>
                    </div>
                    <h2 
                        className='col-12 mt-5 text-center'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        İDARƏ HEYƏTİ ÜZVLƏRİ
                    </h2>
                    <div 
                        className='col-lg-4'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3>AHMET ŞENTÜRK</h3>
                        <p>İdarə heyəti üzvü</p>
                    </div>
                    <div 
                        className='col-lg-4'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                    >
                        <h3>GÜNGÖR ŞENTÜRK</h3>
                        <p>İdarə heyəti üzvü</p>
                    </div>
                    <div 
                        className='col-lg-4'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500"    
                    >
                        <h3>ALİM ŞENTÜRK</h3>
                        <p>İdarə heyəti üzvü</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorsBoard;