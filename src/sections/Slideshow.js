import React, { useState, useEffect } from 'react';
import Historyimage1 from '../images/PET.webp';
import Historyimage2 from '../images/brooklynbridge.jpg';
import Historyimage3 from '../images/bb.jpg';
import './Slideshow.css';

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl: Historyimage1,
      caption: 'Pittsburgh',
    },
    {
      imageUrl: Historyimage2,
      caption: 'Brooklyn Bridge',
    },
    {
      imageUrl: Historyimage3,
      caption: 'San Diego',
    },
  ];

  const intervalTime = 5000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        ></div>
      ))}
      <p>{slides[currentSlide].caption}</p>
    </div>
  );
}

export default Slideshow;
