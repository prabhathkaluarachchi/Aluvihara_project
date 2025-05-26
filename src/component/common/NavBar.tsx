import React, { useState } from "react"
import { FiMenu, FiX } from 'react-icons/fi';
import { GrMapLocation } from "react-icons/gr";


const  NavBar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
            <header className="fixed w-full bg-secondary/[0.6] shadow-md h-20 flex items-center justify-center">
                <div className="container mx-auto w-5/6">
                    <div className="flex items-center justify-between">
                        {/* logo */}
                        <div className="text-2xl font-bold text-blue-600 pt-5">
                            <img src="primary-logo.png" className="w-50" alt="Aluvihara logo"/>
                        </div>

                        {/* nav links */}
                        <nav className="hidden md:flex justify-center items-center space-x-4 text-white h-20">
                            <a href="#" className="hover:bg-primary hover:h-full bg-primary h-full flex items-center px-5 pt-5">About</a>
                            <a href="#" className="hover:text-primary hover:cursor-pointer flex items-center px-5 pt-5">History</a>
                            <a href="#" className="hover:text-primary hover:cursor-pointer flex items-center px-3 pt-5">Palm Leaves</a>
                            <a href="#" className="hover:text-primary hover:cursor-pointer flex items-center px-5 pt-5">Blog</a>
                            <a href="#" className="hover:text-primary hover:cursor-pointer flex items-center px-5 pt-5">Gallery</a>
                            <a href="#" className="hover:text-primary hover:cursor-pointer flex items-center px-5 pt-5">Contact</a>
                        </nav>

                        {/* map button */}
                        <button className="hidden lg:block px-5 bg-secondary text-primary py-2 rounded-[10px] flex items-center justify-center gap-2 mt-5">
                          <span>Go to map</span>
                          <GrMapLocation />
                        </button>

                        
                        {/* menu button */}
                        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* mobile mode */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-20 space-y-4 bg-white w-full">
                            <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
                            <a href="#" className="block text-gray-600 hover:text-blue-600">Destinations</a>
                            <a href="#" className="block text-gray-600 hover:text-blue-600">Offers</a>
                            <a href="#" className="block text-gray-600 hover:text-blue-600">About</a>
                            <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}

export default NavBar
