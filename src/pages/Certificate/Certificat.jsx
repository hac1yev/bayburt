import React from "react";
import "./Certificate.css";
import Banner from "../../components/Banner/Banner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ato from "../../assets/images/uzvluk/ato.png";
import asmud from "../../assets/images/uzvluk/asmud.png";
import intes from "../../assets/images/uzvluk/intes.png";
import tmb from "../../assets/images/uzvluk/tmb.png";
import cert1 from "../../assets/images/uzvluk/cert1.png";
import cert2 from "../../assets/images/uzvluk/cert2.png";
import cert3 from "../../assets/images/uzvluk/cert3.png";

const Certificat = () => {
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings4 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Banner
        title={"ÜZVLÜK VƏ SERTİFİKATLAR"}
        description={"HAQQIMIZDA/ÜZVLÜK VƏ SERTİFİKATLAR"}
      />
      <div className="container uzvluk-cont">
        <div className="uzvluk">
          <div className="uzv-name">
            <p>ÜZVLÜK</p>
          </div>
          <Slider {...settings3} className="uzvluk-slick">
            <div className="uzvluk-slider">
              <div className="uzvluk-gradient"></div>
              <img src={ato} alt="" />
            </div>
            <div className="uzvluk-slider">
               <div className="uzvluk-gradient"></div>
              <img src={tmb} alt="" />
            </div>
            <div className="uzvluk-slider">
               <div className="uzvluk-gradient"></div>
              <img src={intes} alt="" />
            </div>
            <div className="uzvluk-slider">
               <div className="uzvluk-gradient"></div>
              <img src={asmud} alt="" />
            </div>
            <div className="uzvluk-slider">
               <div className="uzvluk-gradient"></div>
              <img src={tmb} alt="" />
            </div>
          </Slider>
        </div>
        <div className="certificates">
        <div className="uzv-name">
            <p>SERTİFİKATLAR</p>
          </div>
          <Slider {...settings4} className="cert-slick">
            <div className="certificate-slider">
              <div className="certificate-gradient"></div>
              <img src={cert1} alt="" />
            </div>
            <div className="certificate-slider">
               <div className="certificate-gradient"></div>
              <img src={cert2} alt="" />
            </div>
            <div className="certificate-slider">
               <div className="certificate-gradient"></div>
              <img src={cert3} alt="" />
            </div>
            <div className="certificate-slider">
               <div className="certificate-gradient"></div>
              <img src={cert1} alt="" />
            </div>
            <div className="certificate-slider">
               <div className="certificate-gradient"></div>
              <img src={cert2} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Certificat;
