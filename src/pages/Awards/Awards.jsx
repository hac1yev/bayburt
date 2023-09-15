import React, { useState } from 'react';
import award1 from '../../assets/images/awards/Rectangle 126.svg';
import award2 from '../../assets/images/awards/Rectangle 127.svg';
import award3 from '../../assets/images/awards/Rectangle 128.svg';
import award4 from '../../assets/images/awards/Rectangle 129.svg';
import award5 from '../../assets/images/awards/Rectangle 130.svg';
import award6 from '../../assets/images/awards/Rectangle 131.svg';
import award6img1 from '../../assets/images/awards/odul11 2.svg';
import award6img2 from '../../assets/images/awards/image 18.svg';
import theTop250 from '../../assets/images/awards/top250.svg';
import './Awards.css';

const Awards = () => {
    const [img,setImg] = useState({ year: '', baygrup: '', imgs: [] });
    const [isModal,setIsModal] = useState(false);

    const awardsCol = [
        {
            id: 'aw1',
            img: award1,
            alt: 'award1',
            className: 'award-img1',
            year: '2017',
            baygrup: 'Bayburt Grup : 195',
            imgs: []
        },
        {
            id: 'aw2',
            img: award2,
            alt: 'award2',
            className: 'award-img2',
            year: '2016',
            baygrup: 'Bayburt Grup : 196',
            imgs: []
        },
        {
            id: 'aw3',
            img: award3,
            alt: 'award3',
            className: 'award-img3',
            year: '2015',
            baygrup: 'Bayburt Grup : 200',
            imgs: []
        },
        {
            id: 'aw4',
            img: award4,
            alt: 'award4',
            className: 'award-img4',
            year: '2014',
            baygrup: 'Bayburt Grup : 183',
            imgs: []
        },
        {
            id: 'aw5',
            img: award5,
            alt: 'award5',
            className: 'award-img5',
            year: '2013',
            baygrup: 'Bayburt Grup : 191',
            imgs: []
        },
        {
            id: 'aw6',
            img: award6,
            alt: 'award6',
            className: 'award-img6',
            year: '2015',
            baygrup: 'Bayburt Grup : 200',
            imgs: [award6img1, award6img2]
        }
    ];

    const handleClick = (img) => {
        setImg({ year: img.year, baygrup: img.baygrup, imgs: img.imgs });
        setIsModal(true);
    };

    return (
        <>
            <div className='container-md awards-container'>
                <div className="row">
                    {awardsCol.map((item) => (
                        <div className="col-xl-2 col-lg-4 col-md-6 col-12 award-col" key={item.id}>
                            <img 
                                onClick={handleClick.bind(null,item)}
                                src={item.img} 
                                alt={item.alt} 
                                className={item.className} 
                             />
                        </div>
                    ))}                
                </div>
            </div>
            {isModal && (
                <div className='award-overlay' onClick={() => setIsModal(false)}>
                    <div className='award-body' onClick={(e) => e.stopPropagation()}>
                        <div className='award-img'>
                            <img src={theTop250} alt="theTop250" />
                        </div>
                        <p>{img.year}</p>
                        <p>{img.baygrup}</p>
                    </div>
                    {img?.imgs?.length > 0 && (
                        <div className='award-body'>
                            <div className='award-body-imgs'>
                                <img className='img-fluid' src={img.imgs[0]} alt={img.year} />
                                <img className='img-fluid' src={img.imgs[1]} alt={img.year} />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Awards;