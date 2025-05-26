import React from 'react';

import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

interface SliderNavButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
}

const SliderNavButton: React.FC<SliderNavButtonProps> = ({ direction, onClick }) => {
  return (
    <button 
      className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 active:scale-95"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
    >
      {direction === 'prev' ? (
        <FaCircleArrowLeft
        className="w-5 h-5 text-gray-800" />
      ) : (
        <FaCircleArrowRight 
        className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

export default SliderNavButton;