import React, { useState } from 'react';
import award1 from '../../assets/images/awards/Rectangle 126.svg';
import award2 from '../../assets/images/awards/Rectangle 127.svg';
import award3 from '../../assets/images/awards/Rectangle 128.svg';
import award4 from '../../assets/images/awards/Rectangle 129.svg';
import award5 from '../../assets/images/awards/Rectangle 130.svg';
import award6 from '../../assets/images/awards/Rectangle 131.svg';
import './Awards.css';

const Awards = () => {
    const [img,setImg] = useState({id: '', img: ''});

    const awardsCol = [
        {
            id: 'aw1',
            img: award1,
            alt: 'award1',
            className: 'award-img1'
        },
        {
            id: 'aw2',
            img: award2,
            alt: 'award2',
            className: 'award-img2'
        },
        {
            id: 'aw3',
            img: award3,
            alt: 'award3',
            className: 'award-img3'
        },
        {
            id: 'aw4',
            img: award4,
            alt: 'award4',
            className: 'award-img4'
        },
        {
            id: 'aw5',
            img: award5,
            alt: 'award5',
            className: 'award-img5'
        },
        {
            id: 'aw6',
            img: award6,
            alt: 'award6',
            className: 'award-img6'
        }
    ];

    const handleClick = (item) => {
        setImg({ id: item.id, img: item.img });
    };

    return (
        <>
            <div className='container-md'>
                <div className="row">
                    {awardsCol.map((item) => (
                        <div className="col-2 award-col" key={item.id}>
                            <img 
                                onClick={handleClick.bind(null,item)}
                                src={item.img} 
                                alt={item.alt} 
                                className={item.className} 
                                data-bs-toggle="modal" 
                                data-bs-target={`#${item.id}`} />
                        </div>
                    ))}                
                </div>
            </div>
    
            <div class="modal fade" id={img.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <img src={img.img} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Awards;