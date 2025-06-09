import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const allImages = [
  { src: "/gallery/img19.png", desc: "Aluvihara Temple" },
  { src: "/gallery/img2.jpg", desc: "Stone Buddha statue" },
  { src: "/gallery/img3.png", desc: "Buddha carved in rock" },
  { src: "/gallery/img4.png", desc: "Old vintage car on street." },
  { src: "/gallery/img5.png", desc: "Temple bell hanging" },
  { src: "/gallery/img6.png", desc: "Golden Buddha statue" },
  { src: "/gallery/img7.png", desc: "Buddha with murals" },
  { src: "/gallery/img8.png", desc: "Row of painted Buddhas" },
  { src: "/gallery/img9.png", desc: "Heritage Rock" },
  { src: "/gallery/img10.png", desc: "Desert dunes under sun." },
  { src: "/gallery/img11.png", desc: "Waterfall in the jungle." },
  { src: "/gallery/img12.png", desc: "Rural road during fall." },
  { src: "/gallery/img13.png", desc: "Reflection in lake mirror." },
  { src: "/gallery/img14.png", desc: "Monk writing Tipitaka" },
  { src: "/gallery/img15.png", desc: "Golden Buddha on hill" },
  { src: "/gallery/img16.png", desc: "Set of Tipitaka" },
  { src: "/gallery/img17.png", desc: "Monk creating Tipitaka" },
  { src: "/gallery/img18.png", desc: "Stone temple entrance" },
  { src: "/gallery/img1.png", desc: "White stupa in trees" },
];

export default function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const initialImages = allImages.slice(0, 9);
  const extraImages = allImages.slice(13);
  const images = showMore ? [...initialImages, ...extraImages] : initialImages;

  const openModal = (index: number) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev ?? 0) - 1
    );
  const nextImage = () =>
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev ?? 0) + 1
    );

  const getSpanClass = (index: number) =>
    index % 7 === 0 ? "md:col-span-2" : index % 5 === 0 ? "md:row-span-2" : "";

  return (
    <section className="py-10 mt-[-90px] lg:mt-[-25px] px-0 md:px-0 mx-auto w-5/6 mb-16">
      {/* Titles */}
      <div className="z-20 flex justify-center lg:justify-end lg:px-5">
        <div className="text-center lg:text-left">
          {/* <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]">
            Discover
          </p>
          <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-6 leading-[1]">
            Highlights
          </h2> */}
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary mb-5">
            <span className="text-primary block text-3xl font-medium">
              Discover
            </span>
            <span className="text-[72px] lg:text-[96px] text-[#181415]">Highlights</span>
          </h2>
        </div>
      </div>

      {/* DESKTOP VIEW */}
      <div className="hidden md:block lg:mt-8">
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px] md:grid-cols-4 md:auto-rows-[180px] md:gap-4 px-4 md:px-6">
            {initialImages.map((item, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-md cursor-pointer relative group ${getSpanClass(
                  index
                )}`}
                onClick={() => openModal(index)}
              >
                <img
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm font-medium text-center px-2">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {!showMore && (
            <div className="absolute bottom-0 h-72 w-full hidden md:flex items-end justify-center pointer-events-none">
              <div
                onClick={() => setShowMore(true)}
                className="pointer-events-auto bg-gradient-to-t from-black via-black/50 to-transparent shadow-inner flex items-end justify-center w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]"
              >
                <div className="flex flex-col items-center pb-6">
                  <div className="bg-black p-3 rounded-full shadow-lg mb-2">
                    <ChevronDown className="text-white w-6 h-6" />
                  </div>
                  <p className="text-yellow-500 font-medium text-sm">
                    Show More Photos
                  </p>
                </div>
              </div>
            </div>
          )}

          {showMore && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 auto-rows-[120px] sm:auto-rows-[140px] md:grid-cols-4 md:auto-rows-[180px] md:gap-4 px-4 md:px-6">
                {extraImages.map((item, index) => {
                  const globalIndex = initialImages.length + index;
                  return (
                    <div
                      key={globalIndex}
                      className={`overflow-hidden rounded-md cursor-pointer relative group ${getSpanClass(
                        index + 9
                      )}`}
                      onClick={() => openModal(globalIndex)}
                    >
                      <img
                        src={item.src}
                        alt={`Gallery image ${globalIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm font-medium text-center px-2">
                        {item.desc}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:flex justify-center mt-6">
                <button
                  onClick={() => setShowMore(false)}
                  className="flex items-center bg-secondary hover:bg-secondary/[0.9] text-primary hover:text-primary/[0.9] px-5 py-2 rounded-[10px] shadow transition"
                >
                  <ChevronDown className="rotate-180 mr-2" />
                  Collapse
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* MOBILE/TABLET VIEW */}
      <div className="block md:hidden lg:px-4">
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px]">
            {images.slice(0, showMore ? 14 : 6).map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-md cursor-pointer relative group"
                onClick={() => openModal(index)}
              >
                <img
                  src={item.src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 text-sm font-medium">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Show More or Collapse Button */}
          <div
            onClick={() => setShowMore(!showMore)}
            className="mt-4 flex justify-center"
          >
            <button className="flex flex-col items-center">
              <div className="bg-black p-3 rounded-full shadow-lg mb-2">
                <ChevronDown
                  className={`text-white w-6 h-6 transition-transform duration-300 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </div>
              <p className="text-yellow-500 font-medium text-sm">
                {showMore ? "Collapse" : "Show More Photos"}
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* MODAL VIEWER */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-24 right-4 text-white"
          >
            <X size={32} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={images[activeIndex].src}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[70vh] rounded-md shadow-xl"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
