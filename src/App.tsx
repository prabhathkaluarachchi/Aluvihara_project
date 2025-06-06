import { useEffect, useState } from 'react';
import './App.css'

import NavBar1 from './component/common/NavBar1'
import Footer from './component/common/Footer'
import Slider from './component/about/BlogSlider';
import EventSlider from './component/about/EventSlider/EventSlider';
import { sliderData } from './component/about/EventSlider/sliderData';
import PalmLeavesProcess from './component/about/PalmLeavesProcess';
import HomeHero from './component/about/HomeHero';
import HistorySection from './component/about/HistorySection';
import Message from './component/about/Message';

import MapURL from './assets/images/location-map.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        {/* <NavBar /> */}
        <NavBar1 page="about"/>

        {/* hero section */}
        <section className="h-auto w-full">
         
          <HomeHero />
        </section>
      </header>

      <main>
        {/* history section */}
        <section
        className="z-888 mt-20 md:mt-10 lg:mt-20">
          <HistorySection />
        </section>

        {/* message section */}
        <section
        className="mt-10 md:mt-0 lg:mt-30">
            <Message />
        </section>

        {/* palm leaves section */}
        <section className="relative flex flex-col w-full mx-auto py-2 h-auto lg:h-[90dvh] mt-15 flex bg-[url('/process-banner.svg')] bg-fit bg-no-repeat bg-cover items-center justify-center px-5 lg:px-10 py-10 lg:py-2 md:mt-30 ">

          <div className="bg-black/70 rounded-xl w-full mx-auto h-11/12 py-2 px-2 lg:py-0">
            <PalmLeavesProcess />
          </div>

        </section>

        {/* blogs section */}
        <section 
        className="flex flex-col w-full mx-auto py-2 h-auto lg:h-[90dvh] mt-30 lg:mt-50 flex border-y-5 border-gray-300 md:mt-40">
          <h1 
            className="text-[38px] lg:text-header text-center lg:text-left font-semibold  w-5/6 mx-auto flex items-center justify-center lg:items-left lg:justify-end lg:mt-[-90px]">Blogs</h1>
          <Slider />
        </section>

        {/* temple line art */}
        <img 
        src="temple-lineart.svg"
        alt="Temple line art"
        className='absolute right-0 top-900 h-130 hidden lg:block' />

        {/* events section */}
        <section 
        className="relative w-full mx-auto h-auto lg:h-[100dvh] mt-20 flex lg:mt-60 md:mt-35">
          <div 
          className="absolute bg-gray-200 h-5/6 w-[95%] lg:w-4/5 md:top-23 lg:top-20 left-0 z-[-20] hidden md:block"/>

          {/* slider */}
          <section 
          className="w-5/6 mx-auto h-10/12">
            <h1 
            className="text-[38px] lg:text-header text-center lg:text-left font-semibold mx-auto flex items-center justify-center lg:items-left lg:justify-start mb-5 lg:mb-0" >Events</h1>

            <EventSlider 
              slides={sliderData} />
          </section>
        </section>
      </main>

      {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div
          className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One Holdings</p>
        </div>
      </div>
    </>
  )
}

export default App

