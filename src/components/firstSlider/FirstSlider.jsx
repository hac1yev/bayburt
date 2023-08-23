import React from "react";
import "./FirstSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FirstSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    rtl: true
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  return (
    <div className="container slider-container ">
     <div className="row">
     <div className="slider-first col-lg-4">
      <Slider {...settings2}>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="middle-video col-lg-4">
        <video autoPlay muted loop > 
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="slider-second col-lg-4">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/11278592/pexels-photo-11278592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
        </Slider>
      </div>
     </div>
    </div>
  );
};

export default FirstSlider;
