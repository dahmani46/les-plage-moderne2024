import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import ImageSlider from './ImageSlider';
import AnimatedTitle from './AnimatedTitle';
import { useImageSlider } from '../hooks/useImageSlider';

const Hero = () => {
  const { currentImage } = useImageSlider();

  return (
    <div className="relative h-[calc(100vh-160px)]">
      <ImageSlider />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 flex flex-col items-center justify-center">
        <AnimatedTitle
          title={currentImage.title}
          description={currentImage.description}
          isVisible={true}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center space-x-2 mt-8">
          <span>Explorer</span>
          <FaArrowDown className="animate-bounce ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero;