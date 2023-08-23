// import React from 'react'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import './FooterSlider.css';
// import footerSlider1 from '../../assets/images/footerSlider1.svg';
// import footerSlider2 from '../../assets/images/footerSlider2.svg';
// import { useEffect } from 'react';

// const slider = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     arrows: false
// }



// const FooterSlider = () => {
//     useEffect(() => {
//         const slickTrack = document.querySelector('.slick-track');
//         const slickCurrent = document.querySelector('.slick-current');
//         const slickActive = document.querySelector('.slick-active');

//         slickCurrent.style.width = `calc(1/${slickTrack.children.length} * 4/12 * 100%)`;
//         slickCurrent.style.setProperty('width', slickCurrent.style.width, 'important');
        
//     }, []);

//   return (
//     <Slider {...slider} className='footer-slider'>
//         <div className="slick-image">
//             <img src={footerSlider1} alt="footerSlider1" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider2} alt="footerSlider2" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider1} alt="footerSlider1" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider2} alt="footerSlider2" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider1} alt="footerSlider1" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider2} alt="footerSlider2" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider1} alt="footerSlider1" />
//         </div>
//         <div className="slick-image">
//             <img src={footerSlider2} alt="footerSlider2" />
//         </div>
//     </Slider>
//   )
// }

// export default FooterSlider