import React from 'react';
import SliderIndicator from './SliderIndicator';
import SliderNavButton from './SiderNavButton';
import { SlideData } from './SliderTypes';

interface SliderContentProps {
  slide: SlideData;
  totalSlides: number;
  currentIndex: number;
  onPrevClick: () => void;
  onNextClick: () => void;
  onDotClick: (index: number) => void;
}

const SliderContent: React.FC<SliderContentProps> = ({
  slide,
  totalSlides,
  currentIndex,
  onPrevClick,
  onNextClick,
  onDotClick,
}) => {
  return (
    <div className="flex flex-col h-full justify-between p-8 md:p-0 md:p-10 lg:p-12">
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{slide.title}</h2>
        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">{slide.description}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <SliderIndicator 
          slides={totalSlides} 
          currentIndex={currentIndex} 
          onChange={onDotClick} 
        />
        
        <div className="flex space-x-3">
          <SliderNavButton direction="prev" onClick={onPrevClick} />
          <SliderNavButton direction="next" onClick={onNextClick} />
        </div>
      </div>
    </div>
  );
};

export default SliderContent;