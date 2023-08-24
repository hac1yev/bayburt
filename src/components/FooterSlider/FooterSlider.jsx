import React, { useState, useEffect, useCallback } from 'react';
import './FooterSlider.css';
import { images } from '../../assets/dummyApi/DummyImages';

const FooterSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplay = true; // Autoplay state
  const delay = 3000; // Autoplay delay in milliseconds

  const showPrevSet = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const showNextSet = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const onKeyUp = useCallback(
    (e) => {
      if (e.keyCode) {
        if (e.keyCode === 39) {
          showNextSet();
        } else if (e.keyCode === 37) {
          showPrevSet();
        }
      }
    },
    [showNextSet, showPrevSet]
  );

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    // Autoplay logic
    let autoplayInterval;
    if (autoplay) {
      autoplayInterval = setInterval(() => {
        showNextSet();
      }, delay);
    }

    return () => {
      window.removeEventListener('keyup', onKeyUp);
      clearInterval(autoplayInterval); // Clear interval on component unmount
    };
  }, [autoplay, onKeyUp, delay, showNextSet]);

  return (
    <div className="container footer-slider-container">
      <div className="row footer-slider-row">
        <div className="col-lg-4 carousel-left-col">
            <div className="row">
                <div className="carousel__container col-12" style={{ borderTop: '1px solid #fff' }}>
                    {images.slice(0, images.length * 1 / 3).map((img, index) => (
                    <img
                        src={img}
                        className={`carousel__image${index === currentIndex ? ' active' : ''}`}
                        key={`img-${index}`}
                        alt={`${index}`}
                    />
                    ))}
                </div>
                <div className="carousel__container col-12">
                    {images.slice(images.length * 1 / 3, images.length * 2 / 3).map((img, index) => (
                    <img
                        src={img}
                        className={`carousel__image${index === currentIndex ? ' active' : ''}`}
                        key={`img-${index}`}
                        alt={`${index}`}
                    />
                    ))}
                </div>
            </div>
        </div>
        <div className='col-lg-8 carousel-right-col'>
            <div className="row">
                <div className="carousel__container carousel-8-container col-12">
                    {images.slice(images.length * 2 / 3, images.length).map((img, index) => (
                        <img
                            src={img}
                            className={`carousel__image${index === currentIndex ? ' active' : ''}`}
                            key={`img-${index}`}
                            alt={`${index}`}
                        />
                    ))}
                </div>    
            </div>  
        </div>
      </div>
    </div>
  );
};

export default FooterSlider;
