import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import { FiDownload } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx"
// import imageUrl from '../../assets/largemap.jpg'

interface MapProps {
    onClose: () => void;
}

const BlockMap: React.FC<MapProps> = ({onClose}) => {
    const [scale, setScale] = useState<number>(1);

    const imageUrl = '/map-last-one.jpg'

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

  //drag option
 const imgRef = useRef<HTMLImageElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom] = useState(2);

  const handleMouseDown = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsDragging(true);
    setStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);


  return (
    <>
        <section 
        className="relative w-full flex h-full backdrop-blur-lg  bg-black/5 items-center justify-center rounded-lg">
            {/* close button */}
            <Link to="/">
            <div
            onClick={onClose}
            className="absolute z-222 bg-white top-70 lg:top-2 right-90 w-10 h-10 flex items-center justify-center rounded-full shadow-md group">
               <RxCross2 
               className="text-gray-400 group-hover:text-primary group-hover:cursor-pointer"/>
            </div>
            </Link>

            {/* map */}
            <section 
            className="bg-white w-5/6 h-auto lg:w-1/2 lg:h-auto  rounded-lg mt-10  shadow-md">
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
                className="h-11/12 rounded-bl-lg rounded-br-lg p-3 overflow-scroll"
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: isDragging ? 'grabbing' : 'auto' }}>
                    <img 
                    src={imageUrl}
                    ref={imgRef}
                    alt="Aluvihara temple location map"
                    onMouseDown={handleMouseDown}
                    className={`h-full w-full rounded-bl-lg rounded-br-lg cursor-${isDragging ? 'grabbing' : 'grab'} transition-transform`}
                    style={{
                    cursor: isDragging ? 'grabbing' : 'grab',
                    transform: `scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                    }}/>
                </div>
            </section>
        </section>

    </>
  )
}

export default BlockMap