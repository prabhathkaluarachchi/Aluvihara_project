import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Line from "../../assets/linearts/Line.svg";
import Cave from "../../assets/linearts/cave.png";
import Step1 from "../../assets/images/steps/step1.jpg";
import Step2 from "../../assets/images/steps/step2.jpg";
import Step3 from "../../assets/images/steps/step3.jpg";
import Step4 from "../../assets/images/steps/step4.jpg";
import Step5 from "../../assets/images/steps/step5.jpg";
import Step6 from "../../assets/images/steps/step6.jpg";
import Step7 from "../../assets/images/steps/step7.jpg";
import Step8 from "../../assets/images/steps/step8.jpg";
import Step9 from "../../assets/images/steps/step9.jpg";
import Step10 from "../../assets/images/steps/step10.jpg";
import Step11 from "../../assets/images/steps/step11.jpg";
import Step12 from "../../assets/images/steps/step12.jpg";
import Step13 from "../../assets/images/steps/step13.jpg";
import Step14 from "../../assets/images/steps/step14.jpg";
import Step15 from "../../assets/images/steps/step15.jpg";
import Step16 from "../../assets/images/steps/step16.jpg";
import Step17 from "../../assets/images/steps/step17.jpg";
import Step18 from "../../assets/images/steps/step18.jpg";
import Step19 from "../../assets/images/steps/step19.jpg";
import Step20 from "../../assets/images/steps/step20.jpg";
import Step21 from "../../assets/images/steps/step21.jpg";
import Step22 from "../../assets/images/steps/step22.jpg";
import Step23 from "../../assets/images/steps/step23.jpg";
import Step24 from "../../assets/images/steps/step24.jpg";
import Step25 from "../../assets/images/steps/step25.jpg";
import Step26 from "../../assets/images/steps/step26.jpg";
import Step27 from "../../assets/images/steps/step27.jpg";
import Step28 from "../../assets/images/steps/step28.jpg";

