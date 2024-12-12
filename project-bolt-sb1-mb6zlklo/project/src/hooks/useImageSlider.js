import { useState, useEffect, useCallback } from 'react';
import { beachImages } from '../config/images';

export const useImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === beachImages.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return {
    currentImageIndex,
    currentImage: beachImages[currentImageIndex],
    totalImages: beachImages.length
  };
};