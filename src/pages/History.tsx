import React, { useEffect, useState } from "react";

import NavBar1 from "../component/common/NavBar1";
import Footer from "../component/common/Footer";

import HistoryImage from "../assets/images/History.jpg";
import Hero from "../assets/images/landing/history_landing - Copy.webp";
import tiptika from "../assets/images/tiptika.png";
import timeline from "../assets/images/timeline.svg";
import showmore from "../assets/images/showmore.svg";
import lotus from "../assets/linearts/lotus.svg";
import timeline1 from "../assets/images/timeline1.png";
import timeline2 from "../assets/images/timeline2.png";
import timeline3 from "../assets/images/timeline3.png";
import timeline4 from "../assets/images/timeline4.png";

import ImgTipitaka from "../assets/images/tripitaka.jpg";
import ImgTipitakaTimeLine from "../assets/about_palm_leaves_process5.jpg";

const timelineData = [
  {
    date: "~300 BCE",
    title: "Establishment of Aluvihara",
    description:
      "During the reign of King Devanampiyatissa, Aluvihara was founded as a monastic center for Buddhist monks. The temple, located in Matale, became a center for spiritual learning and meditation.",
    image: "timeline4.jpg",
  },
  {
    date: "104 BCE",
    title: "King Walagamba’s Exile",
    description:
      "In 104 BCE, South Indian invaders overthrew King Walagamba, forcing him into exile. During his time in hiding, the king took refuge in various temples, including Aluvihara.",
    image: timeline2,
  },
  {
    date: "89 BCE",
    title: "Walagamba’s Return & Tipitaka Writing",
    description:
      "After regaining the throne in 89 BCE, during his reign began the first written documentation of the Tipitaka at Aluvihara. The monastic retreat ensured that Buddhist teachings were preserved in written form, possibly on palm leaves.",
    image: "timeline3.jpg",
  },
  {
    date: "1st Century",
    title: "Completion of the Tipitaka",
    description:
      "By the end of the 1st century CE, the Tipitaka (Buddhist scriptures) was successfully written, securing its transmission for future generations. Aluvihara became a hub of Buddhist learning.",
    image: ImgTipitakaTimeLine,
  },
  {
    date: "4th Century",
    title: "Latest Situation",
    description: "Latest situation description.",
    image: timeline1,
  },
];

