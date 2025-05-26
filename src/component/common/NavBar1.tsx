import React, { useEffect } from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

import PrimaryLogo from "../../assets/primary-logo.png"


// props
interface NavBarProps {
    page: string;
}

const NavBar1: React.FC<NavBarProps> = ({page}) => {

    //aluvihara location
    const openGoogleMap = () => {
        const lat = 7.497725597286164; 
        const lng = 80.62177126265821;
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        
        window.open(googleMapsUrl, "_blank");
  };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [atTop, setAtTop] = useState(true);

    const navLinks = [
        { name: "About", path: "/" },
        { name: "History", path: "/history" },
        { name: "Palm Leaves", path: "/palm" },
        { name: "Blog", path: "/blog" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];


    //nav bar scroll functionality
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const currentScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        // Detect scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false); // Hide on scroll down
        } else {
          setShowNavbar(true); // Show on scroll up
        }
    
        // Check if at top
        setAtTop(currentScrollY < 50);
    
        setLastScrollY(currentScrollY);
      };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);


       
  return (
    <>
        <nav
        className={`
            ${atTop ? "bg-transparent" : "bg-[#080707]"}
            h-22 fixed w-full z-999 top-0 left-0
            transition-transform duration-300
            ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                      {/* Logo */}
                      <div className="flex-shrink-0 text-2xl font-bold text-blue-600 mt-5">
                          <Link to="/">
                            <img src={PrimaryLogo} alt="" className="w-40 lg:w-50"/>
                          </Link>
                      </div>

                      {/* Desktop Nav Links */}
                      <div className="hidden md:hidden lg:block items-center space-x-6">
                          <nav className="hidden md:flex  justify-center items-center space-x-4 text-white h-20">
                              <Link className='h-full flex items-center' to="/">
                              <a href="#" className={page === "about" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>About</a>
                              </Link>
                              <Link className='h-full flex items-center' to="/history">
                              <a href="#" className={page === "history" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>History</a>
                              </Link>
                              <Link className='h-full flex items-center' to="/palm">
                              <a href="#" className={page === "palm" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>Palm Leaves</a>
                              </Link>
                              <Link className='h-full flex items-center' to="/blog">
                              <a href="#" className={page === "blog" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>Blog</a>
                              </Link>
                              <Link className='h-full flex items-center' to="/gallery">
                              <a href="#" className={page === "gallery" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>Gallery</a>
                              </Link>
                              <Link className='h-full flex items-center' to="/contact">
                              <a href="#" className={page === "contact" ? ("hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5"):("hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5")}>Contact</a>
                              </Link>
                          </nav>
                      </div>

                      {/* map button */}
                      <div className="hidden lg:block">
                              <button 
                              onClick={openGoogleMap} 
                              className="px-5 bg-secondary text-primary py-2 rounded-[10px] flex items-center justify-center gap-2 mt-5 hover:cursor-pointer hover:bg-secondary/[0.8] hover:text-primary/[0.8]">
                                  <span>Go to map</span>
                                  <GrMapLocation />
                              </button>
                      </div>

                      {/* Mobile Menu Button */}
                      <div className="lg:hidden flex gap-8 items-center justify-center">
                            <Link to="/" className="hidden md:block">
                              <button className="w-auto px-5 bg-secondary text-primary py-2 rounded-[10px] flex items-center justify-center gap-2 mt-5">
                                  <span>Go to map</span>
                                  <GrMapLocation />
                              </button>
                            </Link>

                          <button
                              onClick={() => setIsOpen(!isOpen)}
                              aria-label="Toggle menu"
                              className="text-primary bg-black/[0.5] rounded-[10px] mt-7 md:mt-5 p-1 focus:outline-none"
                          >
                              {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                          </button>
                      </div>
                  </div>
              </div>

              {/* Mobile Dropdown Menu */}
              <div className={`lg:hidden mt-5 bg-black px-4 py-4 shadow-inner h-[50dvh] md:h-[40dvh] transition-all duration-400 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                      }`}>
                  <div className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                          <Link
                              key={link.name}
                              to={link.path}
                              onClick={() => setIsOpen(false)}
                              className="text-white/[0.8] text-center py-2 hover:bg-black/[0.5] hover:cursor-pointer hover:text-primary transition"
                          >
                              {link.name}
                          </Link>
                      ))}

                          <button
                          onClick={openGoogleMap} 
                          className="w-auto px-5 bg-secondary text-primary py-2 rounded-[10px] flex items-center justify-center gap-2 mt-5">
                              <span>Go to map</span>
                              <GrMapLocation />
                          </button>
                  </div>
              </div>
        </nav>
    </>
  )
}

export default NavBar1