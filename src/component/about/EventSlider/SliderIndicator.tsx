import React from 'react';

interface SliderIndicatorProps {
  slides: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

const SliderIndicator: React.FC<SliderIndicatorProps> = ({ 
  slides, 
  currentIndex, 
  onChange 
}) => {
  return (
    <div className="flex space-x-2 mt-4">
      {Array.from({ length: slides }).map((_, index) => (
        <button
          key={index}
          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            currentIndex === index 
              ? 'bg-amber-500 scale-125' 
              : 'bg-gray-300 hover:bg-gray-400'
          }`}
          onClick={() => onChange(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SliderIndicator;