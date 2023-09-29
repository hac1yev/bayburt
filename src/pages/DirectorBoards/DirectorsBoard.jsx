import React from 'react';
import Banner from '../../components/Banner/Banner';
import abdur_senturk from '../../assets/images/directorsBoard/abdur-senturk.svg';
import gungor_senturk from '../../assets/images/directorsBoard/gungor-senturk.svg';
import ali_senturk from '../../assets/images/directorsBoard/ali-senturk.svg';
import ahmet_senturk from '../../assets/images/directorsBoard/ahmet-senturk.svg';
import alim_senturk from '../../assets/images/directorsBoard/alim-senturk.svg';
import './DirectorsBoard.css';
import { useState } from 'react';

const DirectorsBoard = () => {
    const [isHover,setIsHover] = useState(false);
    const [cardId,setCardId] = useState(null);

    const handleEnter = (id) => {
        setIsHover(true);
        setCardId(id);
    };

    const handleLeave = () => {
        setIsHover(false);
        setCardId(null);
    };

    return (
        <div className='directors-board'>
            <Banner title={`İdarə Heyəti`} description={`HAQQIMIZDA / İDARƏ HEYƏTİ`} />
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <div className='directors-board-card' onMouseEnter={handleEnter.bind(null, 1)} onMouseLeave={handleLeave}>
                            <img src={abdur_senturk} alt="abdurrahman-senturk" />
                            {cardId !== 1 && <div className='director-name'>
                                <p>Abdurrahman Şentürk</p>
                            </div>}
                            {isHover && cardId === 1 && <div className='director-duty'>
                                <p>İDARƏ HEYƏTİNİN SƏDRİ</p>
                            </div>}
                        </div>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className='directors-board-card' onMouseEnter={handleEnter.bind(null, 2)} onMouseLeave={handleLeave}>
                            <img src={ali_senturk} alt="ali-senturk" />
                            {cardId !== 2 && <div className='director-name'>
                                <p>Ali Şentürk</p>
                            </div>}
                            {isHover && cardId === 2 && <div className='director-duty'>
                                <p>İDARƏ HEYƏTİ RƏHBƏRİ MÜAVİNİ</p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className='col-lg-4 mt-4'>
                        <div className='directors-board-card' onMouseEnter={handleEnter.bind(null, 3)} onMouseLeave={handleLeave}>
                            <img src={ahmet_senturk} alt="ahmet-senturk" />
                            {cardId !== 3 && <div className='director-name'>
                                <p>Ahmet Şentürk</p>
                            </div>}
                            {isHover && cardId === 3 && <div className='director-duty'>
                                <p>İDARƏ HEYƏTİ ÜZVÜ</p>
                            </div>}
                        </div>
                    </div>
                    <div className='col-lg-4 mt-4'>
                        <div className='directors-board-card' onMouseEnter={handleEnter.bind(null, 4)} onMouseLeave={handleLeave}>
                            <img src={gungor_senturk} alt="gungor-senturk" />
                            {cardId !== 4 && <div className='director-name'>
                                <p>Güngör Şentürk</p>
                            </div>}
                            {isHover && cardId === 4 && <div className='director-duty'>
                                <p>İDARƏ HEYƏTİ ÜZVÜ</p>
                            </div>}
                        </div>
                    </div>
                    <div className='col-lg-4 mt-4'>
                        <div className='directors-board-card' onMouseEnter={handleEnter.bind(null, 5)} onMouseLeave={handleLeave}>
                            <img src={alim_senturk} alt="alim-senturk" />
                            {cardId !== 5 && <div className='director-name'>
                                <p>Alim Şentürk</p>
                            </div>}
                            {isHover && cardId === 5 && <div className='director-duty'>
                                <p>İDARƏ HEYƏTİ ÜZVÜ</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectorsBoard;