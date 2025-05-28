import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BlockMap from '../common/BlockMap';
import LocationMap from '../../assets/images/location-map.png'
import { IoIosSend } from "react-icons/io"
import { GrMapLocation } from "react-icons/gr";
import TestVideo from '../../assets/videos/test.mp4'
import TempleMap from '../../assets/images/location-map.png'
import '../../index.css'


type Slide = {
  video: string;
  title1: string;
  title2: string;
  titleSub: string;
  description: string;
  link: string;
}

const HomeHero: React.FC = () => {
  const [isMapShow, setisMapShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const handleMapOpen = () => {
    if (isMapShow){
      setisMapShow(false);
    }else {
      setisMapShow(true);
    }
  }

  const slides: Slide[] = [
    {

      video: "https://videos.pexels.com/video-files/1210220/1210220-uhd_2560_1440_30fps.mp4",
      title1: "Pali Cannon",
      titleSub: "written on",
      title2: "Ola(Palm) Leaves ",
      description: 'The Pali Canon, known as the "Tipitaka," is the foundational scripture of Theravāda Buddhism, containing the teachings of the Buddha.containing the teachings of the Buddha.',
      link: "/palm",
    },
    {

      video: "https://videos.pexels.com/video-files/5416356/5416356-uhd_2732_1440_25fps.mp4",
      title1: "History",
      titleSub: "of",
      title2: "Aluvihara  Temple",
      description: 'The Pali Canon, known as the "Tipitaka," is the foundational scripture of Theravāda Buddhism, containing the teachings of the Buddha.containing the teachings of the Buddha.',
      link: "/history",
    },
    {

      video: "https://videos.pexels.com/video-files/12990979/12990979-uhd_2560_1440_25fps.mp4",
      title1: "Historical",
      titleSub: "hidden",
      title2: "Rock Cave Temple",
      description: 'The Pali Canon, known as the "Tipitaka," is the foundational scripture of Theravāda Buddhism, containing the teachings of the Buddha.containing the teachings of the Buddha.',
      link: "/gallery",
    },

  ];

  // Auto play every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <div
        className="relative w-full mx-auto md:h-[40dvh] h-[65dvh] lg:h-screen overflow-hidden">
        {/* Videos */}
        {slides.map((slide, index) => (
          <video
            key={index}
            src={slide.video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          />
        ))}

        {/* desktop mapp */}
        <button
          onClick={handleMapOpen}
          className="group hidden lg:block absolute top-118 bottom-0 right-0 z-50 w-100 h-70  rounded-tr-2xl rounded-tl-3xl shadow-md hover:bg-black/0.2"
        >
          <img src="Map.PNG" alt="" className="w-full h-full group-hover:cursor-pointer "/>
        </button>

        {/* mobile map */}
        <button
          onClick={handleMapOpen}
          className="group lg:hidden absolute fixed top-115 right-2 shadow-md right-0 p-2 bg-white z-50 w-20 h-20  rounded-full shadow-md hover:bg-black/0.2"
        >
          <img src={LocationMap} alt="" className="w-full h-full rounded-full group-hover:cursor-pointer "/>
        </button>

        <div className={isMapShow ? `block fixed h-full w-screen z-999`: `hidden`}>
          {isMapShow && <BlockMap onClose={()  => setisMapShow(false)}/>}
        </div>

        {/* Slide Content */}
        <div
          className="md:absolute w-full mx-auto md:z-30 md:inset-0 md:flex md:items-start md:py-0 absolute z-30 inset-0 flex flex-col items-center md:px-10">

          <div
            className="w-full md:w-7/12 bg-black/60 h-full md:pl-10 lg:pl-30 lg:pt-30 pt-10">
            <div
              className="lg:text-white md:pt-25 md:w-full md:flex md:flex-col md:justify-center md:h-4/5 md:space-y-10 md:w-4/5 text-white pt-20 full flex flex-col justify-center h-4/5 space-y-10 items-center md:items-start p-5 md:p-0">

              <div
                className="flex flex-col md:flex-row md:items-baseline gap-2 lg:gap-5">
                <h1
                  className="lg:text-[60px] lg:font-bold lg:leading-tight lg:text-left  lg:pr-1 text-[30px] text-center font-bold leading-tight">
                  {slides[current].title1}
                </h1>

                <p
                  className="lg:text-xl text-gray-200 lg:font-regular lg:leading-tight lg:text-left  lg:pr-1 text-sm text-center font-regular lg:font-bold leading-tight">
                  {slides[current].titleSub}
                </p>
              </div>

              <h1
                className="lg:text-[60px] md:font-bold md:leading-tight md:text-left  md:pr-1 text-[30px] md:text-center font-bold leading-tight text-primary lg:mt-[-25px] mt-[-35px]">
                {slides[current].title2}
              </h1>

              <p
                className="md:text-base md:text-gray-200 md:leading-8 md:text-left lg:pr-35 md:pr-10 mt-[-10px] md:text-lg text-sm text-center text-gray-300 leading-6">
                {slides[current].description}
              </p>

              {/* CTA Buttons */}
              <div
                className="lg:flex lg:justify-start lg:flex-wrap lg:gap-4 lg:mt-2 flex justify-center items-center gap-4 mt-[-20px] lg:mt-2">
                <Link to={slides[current].link}>
                  <button
                    className="flex text-xs border-2 border-primary lg:text-base text-primary bg-transparent px-4 py-2 rounded-[10px] items-center justify-center gap-2 my-8 lg:mt-2 hover:text-secondary hover:bg-primary hover:cursor-pointer">
                    <span>More Details</span>
                    <IoIosSend className="text-base lg:text-xl" />
                  </button>
                </Link>

                <Link to="/">
                  <button className="block md:hidden lg:hidden px-5 text-xs border-2 border-secondary  lg:text-base bg-secondary text-primary py-2 rounded-[10px] flex items-center justify-center gap-2 hover:cursor-pointer hover:bg-secondary/0.8">
                    <span>Go to map</span>
                    <GrMapLocation />
                  </button>
                </Link>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <button 
        className="w-80 h-30 bg-green-200 absolute right-0 bottom-0 rounded-">*/}
        {/* className="w-80 h-30 bg-green-200  right-0 bottom-0 z-90">
        MAP
      </button> */}
    </>
  )
}

export default HomeHero