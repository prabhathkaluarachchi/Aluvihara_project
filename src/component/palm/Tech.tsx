import React, { useRef, useState } from "react";
import Flower from "../../assets/linearts/flowerLineArt.png";
import { Pause, Play } from "lucide-react";
const PalmLeafSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
    <section className="relative py-15 overflow-hidden lg:mt-15">
      <img
        src={Flower}
        alt="Decorative Flower"
        className="absolute top-0 right-0 w-64 pointer-events-none z-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 px-6">
        <div className="flex-1 relative z-20">
          <h2 className="text-yellow-600 text-3xl font-bold mb-2">Ola(Palm)</h2>
          <h1 className="text-black lg:text-[96px] text-[64px] font-semibold mb-6">
            Technology
          </h1>

          <div className="absolute lg:top-[-30px] left-[-70px] w-[570px] h-[320px] border-4 border-[#DADADA]/40 z-[-40] hidden lg:block" />
          <div className="absolute bottom-[-50px] right-[110px] w-[620px] h-[500px] border-4 border-[#DADADA]/40 z-[-200] hidden lg:block" />

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="relative w-full lg:w-3/5 rounded-xl bg-amber-300 overflow-hidden shadow-lg z-50">
              {/* Custom Overlay Play Button */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center z-10 text-white space-y-4">
                  <button
                    onClick={handlePlay}
                    className="flex items-center bg-white p-4 text-black rounded-full text-lg font-semibold shadow-lg text-primary hover:text-[#4B4B4B] bg-gray-200 hover:bg-primary transition duration-300 cursor-pointer"
                  >
                    <Play strokeWidth={3} />
                  </button>
                  <p className="text-lg text-gray-200">Play Here</p>
                </div>
              )}

              {/* Video */}
              <video
                ref={videoRef}
                controls
                onPause={handlePause}
                className="h-full w-full rounded-md z-0"
              >
                <source
                  src="https://videos.pexels.com/video-files/5592655/5592655-sd_640_360_30fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag
              </video>
            </div>

            {/* Description */}
            <div className="flex-1 flex items-center justify-center z-10">
              <p className="text-gray-700 text-[16px] leading-relaxed text-justify">
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
