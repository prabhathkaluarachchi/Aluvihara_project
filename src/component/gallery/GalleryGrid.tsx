import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const allImages = [
  { src: "/gallery/img1.png", desc: "Beautiful mountain land" },
  { src: "/gallery/img2.png", desc: "Sunset over calm lake." },
  { src: "/gallery/img3.png", desc: "City skyline at night." },
  { src: "/gallery/img6.png", desc: "Old vintage car on street." },
  { src: "/gallery/img8.png", desc: "Peaceful forest trail." },
  { src: "/gallery/img4.png", desc: "Coastal view with waves." },
  { src: "/gallery/img7.png", desc: "Modern art sculpture." },
  { src: "/gallery/img5.png", desc: "Snowy mountain cabin." },
  { src: "/gallery/img9.png", desc: "Hot air balloons in sky." },
  { src: "/gallery/img1.png", desc: "Desert dunes under sun." },
  { src: "/gallery/img4.png", desc: "Waterfall in the jungle." },
  { src: "/gallery/img6.png", desc: "Rural road during fall." },
  { src: "/gallery/img1.png", desc: "Reflection in lake mirror." },
  { src: "/gallery/img2.png", desc: "Bridge over river." },
  { src: "/gallery/img5.png", desc: "Night view with stars." },
  { src: "/gallery/img4.png", desc: "Village nestled in hills." },
  { src: "/gallery/img1.png", desc: "Winding road panorama." },
  { src: "/gallery/img3.png", desc: "Dense fog in valley." },
  { src: "/gallery/img5.png", desc: "Boats docked at pier." },
  
];

export default function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const initialImages = allImages.slice(0, 9);
  const extraImages = allImages.slice(13);

  const images = showMore ? [...initialImages, ...extraImages] : initialImages;

  const openModal = (index:any) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);
  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const getSpanClass = (index:any) =>
    index % 7 === 0 ? "md:col-span-2" : index % 5 === 0 ? "md:row-span-2" : "";

  return (
    <section className="py-10 mt-[-90px] lg:mt-[-25px] px-0 md:px-0 mx-auto w-5/6 mb-16">
              {/* Right: Titles */}
        <div className="z-20 flex justify-center lg:justify-end lg:px-5">
          <div className="text-center lg:text-left">
            <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]">
              Discover
            </p>
            <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-6 leading-[1]">
              Highlights
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Hover description overlay */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-sm font-medium text-center px-2">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {!showMore && (
            <div
              onClick={() => setShowMore(true)}
              className="absolute inset-0 top-1/2 bg-gradient-to-t from-black/95 via-black/85 to-transparent rounded-md items-end justify-center cursor-pointer shadow-inner hidden md:flex"
            >
              <div className="flex flex-col items-center pb-6 ">
                <div className="bg-black p-3 rounded-full shadow-lg mb-2">
                  <ChevronDown className="text-white w-6 h-6" />
                </div>
                <p className="text-yellow-500 font-medium text-sm">
                  Show More Photos
                </p>
              </div>
            </div>
          )}
        </div>

        {showMore && (
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
        )}
      </div>

      {/* MOBILE/TABLET VIEW */}
      <div className="block md:hidden lg:px-4">
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[120px] sm:auto-rows-[140px]">
            {images.map((item, index) => (
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

          {!showMore && (
            <div
              onClick={() => setShowMore(true)}
              className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/80 to-transparent rounded-md items-end justify-center cursor-pointer shadow-inner flex"
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
          )}
        </div>
      </div>

      {/* MODAL */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white"
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
            className="max-w-[90vw] max-h-[80vh] rounded-md shadow-xl"
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
