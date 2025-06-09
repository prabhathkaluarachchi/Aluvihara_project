import React, { useEffect, useState } from 'react';
import { blogPosts } from "../blog/data/blogData";

import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import '../../styles/blogslider.css'


const BlogSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getActiveSlide = () => blogPosts[currentIndex % blogPosts.length];

  const getSmallSlides = () => {
    const smallSlides = [];
    for (let i = 1; i < 4; i++) {
      smallSlides.push(blogPosts[(currentIndex + i) % blogPosts.length]);
    }
    return smallSlides;
  };

  // slider controller
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + blogPosts.length) % blogPosts.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = getActiveSlide();
  const smallSlides = getSmallSlides();

  //slider settings
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      }
    ]
  };

  return (
    <>
      {/* desktops */}
      <div 
      className="hidden lg:block w-5/6 h-full mx-auto py-5 relative overflow-hidden">
        <div className="flex gap-4 h-full items-start justify-between py-5">
          {/* Active card */}
          <div className="relative h-full w-1/3 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl shadow-xl overflow-hidden transition-all duration-[1200ms] ease-in-out">
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover"
            />
            <div className="p-8 absolute text-white bg-gradient-to-t from-black/100 via-black/90 to-transparent bottom-0">
              <h2 className="text-2xl font-regular mb-5">{activeSlide.title}</h2>
              <p className="text-gray-200 text-base text-justify">{activeSlide.excerpt}</p>
              <Link to={`/viewblog/${activeSlide.id}`}>
                 <button
                  className="text-primary mt-3 mb-2 underline text-right w-full hover:cursor-pointer">Show more</button>
              </Link>
            </div>
          </div>

          {/* Smaller cards */}
          <div className="flex gap-5 w-200 overflow-hidden">
            {smallSlides.map((post) => (
              <div
                key={post.id}
                className="w-1/3 transition-transform duration-[3000ms] ease-in-out transform translate-x-0 bg-white rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-50 object-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"
                />
                <div className="p-2 mt-5">
                  <h3 className="text-md font-semibold">{post.title}</h3>
                  <p className="text-[#4B4B4B] text-xs text-justify mt-3">
                    {/* word limit */}
                    
                    {activeSlide.excerpt.split(" ").slice(0, 30).join(" ")}{activeSlide.excerpt.split(" ").length > 30 && "..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end mx-auto gap-4 mt-[-30px] w-1/2">
          <button
            onClick={prevSlide}
            className="px-6 py-1 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary hover:cursor-pointer rounded-[10px] z-200"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-1 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-secondary hover:cursor-pointer rounded-[10px] z-200"
          >
            Next
          </button>
        </div>
      </div>

      {/* mobile mode */}
      <div 
      className="lg:hidden hc-card-list w-full p-5 md:px-10 h-full mx-auto py-5 relative">
        <Slider {...settings}>
          {blogPosts.map((post) => (
            <article 
            className="hc-card w-full md:px-5">
              {/* image */}
              <figure 
              className="hc-card-image w-full h-40 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
                <img src={post.image} 
                className="w-full h-full object-cover rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl"/>
              </figure>

              {/* Title */}
              <div 
              className="hc-card-header px-5 mt-5">
                <p 
                className="font-semibold text-xl text-secondary my-3">{post.title}</p>

                <p 
                className="text-sm lg:text-sm text-gray-400 text-justify">{post.excerpt}</p>

                <Link to={`/viewblog/${post.id}`}>
                 <button
                  className="text-primary mt-3 mb-10 underline text-right w-full">Show more</button>
                </Link>
              </div>

            </article>
          ))}
        </Slider>
      </div>
    </>
    
  );
};

export default BlogSlider
