import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { FiDownload } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import imageUrl from "../../assets/images/location-map.png"

interface MapProps {
    onClose: () => void;
}

const BlockMap: React.FC<MapProps> = ({onClose}) => {
    const [scale, setScale] = useState<number>(1);

    // map download
    const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'Aluvihara-temple-map.jpg'; // change extension if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //zoom in and out
    const zoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 3)); // max zoom 3x
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5)); // min zoom 0.5x
  };

  return (
    <>
        <section 
        className="relative w-full flex h-full backdrop-blur-lg  bg-black/5 items-center justify-center rounded-lg">
            {/* close button */}
            <Link to="/">
            <div
            onClick={onClose}
            className="absolute z-222 bg-white top-2 right-25 w-10 h-10 flex items-center justify-center rounded-full shadow-md group">
               <RxCross2 
               className="text-gray-400 group-hover:text-primary group-hover:cursor-pointer"/>
            </div>
            </Link>

            {/* map */}
            <section 
            className="bg-white w-5/6 h-11/12 rounded-lg mt-10  shadow-md">
                <section
                className="h-1/12 flex items-center text-gray-400 px-10 justify-between bg-white rounded-tl-lg rounded-tr-lg border-b-3 border-gray-200">
                    <div>
                        <button
                        onClick={zoomOut}>
                            <HiOutlineMinusSm 
                            className="text-2xl  hover:text-primary hover:cursor-pointer"/>
                        </button>
                        <button
                        onClick={zoomIn}>
                            <FiPlus 
                            className="text-2xl  hover:text-primary hover:cursor-pointer"/>
                        </button>
                    </div>
                    <h1>Aluvihara Location Map</h1>
                    <FiDownload 
                    onClick={handleDownload}
                    className="text-xl hover:text-primary hover:cursor-pointer"/>
                </section>
                
                <div
                className="h-11/12 rounded-bl-lg rounded-br-lg p-3 overflow-hidden">
                    <img 
                    src={imageUrl}
                    alt="Aluvihara temple location map"
                    style={{ transform: `scale(${scale})`, transition: "transform 0.3s ease" }}
                    className="h-full w-full object-fit rounded-bl-lg rounded-br-lg" />
                </div>
            </section>
        </section>

    </>
  )
}

export default BlockMap