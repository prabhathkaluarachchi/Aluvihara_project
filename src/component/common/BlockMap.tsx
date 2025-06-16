import React, { useEffect, useRef, useState } from 'react'
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
    setScale((prev) => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  //dragble map
  const maxScale: number = 4;
  const minScale: number = 1;

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const zoomIntensity = 0.0015;
    const newScale = clamp(
      scale - e.deltaY * zoomIntensity * scale,
      minScale,
      maxScale
    );
    const ratio = newScale / scale;

    setOffset((prev) => ({
      x: px - (px - prev.x) * ratio,
      y: py - (py - prev.y) * ratio,
    }));
    setScale(newScale);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    lastPos.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  const resetView = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

    useEffect(() => {
    const img = containerRef.current?.querySelector("img");
    if (img) img.ondragstart = () => false;
  }, []);
  


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
                className={`h-11/12 rounded-bl-lg rounded-br-lg p-3 overflow-auto`}
                onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onDoubleClick={resetView}>
                    <img 
                    src={imageUrl}
                    alt="Aluvihara temple location map"
                    draggable={false}
                              style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                    transformOrigin: "0 0",
                    transition: dragging ? "none" : "transform 80ms linear",
                  }}/>
                </div>
            </section>
        </section>

    </>
  )
}

export default BlockMap