const History: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const visibleTimeline = showAll ? timelineData : timelineData.slice(0, 4);

  return (
    <>
      <div className="text-gray-800">
        {/* Hero Section */}
        <section className="relative h-[50dvh] min-h-[500px] md:min-h-[600px] text-white flex items-center overflow-hidden">
          <NavBar1 page="history" />
          <img
            src={Hero}
            alt="Aluvihara Rock Temple"
            className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          />
          <div className="w-full pr-4 relative z-10">
            <div className="lg:w-[800px] md:max-w-[90%] md:mr-auto">
              <div className="bg-black/70 p-6 rounded-md md:rounded-r-[10px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 pl-0 md:pl-14 font-roboto leading-[1.5] md:leading-[1.5] lg:leading-[1.3] text-center md:text-left">
                  <span className="text-primary block">The</span>
                  <span className="text-white">Timeless Legacy</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="relative w-full h-auto lg:h-[90dvh] pb-20 px-6 p-5 md:px-20 lg:px-0 mt-10 md:mt-20 lg:mt-20">
          <div className="bg-primary hidden w-80 h-25 lg:block absolute left-0 -top-[-10px] z-0" />

          <div className="lg:w-5/6 mx-auto h-full flex lg:flex-row flex-col">
            <div className="relative w-full lg:w-1/2 flex justify-center items-center">
              <img
                src={HistoryImage}
                alt="Historical Aluvihara Temple"
                className="w-120 h-100 lg:h-full mt-12 relative z-10 shadow-md"
              />
            </div>

            <div className="mb-6 w-full lg:w-3/5 lg:px-20">
              <h2 className="text-[24px] text-center mt-10 lg:mt-0 lg:text-left md:text-3xl font-bold text-black leading-tight lg:ml-20">
                <span className="text-yellow-500">Unveiling </span>
              </h2>
              <h2 className="text-[42px] text-center lg:text-left md:text-[96px] mb-3 font-bold text-black leading-tight lg:ml-20">
                <span className="text-[#181415]">History</span>
              </h2>
              <p className="mb-4 text-[18px] text-justify lg:mt-10">
                Aluvihara Temple, located in Matale, Sri Lanka, is a
                historically significant Buddhist site. It is renowned as the
                place where the Tipitaka (Buddhist scriptures) were first
                written on palm leaves during the period of King Walagamba (~89
                BCE). This temple stands as a beacon of Buddhist heritage,
                preserving teachings for generations to come.
              </p>
              <p className="text-justify text-[18px]">
                It stands as a testament to Sri Lanka’s Buddhist heritage,
                deeply intertwined with King Walagamba’s efforts to preserve
                Buddhism. From its role in writing the Tipitaka to its
                present-day significance, this sacred site continues to be a
                beacon of wisdom and devotion.
              </p>
            </div>
          </div>
          <div className="bg-primary hidden w-80 h-25 lg:block absolute lg:left-1/3 lg:-bottom-[-20px] -z-50" />

          <img src="" alt="" />
        </section>

        {/* tipitaka */}
        <section className="w-full md:mt-10 bg-neutral-100 h-auto lg:h-[90dvh] flex lg:mt-40 justify-center items-center">
          <div className="w-5/6 mx-auto h-auto lg:h-10/12 flex flex-col lg:flex-row justify-between">
            <section className="w-full lg:w-3/5">
              <h1 className="mb-5 lg:mb-0 text-[48px] font-bold text-[#181415] text-center lg:text-left  md:text-[96px] lg:mt-[-120px] flex flex-col gap-0">
                <span className="text-[36px] md:text-3xl text-primary lg:mb-[-30px]">
                  The
                </span>
                Tipitaka
              </h1>
              <section className="text-justify lg:mt-15">
                <p className="text-[18px] mb-4 leading-relaxed">
                  The Tipitaka, also known as the Pali Canon, is the
                  foundational scripture of Theravada Buddhism. It is divided
                  into three “baskets” (Pitaka): the Vinaya Pitaka, which
                  contains rules for monastic discipline; the Sutta Pitaka,
                  which includes sermons and teachings attributed to the Buddha;
                  and the Abhidhamma Pitaka, which offers philosophical and
                  doctrinal analysis. These texts are written in Pali and serve
                  as a comprehensive guide to the Buddha’s teachings, covering
                  ethical conduct, meditation practices, and wisdom.
                </p>
                <p className="text-[18px] text-gray-800 leading-relaxed">
                  In Buddhist culture, the Tipitaka is revered as the ultimate
                  authority on the Buddha’s teachings. It plays a crucial role
                  in the daily lives of monks and laypeople alike. The
                  preservation and study of the Tipitaka are considered vital
                  for maintaining the purity of the Buddha’s teachings and have
                  a significant influence on Buddhist values and education
                  worldwide.
                </p>
              </section>
            </section>

            {/* image */}
            <section className="w-full lg:w-2/5 flex justify-center items- mt-10 lg:mt-0">
              <img
                src={ImgTipitaka}
                alt="Tipitaka Scripture"
                className="rounded-xl w-64 md:w-96 lg:w-  5/6 h-auto object-cover"
              />
            </section>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-10 md:mt-20 lg:px-4 sm:px-8 lg:px-2 relative lg:mt-20 w-5/6 mx-auto h-auto  mt-10">
          <section className="w-full lg:w-2/3 flex flex-col gap-5 mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center lg:text-left text-black">
              Timeline of Aluvihara Temple
            </h2>
            <p className="lg:pr-50 text-base lg:text-xl text-center lg:text-left font-semibold text-ternary/80">
              A Scared Monastery Where Buddhist Scripture Were Written For
              Future Generation
            </p>
          </section>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-primary w-1 top-40 bottom-40 z-0 hidden md:block" />

          <div className="space-y-10 sm:space-y-20 lg:space-y-24 relative z-10">
            {visibleTimeline.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-12 lg:gap-24 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                } relative`}
              >
                <img
                  src={timeline}
                  alt="Timeline marker"
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-20 h-10 z-10"
                />

                {/* IMAGE */}
                <div
                  className={`w-full sm:w-1/2 ${
                    index % 2 === 0
                      ? "flex justify-end md:pr-5 lg:pr-0"
                      : "flex justify-start md:pl-5 lg:pl-0"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" shadow-md w-full max-h-64 sm:max-h-72 lg:w-full lg:max-h-80 object-cover rounded-xl"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full sm:w-1/2 space-y-0">
                  <div
                    className={`text-center sm:text-left ${
                      index % 2 === 0
                        ? "sm:text-right pr-2 sm:pr-4 lg:pr-6"
                        : "sm:text-left pl-2 sm:pl-4 lg:pl-1"
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl lg:text-[96px] text-gray-300 font-bold leading-none">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-4 pt-3 relative">
                    <h3 className="text-lg sm:text-xl text-center md:text-left lg:text-2xl font-bold text-gray-800 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center mt-20 lg:mt-16 px-4 py-6">
            <img
              src={showmore}
              alt="Show more"
              className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 opacity-60 hover:opacity-100 cursor-pointer transition-transform duration-300 z-10 ${
                showAll ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setShowAll(!showAll)}
            />
            <p
              className="mt-2 text-sm sm:text-base text-gray-500 hover:text-black transition-colors cursor-pointer z-10"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show less" : "Show more"}
            </p>

            <img
              src={lotus}
              alt="Lotus Flower"
              className="absolute w-490px opacity-100 z-0 pointer-events-none"
              style={{ top: "-80px" }}
            />
          </div>
        </section>
      </div>

      {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One Holdings</p>
        </div>
      </div>
    </>
  );
};

export default History;
