import React from 'react';
import { beachImages } from '../config/images';
import { useImageSlider } from '../hooks/useImageSlider';

const ImageSlider = () => {
  const { currentImageIndex } = useImageSlider();

  return (
    <div className="relative w-full h-full">
      {beachImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={`${image.url}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80`}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;