import React, { useState } from "react";
import { BsChatQuote } from "react-icons/bs";

type Signature = {
  image: string;
  text: string;
  author: string;
};

const signatures: Signature[] = [
  {
    image: "/src/assets/images/visitor1.png",
    text: `Our visit to the Aluvihara was truly unforgettable. Watching the artisans inscribe our names onto the Palm Leaves was mesmerizing. We now have a beautiful, personalized keepsake that connects us to Sri Lankan culture.`,
    author: "Peter Johnson",
  },
  {
    image: "/src/assets/images/visitor2.png",
    text: `The palm leaf inscription experience was a highlight of our trip. Seeing our special message come to life on the palm leaves was magical. It's a unique and meaningful souvenir that we'll treasure forever.`,
    author: "Emma Watson",
  },
  {
    image: "/src/assets/images/visitor2.png",
    text: `The palm leaf inscription experience was a highlight of our trip. Seeing our special message come to life on the palm leaves was magical. It's a unique and meaningful souvenir that we'll treasure forever.`,
    author: "Emma Watson",
  },
];

const Signatures: React.FC = () => {
  const [index, setIndex] = useState(0);

  const getCurrentPair = () => {
    const first = signatures[index];
    const second = signatures[(index + 1) % signatures.length]; // loop to 0 if out of bounds
    return [first, second];
  };

  const handleNext = () => {
    const newIndex = (index + 2) % signatures.length;
    setIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (index - 2 + signatures.length) % signatures.length;
    setIndex(newIndex);
  };

  const currentPair = getCurrentPair();

  return (
    <section className="bg-[#e7a92b] text-gray-900 py-20 px-6 md:px-20">
      <div className="w-4/5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-white text-3xl font-semibold mb-2">Visitors</h2>
            <h1 className="text-[64px] lg:text-[96px] text-black mb-4 leading-tight">
              Signatures
            </h1>
            <p className="text-lg text-gray-800 leading-relaxed mb-4 text-justify">
              We are delighted to invite you to a unique journey into the heart
              of Sri Lankan tradition. You will witness the ancient art of palm
              leaf inscription, a craft that has preserved our cultural heritage
              for centuries.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed text-justify">
              We look forward to sharing this extraordinary experience with you
              and helping you take home a cherished memory of your visit.
            </p>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row items-center w-4/5 justify-center gap-6">
            {currentPair.map((s, i) => (
              <div
                key={i}
                className="relative w-[280px] h-[460px] rounded-[40px] overflow-hidden "
              >
                {s ? (
                  <>
                    <div>
                      <img
                        src={s.image}
                        alt={s.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="absolute top-45 z-90 left-5 w-7/8 h-auto right-0 bg-black/80 text-white p-5 rounded-[40px]">
                        <p className="text-sm mb-4">{s.text}</p>
                        <hr className="border-gray-400 my-2 w-2/3 mx-auto" />
                        <p className="text-center text-sm font-semibold">
                          {s.author}
                        </p>
                        <div className="items-center flex justify-center text-lg mt-1"><BsChatQuote className="text-center text-lg mt-1"/></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:ml-[45%] flex justify-center gap-10 text-3xl text-black">
          <button onClick={handlePrev} className="hover:scale-110 transition">
            ←
          </button>
          <button onClick={handleNext} className="hover:scale-110 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signatures;
