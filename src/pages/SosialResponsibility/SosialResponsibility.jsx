import React from 'react';
import './SosialResponsibility.css';
import { useState } from 'react';
import egitim1 from '../../assets/images/social-res/egitim 1.svg';
import ogrenciIs from '../../assets/images/social-res/ogrenci-isleri.svg';
import senturkCami from '../../assets/images/social-res/senturk-cami.svg';
import sosyalProje from '../../assets/images/social-res/sosyal-proje.svg';

const SosialService = () => {
    const [serviceId,setServiceId] = useState('sr1');

    const social_res_tabs = [
        {
            id: 'sr1',
            text: 'Eğitim kurumları',
        },
        {
            id: 'sr2',
            text: 'Sosyal hizmetler',
        },
        {
            id: 'sr3',
            text: 'Çevre',
        },
        {
            id: 'sr4',
            text: 'Spor',
        },
        {
            id: 'sr5',
            text: 'Sosyal yardımlar',
        },
        {
            id: 'sr6',
            text: 'Burs programları',
        },
        {
            id: 'sr7',
            text: 'Tecrübe programları',
        },
    ] 

    const handleServiceId = (id) => {
        setServiceId(id);

    };

    return (
        <>
            {serviceId === 'sr1' && <div className='container social-res-container'>
                <div className='img-column-wrap'>
                    <div className="column">
                        <img className='img-fluid sr-img-1' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
                        <img className='img-fluid sr-img-2' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
                        <img className='img-fluid sr-img-3' src="https://monlyceenumerique.fr/snt_seconde/photographie_numerique/Cours/img/profondeur_3.bmp" alt="" />
                    </div>
                    <div className="column">
                        <img className='img-fluid sr-img-4' src="https://monlyceenumerique.fr/snt_seconde/photographie_numerique/Cours/img/profondeur_3.bmp" alt="" />
                        <img className='img-fluid sr-img-5' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
                        <img className='img-fluid sr-img-6' src="https://images.unsplash.com/photo-1634750009479-aadb9119ab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
                    </div>
                    <div className="column">
                        <img className='img-fluid sr-img-7' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />
                        <img className='img-fluid sr-img-8' src="https://images.unsplash.com/photo-1645620359024-63b0f61ea532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" />
                        <img className='img-fluid sr-img-9' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                    </div>
                </div>
            </div>}
            <div className="container">
                <div className='social-res-tabs'>
                    {social_res_tabs.map(item => (
                        <h1 
                            onClick={handleServiceId.bind(null, item.id)} 
                            className={serviceId === item.id ? 'active-sr': ''} 
                            key={item.id} 
                            id={item.id}
                        >
                            {item.text}
                        </h1>
                    ))}
                    {serviceId === 'sr1' && <div className='d-flex justify-content-center'>
                        <p className='sr-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        </p>
                    </div>}
                </div>

                {serviceId === 'sr6' && <div className='container'>
                    <div className='sr-egitim-content'>
                        <p>Anaokulu</p>
                        <p>Lise</p>
                        <p>Juran kursu</p>
                    </div>
                    <div className='sr-egitim-imgs row'>
                        <div className='col-md-6'>
                            <img className='img-fluid' src={ogrenciIs} alt="ogrenci-is" />
                        </div>
                        <div className='col-md-6'>
                            <img className='img-fluid' src={egitim1} alt="egitim-1" />
                        </div>
                    </div>
                </div>}

                {serviceId === 'sr2' && <div className='container'>
                    <div className='sr-egitim-content'>
                        <p>Camiler</p>
                    </div>
                    <div className='sr-egitim-imgs row'>
                        <div className='col-md-6'>
                            <img className='img-fluid' src={senturkCami} alt="senturk-cami" />
                        </div>
                        <div className='col-md-6'>
                            <img className='img-fluid' src={sosyalProje} alt="sosyal-proje" />
                        </div>
                    </div>
                </div>}

            </div>
        </>
    );
};

export default SosialService;