import React from 'react';
import Banner from '../../components/Banner/Banner';
import './DirectorsBoard.css';

const DirectorsBoard = () => {

    return (
        <div className='directors-board'>
            <Banner title={`İdarə Heyəti`} description={`HAQQIMIZDA / İDARƏ HEYƏTİ`} />
            <div className='container'>
                <div className="directors-board-composition row">
                    <h2 className='col-12 mt-3'>İDARƏ HEYƏTİNİN TƏRKİBİ</h2>
                    <div className='col-lg-6'>
                        <h3>İDARƏ HEYƏTİ SƏDRİ</h3>
                        <p>Abdurrahman Şəntürk</p>
                    </div>
                    <div className='col-lg-6'>
                        <h3>İDARƏ HEYƏTİ RƏHBƏRİNİN MÜAVİNİ</h3>
                        <p>Ali Şəntürk</p>
                    </div>
                    <h2 className='col-12 mt-5'>İDARƏ HEYƏTİ ÜZVLƏRİ</h2>
                    <div className='col-lg-4'>
                        <h3>İDARƏ HEYƏTİ ÜZVÜ</h3>
                        <p>Ahmet Şəntürk</p>
                    </div>
                    <div className='col-lg-4'>
                        <h3>İDARƏ HEYƏTİ ÜZVÜ</h3>
                        <p>Güngör Şəntürk</p>
                    </div>
                    <div className='col-lg-4'>
                        <h3>İDARƏ HEYƏTİ ÜZVÜ</h3>
                        <p>Alim Şəntürk</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorsBoard;