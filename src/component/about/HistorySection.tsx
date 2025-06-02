import React from "react";
import Puskole from "../../assets/images/Puskole.png"
import Temple from "../../assets/images/Temple.png"
import LordBudhdhha from "../../assets/images/lordBudhdhha.png"
import Rock from "../../assets/images/rock.png";
import LineArt from "../../assets/linearts/lines_with_style_horizontal.png";

import HistoryMainImage from '../../assets/images/about_history_main.jpg'
import imgTipitaka from '../../assets/images/tiptika.png'
import { Link } from "react-router-dom";


const HistorySection: React.FC = () => {
  return (
    <div className=" h-full lg:py-20 md:py-20">
      <img
        src={LineArt}
        alt=""
        className="hidden lg:block absolute ml-[150px] top-170  h-[875px] z-[-20]"
      />
      <div className="lg:w-[86%] right-0 mx-auto h-8/10 bg-[#F7F6F6] absolute  z-[-50]"></div>


      <h1
        className="text-[38px] lg:text-header text-center lg:text-left font-semibold  w-5/6 mx-auto flex items-center justify-center lg:items-left lg:justify-end lg:mt-[-90px]">History</h1>

      {/* Heading for Tablet and Mobile */}
      <div className="block lg:hidden px-4 mt-4">
        <h1 className="text-[36px] md:text-[48px] text-center text-[#181415] font-semibold leading-tight hidden">
          History
        </h1>
        <h2 className="md:flex md:flex-row md:gap-3 lg:flex-col mt-2 text-center text-[16px] sm:text-[24px] md:text-[28px] items-center justify-center font-regualr my-5 text-[#181615] leading-snug md:mb-5">
          Unveiling The Rich History Of{" "}
          <span className="text-[#EBB23E]">Aluvihara,</span>
        </h2>
      </div>

      <div className="w-full flex justify-center items-center lg:mt-[-70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] xl:w-5/6 gap-10 items-center lg:mt-20">
          {/* Left Images */}
          <div className="flex flex-col-reverse lg:flex-row gap-6 justify-center items-center z-30">
            {/* Small column images */}
            <div className="flex flex-row lg:flex-col gap-4 lg:w-1/4">
              <img
                src="test/History/History1.jpg"
                alt="Temple blog"
                className="w-[100px] lg:w-[140px] md:w-1/3 h-[100px] sm:h-[120px] rounded-lg object-cover"
              />
              <img
                src="test/History/History2.jpg"
                alt="Buddha"
                className="w-[100px] lg:w-[140px] md:w-1/3 h-[100px] sm:h-[120px] rounded-lg object-cover"
              />
              <img
                src="test/History/History3.jpg"
                alt="Rock"
                className="w-[100px] lg:w-[140px] md:w-1/3 h-[100px] sm:h-[120px] rounded-lg object-cover"
              />
            </div>

            {/* Large Image */}
            <img
              src="/test-history-banner.jpg"
              alt="Palm Leaf Book"
              className="w-[340px] sm:w-[380px] md:w-full lg:w-3/4 h-[260px] sm:h-[320px] md:h-[400px] rounded-lg object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 pl-5 pr-5 text-[#4F4C53]">
            <h2 className="hidden lg:block text-[10px] flex flex-col sm:text-[18px] md:text-[28px]text-[#181615] leading-snug">
              Unveiling The Rich History Of{" "}
              <span className="text-[#EBB23E] hidden lg:block">Aluvihara,</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-justify leading-relaxed">
              Aluvihara Temple in Sri Lanka, is a historic Buddhist monastery
              with deep cultural and religious significance. Nestled amidst lush
              green hills, this ancient temple is renowned as the site where the
              Buddhist scriptures, the{" "}
              <span className="font-semibold underline text-[#181415]">
                <Link to="/history">
                Tipitaka
                </Link>
              </span>
              , were first written down on palm leaves in the 1st century BCE
              during the reign of King Walagamba.
            </p>
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-justify leading-relaxed">
              The Tipitaka, also known as the Pali Canon, was written at
              Aluvihara. It consists of three "baskets" of teachings: Vinaya
              Pitaka (discipline), Sutta Pitaka (discourses), and Abhidhamma
              Pitaka (higher teachings).{" "}
              <span className="text-[#EBB23E] underline cursor-pointer">
                <Link to="/history">
                More Details of Tipitaka
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
