import React, { useState, useEffect, useCallback } from 'react';
import { SlideData } from './SliderTypes';

import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";

interface EventSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
}

const EventSlider: React.FC<EventSliderProps> = ({ 
  slides, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'right' | 'left' | null>(null);

  const goToNext = useCallback(() => {
    setDirection('right');
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setDirection('left');
    setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  }, [currentIndex]);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        goToNext();
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNext, autoPlayInterval]);

  return (
    <>
    <div 
      className="w-full h-[500px] md:h-[550px] lg:h-[70dvh] overflow-hidden md:p-2 relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Content Section */}
        <div className="order-2 md:order-1 bg-transparent mt[-500px] md:mt-15 bg-red-300 p-2">
          <div className="h-full relative">
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : 'opacity-0 translate-x-8 z-0'
                }`}
              >
                <div className="flex flex-col h-full md:justify-between p-5">
                  <div className="mb-6">
                    <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{slide.title}</h2>
                    <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed">{slide.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-end md:justify-between">
                    
                    {/* Navigation Buttons */}
                    <div className="flex space-x-3 mt-[-15px] lg:mt-[-100px]">
                      <button 
                        className="p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300 focus:outline-none active:scale-95"
                        onClick={goToPrev}
                        aria-label="Previous slide"
                      >
                        <FaCircleArrowLeft className="w-5 h-5 text-primary" />
                      </button>
                      <button 
                        className="p-2 rounded-full shadow-md hover:bg-white transition-colors duration-300 focus:outline-none active:scale-95"
                        onClick={goToNext}
                        aria-label="Next slide"
                      >
                        <FaCircleArrowRight className="w-5 h-5 text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Image Section */}
        <div className="order-1 md:order-2 h-[250px] md:h-full mb-[-200px] lg:mb-0">
          <div className="relative h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 translate-x-0 scale-100' 
                    : direction === 'right'
                      ? 'opacity-0 -translate-x-full scale-105'
                      : 'opacity-0 translate-x-full scale-105'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            ))}
          </div>
        </div>
      </div>              
    </div>

      {/* Slider Indicator */}
      <div className="absolute bottom-0 space-x-2 hidden lg:flex mt-[-100px] left-0 w-full items-center justify-center">
        <>
        {Array.from({ length: slides.length }).map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-2 rounded-xl transition-all duration-300 ${currentIndex === idx
              ? 'bg-amber-500 scale-125'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        </>
      </div>

    </>     
  );
};

export default EventSlider;