const steps = [
  {
    title: "Fully grown palm tree",
    description: `Palm trees, particularly varieties like Borassus flabellifer (Palmyra Palm) and Corypha umbraculifera (Talipot Palm), are the primary sources for palm leaf manuscripts. The Palmyra Palm thrives in dry climates and can grow up to 15-20 meters, with its trunk reaching 1-2 meters in diameter. These trees are the main providers of leaves used for writing due to their size, flexibility, and the durability of their leaves.`,
    image: Step1,
  },
  {
    title: "Cutting tender bud",
    description: `The process begins with cutting the tender bud from the crown of the palm tree. This bud is carefully harvested as it is essential for obtaining the young leaves used in manuscript preparation. The tender bud, being soft and flexible, is ideal for writing purposes due to its quality.`,
    image: Step2,
  },
  {
    title: "The tender bud is lowered down",
    description: `After cutting the tender bud from the crown, it is lowered down carefully from the tree. This step ensures that the delicate bud remains intact and is prepared for further processing to extract the leaves used in writing.`,
    image: Step3,
  },
  {
    title: "Fully opened tender palm bud",
    description: `Once the bud has been lowered and is ready for use, it fully opens to reveal young palm leaves. These leaves are soft, light in color, and flexible, making them ideal for the etching and writing processes required in palm leaf manuscripts.`,
    image: Step4,
  },
  {
    title: "Subsections are separated",
    description: `The palm leaves are then separated into subsections, each of which will be used for writing. This process involves carefully detaching the sections to ensure that the leaves are in the right size and condition for further processing.`,
    image: Step5,
  },
  {
    title: "Midribs of each leaf are removed",
    description: `After the leaves are separated, the mid ribs (the central vein) of each palm leaf are removed. This step ensures that the leaves are thin, flexible, and suitable for writing. Removing the mid ribs also helps in the smoothing process of the leaf surface.`,
    image: Step6,
  },
  {
    title: "A hole is cut at the end of each leaf",
    description: `A hole is cut at the end of each leaf strip to facilitate hanging. The leaves are then exposed to natural elements such as breeze, sunlight, and dew, which helps in the drying process and enhances the flexibility of the leaves.`,
    image: Step7,
  },
  {
    title: "Leaves are formed into rolls",
    description: `Once the leaves are prepared, they are wound into rolls. These rolls are then placed in boiling water as part of the boiling process, which softens and sanitizes the leaves for writing. The boiling also enhances their durability.`,
    image: Step8,
  },

  {
    title: "The boiling process",
    description: `Several Rolls Are Placed in a Large Vessel, Kept on a Fireplace, One Over the Other Till the Vessel Is Almost Full. Then the Vessel Is Filled with Water and It Is Tightly Closed with a Lid and Heated The boiling process involves placing multiple rolls of palm leaves into a large vessel, which is then heated on a fireplace. The vessel is filled with water and tightly sealed to allow the heat to soften the leaves effectively. `,
    image: Step9,
  },
  {
    title: "Further aid in the boiling process",
    description: `On Top of Each Roll, Slices of Raw Papaw, Pineapple Leaves, and Keppetiya Twigs Are Placed To further aid in the boiling process, various natural substances like slices of raw papaw, pineapple leaves, and Keppetiya twigs are placed on top of each roll. These aterials contribute to the preservation and texture of the leaves.`,
    image: Step10,
  },
  {
    title: "Leaves are put in breeze",
    description: `After boiling, the leaves are removed and hung up on a cord to allow them to breeze for several days. This step helps the leaves dry out while maintaining their natural flexibility. `,
    image: Step11,
  },
  {
    title: "The softly dried leaves are exposed to mild sun",
    description: `The leaves are then exposed to mild sunlight for several days to ensure they are thoroughly dried. This step is crucial for ensuring that the leaves are not too brittle for writing`,
    image: Step12,
  },
  {
    title: "Leaves are put outside on grass",
    description: `Next, the sun-dried leaves are placed on grass to catch morning dew. The dew helps in the conditioning of the leaves, making them more supple and easier to handle for writing.`,
    image: Step13,
  },
  {
    title: "Leaf strips are wound in concentric way",
    description: `The dried leaf strips are wound in a concentric manner to ensure they are kept in proper storage conditions. This winding helps protect the leaves from damage during storage.`,
    image: Step14,
  },
  {
    title: "Polishing the leaf strips",
    description: `The leaf strips are polished by being rolled against a round wooden pole soaked in cold water. This process flattens the leaves and removes any wrinkles, preparing them for the etching and writing stages.`,
    image: Step15,
  },
  {
    title: "Leaves are punched with two holes",
    description: `The polished leaf strips are then punched with two holes on each side. This is done to allow the cord to pass through the holes, preparing the leaves for binding and storage.`,
    image: Step16,
  },
  {
    title: "A cord is inserted through the two holes",
    description: `After the holes are punched, the leaves are threaded through a cord and singed with a red-hot iron rod. This step ensures that the leaves are secured and ready for the writing process.`,
    image: Step17,
  },
  {
    title: "The leaves are put in the mould",
    description: `The leaves are placed into a mould and tightened with bolts and nuts. This step is important for securing the leaves in place during the final stages of preparation.`,
    image: Step18,
  },
  {
    title: "The bundle are cut into the required size",
    description: `The four sides of the palm leaf bundle are carefully cut to the required size with a sharp knife. This ensures that the leaves are uniform in size and ready for the writing and binding processes.`,
    image: Step19,
  },
  {
    title: "The bundle is signed with a red hot metal rod",
    description: `To prevent damage from moths, the edges of the bundle are singed with a red-hot iron rod. This step ensures that the folios are properly preserved.`,
    image: Step20,
  },

  {
    title: "The bundle of leaf strips",
    description: `At this stage, the bundle of palm leaf strips is fully prepared, ready for the next steps of writing and binding…`,
    image: Step21,
  },
  {
    title: "Letters are etched with the stylus",
    description: `The stylus used by the scribe is typically made of metal or wood, and it helps carve the letters onto the surface of the leaf. The stylus is designed for precise control over the writing process.`,
    image: Step22,
  },
  {
    title: "The stylus used by the scriber for writing",
    description: `After cutting the tender bud from the crown, it is lowered down carefully from the tree. This step ensures that the delicate bud remains intact and is prepared for further processing to extract the leaves used in writing.`,
    image: Step23,
  },
  {
    title: "Leaves are inked by rubbing the leaf surface",
    description: `After the letters are etched, they are inked by rubbing the surface with a cotton cloth dipped in a mixture of charcoal, dummala oil, and kekuna oil. This helps bring out the letters clearly.As well, this application safeguards palm leaves from moth-eating. 
`,
    image: Step24,
  },
  {
    title: "Make the letters more distinct",
    description: `The leaf surface is then cleaned using kurakkan powder to absorb excess moisture and remove the excess black coloring from the ink. This step ensures that the etched letters are distinct.`,
    image: Step25,
  },

  {
    title: "Etched letters look like this",
    description: `After the cleaning process, the etched letters become more distinct, with the black coloring now settled and the letters easier to read.`,
    image: Step26,
  },
  {
    title: "The manuscript book is bound",
    description: `Once the writing is complete, the manuscript book is bound, ensuring that the palm leaf folios are securely held together and preserved.`,
    image: Step27,
  },
  {
    title: "Enclosure of the folios",
    description: `The final step involves enclosing the folios in two wooden panels, which often feature geometrical or floral designs. The panels are secured by passing a cord through the punched holes, ensuring the manuscript is ready for use or storage.`,
    image: Step28,
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleStep = (index: number) => {
    setActiveStep((prev) => (prev === index ? -1 : index));
  };

  const handleMoreSteps = () => {
    setVisibleCount((prev) => prev + 8);
  };

  let lineHeight = "240px";

  if (visibleCount > 20) {
    lineHeight = "4450px";
  } else if (visibleCount === 20) {
    lineHeight = "3270px";
  } else if (visibleCount === 12) {
    lineHeight = "2120px";
  } else if (visibleCount === 4) {
    lineHeight = `${visibleCount * 240}px`;
  }

  return (
    <section className="mt-20 lg:mt-30 lg:pt-20 relative">
      <div className="absolute -top-80 z-500 -left-80 hidden lg:block">
        <img src={Cave} alt="temple" className="w-4xl object-fill" />
      </div>
      <div className="bg-[#F7F6F6] px-4 md:px-20">
        <div className="items-center text-start">
          <h2 className="-top-20 text-2xl md:text-4xl font-semibold text-secondary lg:w-xl lg:left-1/3 ml-2 lg:ml-60 relative z-10">
            <span className="text-primary block text-3xl font-medium">
              Steps of
            </span>
            <span className="text-[72px] lg:text-[96px]">Process</span>
          </h2>
        </div>
        <div className="relative justify-center z-10 max-w-6xl px-4 flex flex-col lg:ml-56">
          <div className="w-full h-full lg:p-5">
            <img
              src={Line}
              alt=""
              className="absolute hidden lg:block h-full -top-20 -z-940 left-20 lg:ml-2.5"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.slice(0, visibleCount).map((step, index) => (
            <div key={index} className="mb-10 lg:mb-0 lg:ml-10 lg:mb-15">
              <div
                className={`flex gap-2 cursor-pointer items-center ${
                  activeStep === index ? "items-start" : "text-gray-400"
                }`}
                onClick={() => toggleStep(index)}
              >
                <div
                  className={`w-10 h-10 lg:p-8 p-3 bg-[#F7F6F6] z-100 rounded-full flex items-center justify-center font-bold border-2 lg:border-4 ${
                    activeStep === index
                      ? "border-primary text-black bg-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {index + 1}
                </div>

                <div
                  className={`w-full max-w-4xl bg-[#DADADA]/38 text-[#4B4B4B]/90 lg:left-0 rounded-4xl p-6 flex flex-col justify-center pr-4 text-sm lg:text-lg ${
                    activeStep === index
                      ? "text-black font-semibold bg-white pr-6"
                      : "text-gray-400"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="text-xl">{step.title}</div>
                    <div>
                      {activeStep === index ? (
                        <div className="p-2 border-2 rounded-full border-primary hidden">
                          <FaArrowUp className="text-primary" />
                        </div>
                      ) : (
                        <div className="p-2 border-2 rounded-full">
                          <FaArrowDown className="text-gray-400" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    {activeStep === index && (
                      <div className="mt-4 bg-white rounded-xl flex flex-col md:flex-row items-start justify-between gap-7 max-w-4xl relative">
                        <div className="flex-1">
                          <p className="text-[16px] w-full font-normal text-gray-700 whitespace-pre-line text-justify">
                            {step.description}
                          </p>
                        </div>
                        {step.image && (
                          <div className="w-full lg:block md:w-64 h-40 md:h-48 rounded-xl overflow-hidden object-contain justify-start">
                            <img
                              src={step.image}
                              alt="Step Visual"
                              className="w-full h-full object-cover rounded-4xl lg:absolute lg:top-[-100px] lg:left-142 lg:w-2/5 lg:h-full"
                            />
                          </div>
                        )}
                        <div className=" lg:relative p-2 border-2 lg:mt-40  rounded-full border-primary">
                          <FaArrowUp className="text-primary border-primary" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-28">
        <div className="flex items-center gap-4 mt-10 md:ml-[52px] lg:ml-56 lg:p-6 lg:pb-4 p-3">
          {visibleCount < steps.length && (
            <button
              onClick={handleMoreSteps}
              className="bg-black text-primary px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition flex items-center gap-2"
            >
              More Steps
              <FaArrowDown className="border rounded-full p-1 border-primary" />
            </button>
          )}

          {visibleCount > 4 && (
            <button
              onClick={() => setVisibleCount(4)}
              className="bg-primary cursor-pointer text-black px-6 py-3 rounded-xl font-medium hover:bg-primary transition flex items-center gap-2"
            >
              Show Less
              <FaArrowUp className="border rounded-full p-1 cursor-pointer border-black" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Process;
