import React from 'react';

const AnimatedTitle = ({ title, description, isVisible }) => {
  return (
    <div
      className={`transition-all duration-1000 transform ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-10 opacity-0'
      }`}
    >
      <h2 className="text-7xl font-bold mb-4 text-center rainbow-text animate-rainbow-shadow">
        {title}
      </h2>
      <p className="text-white text-2xl text-center mb-8 drop-shadow-lg">
        {description}
      </p>
    </div>
  );
};

export default AnimatedTitle;