import React from 'react'
import { Link } from 'react-router-dom'

import { IoIosSend } from "react-icons/io"

import Step1 from '../../assets/about_palm_leaves_process1.jpg'
import Step2 from '../../assets/about_palm_leaves_process2.jpg'
import Step3 from '../../assets/about_palm_leaves_process3.jpg'
import Step4 from '../../assets/about_palm_leaves_process4.jpg'
import Step5 from '../../assets/about_palm_leaves_process5.jpg'
import Step6 from '../../assets/images/about_palm_leaves_process.jpg'

const PalmLeavesProcess: React.FC = () => {
  return (
    <>
        <section
        className="w-full lg:w-5/6 mx-auto h-full flex flex-col lg:flex-row">
            {/* description */}
            <div
            className="w-full lg:w-6/10 px-5 lg:px-0 lg:pt-20 lg:pr-20">
                <h1
                className="felx flex-col">
                    <p 
                    className="text-lg text-center md:text-left  lg:text-3xl text-white">The process of,</p>
                    <p 
                    className="text-3xl text-center md:text-left lg:text-[64px] font-bold text-primary">Ola(Palm) Leaves</p>
                </h1>

                <p 
                className="text-sm lg:text-[18px] mt-8 text-gray-300 text-justify md:text-left leading-6 lg:leading-8">
                    The Pali Canon, or Tipitaka, was historically inscribed on Ola palm leaves in Sri Lanka. This ancient practice involved meticulously etching the sacred Buddhist texts onto processed leaves of the talipot palm (Corypha umbraculifera) using a stylus. These manuscripts, preserved in temples, are crucial for maintaining the authenticity of Theravada Buddhist teaching.
                </p>

                <Link to="/palm">
                    <button
                    className="flex text-xs lg:text-base text-primary bg-secondary px-4 py-2 rounded-[10px] items-center justify-center gap-2 my-8 lg:mt-9 hover:text-primary/[0.8] hover:bg-secondary/[0.8] hover:cursor-pointer">
                        <span>More Details</span>
                        <IoIosSend className="text-base lg:text-xl"/>
                    </button>
                </Link>
            </div>

            {/* process images */}
            <div
            className="flex lg:flex-col gap-2 w-full lg:ml-0 lg:w-4/10 lg:h-190 lg:mt-[-60px]">
                <div 
                className="h-20 lg:h-1/5">
                    <img 
                    src={Step1} 
                    alt="first step"
                    className="h-full object-cover w-40 lg:ml-15  border-3 border-primary" />
                </div>
                <div 
                className="h-20 lg:h-1/5">
                    <img 
                    src={Step2} 
                    alt="first step"
                    className="h-full object-cover w-40 lg:mt-[-15px] lg:ml-45 border-3 border-gray-200" />
                </div>
                <div 
                className="h-20 lg:h-1/5">
                    <img 
                    src={Step3} 
                    alt="first step"
                    className="h-full object-cover w-40 lg:mt-[-30px] lg:ml-75 border-3 border-gray-200" />
                </div>
                <div 
                className="h-20 lg:h-1/5">
                    <img 
                    src={Step6} 
                    alt="first step"
                    className="h-full object-cover w-40 lg:mt-[-60px] lg:ml-45 border-3 border-gray-200" />
                </div>
                <div 
                className="h-20 lg:h-1/5 lg:ml-15">
                    <img 
                    src={Step5} 
                    alt="first step"
                    className="h-full object-cover w-40 lg:mt-[-80px] border-3 border-primary" /></div>
            </div>
        </section>
    </>
  )
}

export default PalmLeavesProcess