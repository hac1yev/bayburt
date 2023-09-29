import React, { useState, useEffect, useCallback } from 'react';
import { images2 } from '../../assets/dummyApi/DummyImages';

const Carousel2Item = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  const autoplay = true; // Autoplay state
  const delay = 3000; // Autoplay delay in milliseconds

  const showPrevSet = useCallback(() => {
    const newIndex = (currentIndex - 1 + images2.length) % images2.length;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  const showNextSet = useCallback(() => {
    const newIndex = (currentIndex + 1) % images2.length;
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
    <>
        {images2.map((img, index) => (
            <img
                src={img}
                className={`carousel__image${index === currentIndex ? ' active' : ''}`}
                key={`img-${index}`}
                alt={`${index}`}
            />
        ))}
    </>
  )
}

export default Carousel2Item