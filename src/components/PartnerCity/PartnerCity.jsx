import React from 'react';
import './PartnerCity.css';
import Marquee from "react-fast-marquee";

const PartnerCity = () => {
  return (
    <div className='partner-wrapper'>
        <Marquee pauseOnHover='true' speed={40}>
            <div className='companies-2b'>COMPANIES 2B CORPRATE</div>
        </Marquee>
        <Marquee pauseOnHover='true' speed={40} direction='right'>
            <div className='partner-24'>PARTNERS 24 CITIES 16</div>
        </Marquee>
    </div>
  )
}

export default PartnerCity