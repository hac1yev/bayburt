import React from 'react';
import './PartnerCity.css';
import Marquee from "react-fast-marquee";
import marquee1 from '../../assets/images/marquee1.webp';
import marquee2 from '../../assets/images/marquee2.webp';

const PartnerCity = () => {
  return (
    <div className='partner-wrapper'>
        <div className='companies-image-wrap'>
          <Marquee pauseOnHover='true' speed={40}>
              <div className='companies-2b'>COMPANIES 2B CORPRATE</div>
          </Marquee>
          <img className='marquee2-img ' src={marquee2} alt="marquee1" />
        </div>
        <div className='partner-image-wrap'>
          <Marquee pauseOnHover='true' speed={40} direction='right'>
              <div className='partner-24'>PARTNERS 24 CITIES 16</div>
          </Marquee>
          <img className='marquee1-img ' src={marquee1} alt="marquee2" />
        </div>
        
    </div>
  )
}

export default PartnerCity