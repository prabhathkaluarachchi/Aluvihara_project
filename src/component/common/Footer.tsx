import React from 'react'
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import SecondaryLogo from '../../assets/secondary-logo.png'

const Footer: React.FC = () => {
  return (
    <>
        <footer 
        className="w-5/6 mx-auto flex flex-col lg:flex-row gap-8 lg:gap-5 h-auto">

            {/* info */}
            <section 
            className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-6 justify-between lg:pr-20">
                {/* logo section */}
                <section 
                    className="w-full flex flex-col gap-5">
                    <img 
                    src={SecondaryLogo} 
                    alt="Aluvihara temple logo" 
                    className="w-20 md:w-25 lg:w-30"/>

                    <hr 
                    className="w-full lg:w-4/5 text-xl bg-primary h-[3px] rounded-full border-0"/>

                    <p 
                    className="text-ternary text-sm text-justify lg:text-left lg:text-lg">
                        Visitors are all welcome!. Discover the serenity and history of Aluvihara – a spiritual journey through ancient Buddhist heritage. Experience culture, tranquility, and timeless wisdom. Visit today
                    </p>
                </section>
                
                {/*contact*/}
                <div 
                className="w-full flex justify-between">
                    <section 
                    className='w-1/2 text-white flex flex-col gap-2'>
                        <h2 
                        className="text-ternary teext-sm lg:text-base">Address</h2>
                        <p 
                        className="text-sm lg:text-base">
                            Kandy-Trinco Road,<br/>
                            Aluviharaya,<br/>
                            Matale.
                        </p>
                    </section>

                    <section 
                    className='w-1/2 text-white flex flex-col gap-2'>
                        <h2 
                        className="text-ternary teext-sm lg:text-base">Contact</h2>
                        <p 
                        className="flex flex-col text-sm lg:text-base">
                            <span>+94 66 56 56 233</span>
                            <span>+94 66 56 56 234</span>
                        </p>
                    </section>
                </div>

                <section 
                className="w-full flex flex-col gap-2">
                    <h2 
                    className="text-ternary text-base">Fllow</h2>
                    <div 
                    className="flex gap-5">
                        <FaFacebookSquare className="w-8 h-8 text-white"/>
                        <FaSquareInstagram className="w-8 h-8 text-white"/>
                    </div>
                </section>

                {/* links */}
                <section 
                className="w-full flex flex-col gap-2">
                    <h2 
                    className="text-ternary text-base">Quick links</h2>
                    <div 
                    className="w-full">
                          <div 
                          className="space-x-6">
                              <nav 
                              className="flex flex-row md:flex-row justify-left items-start md:items-center lg:space-x-4 space-x-5 text-white text-xs md:text-sm text-left">
                                  <Link 
                                  className='h-full flex items-center' to="/">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">About</a>
                                  </Link>
                                  <Link 
                                  className='h-full flex items-center' to="/history">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">History</a>
                                  </Link>
                                  <Link 
                                  className='h-full flex items-center' to="/palm">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">Palm Leaves</a>
                                  </Link>
                                  <Link 
                                  className='h-full flex items-center' to="/blog">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">Blog</a>
                                  </Link>
                                  <Link 
                                  className='h-full flex items-center' to="/gallery">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">Gallery</a>
                                  </Link>
                                  <Link 
                                  className='h-full flex items-center' to="/contact">
                                      <a 
                                      href="#" className="hover:text-primary hover:cursor-pointer flex items-center lg:px-3">Contact</a>
                                  </Link>
                              </nav>
                          </div>
                    </div>
                </section>
            </section>

            {/* map */}
            <section 
            className="w-full lg:w-1/2 lg:pt-25 flex flex-col gap-2">
                <h2 
                className="text-ternary text-base">Find Location</h2>
                <iframe
                    title="Aluvihara Temple Map"
                    src="https://maps.google.com/maps?q=Aluvihara+temple+Matale&output=embed&t=k"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </footer>
    </>
  )
}

export default Footer