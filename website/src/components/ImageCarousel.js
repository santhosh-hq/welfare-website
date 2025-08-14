import React from 'react';
import './ImageCarousel.css';
import dataGovImg from '../imgs/data.gov.png';
import digitalImg from '../imgs/Digital.png';
import myGovImg from '../imgs/Mygov.png';
import makeImg from '../imgs/Make in india.png';

const images = [
  dataGovImg,
  digitalImg,
  myGovImg,
  makeImg
];

const ImageCarousel = () => (
  <div className="carousel-container">
    <div className="carousel-track">
      {images.map((src, idx) => (
        <div className="carousel-item" key={idx}>
          <img src={src} alt={`carousel-${idx}`} />
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {images.map((src, idx) => (
        <div className="carousel-item" key={`dup-${idx}`}>
          <img src={src} alt={`carousel-dup-${idx}`} />
        </div>
      ))}
    </div>
  </div>
);

export default ImageCarousel;
