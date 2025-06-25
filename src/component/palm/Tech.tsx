import React, { useRef, useState } from "react";
import Flower from "../../assets/linearts/flowerLineArt.png";
import { Pause, Play } from "lucide-react";
import TripitakaVideo from '../../assets/videos/tripitaka-video.mp4';
import PalmProcess from '../../assets/images/Puskole.png'

const PalmLeafSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative pt-20 lg:pt-30 pb-20 lg:pb-60 overflow-hidden">
      <img
        src={Flower}
        alt="Decorative Flower"
        className="absolute top-4 right-0 w-48 md:w-60 lg:w-82 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-0 lg:pl-6 lg:mr-20">
        <div className="flex-1 relative z-20">
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-5">
            <span className="text-primary block text-3xl font-medium">
              Ola(Palm)
            </span>
            <span className="text-[72px] lg:text-[96px] text-[#181415]">Technology</span>
          </h2>

          <div className="absolute lg:top-[-30px] left-[-70px] w-[570px] h-[320px] border-4 border-[#DADADA]/40 z-[-40] hidden lg:block" />
          <div className="absolute bottom-[-120px] right-[95px] w-[782px] h-[600px] border-4 border-[#DADADA]/40 z-[-200] hidden lg:block" />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* **************edited lg:h-[400px]*********** */}

            <div
              className="relative lg:h-[400px] w-full lg:w-3/5 rounded-xl  overflow-hidden shadow-lg z-50"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* ************************** edited Play & Pause Buttons
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 text-white space-y-4">
                  <button
                    onClick={handlePlay}
                    className="flex items-center bg-white p-4 text-secondary rounded-full text-lg font-semibold shadow-lg text-primary hover:text-secondary bg-gray-200 hover:bg-primary transition duration-300 cursor-pointer"
                  >
                    <Play strokeWidth={3} />
                  </button>
                  <p className="text-lg text-gray-200">Play Here</p>
                </div>
              )} */}

              {/* {isPlaying && isHovered && (
                <div className="absolute bg-black/40 flex flex-col items-center justify-center z-10 space-y-4">
                  <button
                    onClick={handlePause}
                    className="flex items-center bg-white p-4 rounded-full text-secondary shadow-lg hover:bg-primary transition"
                  >
                    <Pause strokeWidth={2} />
                  </button>
                  <p className="text-lg text-gray-200">Pause</p>
                </div>
              )} */}

              {/* Video */}
              {/* <video
                ref={videoRef}
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="h-full w-full rounded-md z-0"
              >
                <source
                  src={TripitakaVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag
              </video> */}

              {/*********edited************* */}
              <img src={PalmProcess} alt="" className="h-full w-full rounded-md z-0 object-cover"/>
              </div>

            {/* Description */}
            <div className="flex-1 flex items-center justify-center z-10">
              <p className="text-[#4B4B4B] text-lg font-medium leading-relaxed text-justify">
                The process began with selecting and preparing the leaves of the
                talipot palm (<i>Corypha umbraculifera</i>). These leaves were
                harvested, boiled, and dried to create durable writing surfaces.
                Once prepared, the leaves were cut into strips and polished to
                ensure smoothness. Monks then used a stylus to inscribe the
                sacred texts onto the leaves, etching each character with
                precision. After inscribing, the leaves were often treated with
                natural oils to enhance their longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalmLeafSection;
