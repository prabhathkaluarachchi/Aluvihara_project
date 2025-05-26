export default function TimelessHeritage() {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-0 py-10 md:py-20 lg:mt-15  relative">
      
      {/* New absolute background rectangle - FULL WIDTH, NO LEFT MARGIN */}
      <div className="hidden lg:block">
        <div className="absolute top-10 left-0 right-[180px] h-full bg-[#F7F6F6] z-0"  ></div>
      </div>

      {/* DESKTOP (lg and up) */}
      <div className="hidden lg:block relative z-10">
        <div className="overflow-visible mx-auto">
          {/* Decorative rectangles */}
          <div
            className="absolute top-0 right-0 opacity-50 pointer-events-none"
            style={{ transform: "translate(0%, -30%)" }}
          >
            <div
              className="border border-gray-400 w-[300px] h-[250px] absolute"
              style={{ right: "20px", top: "-100px", borderWidth: "2px" }}
            ></div>
            <div
              className="border border-gray-400 w-[300px] h-[250px] absolute"
              style={{ right: "60px", top: "-60px", borderWidth: "2px" }}
            ></div>
          </div>

          <div className="max-w-[80%] mx-auto grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div className="pr-8">
              <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]  lg:text-left text-center">
                Timeless
              </p>
              <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-6 leading-[1] lg:text-left text-center">
                Heritage
              </h2>
              <p className="text-gray-700 mb-4 text-justify text-[18px]">
                Step into a world where history and spirituality converge. This
                gallery showcases awe-inspiring historical caves, intricate
                statues, and magnificent temples that stand as timeless
                testaments to cultural and architectural brilliance.
              </p>
              <p className="text-gray-700 text-justify text-base">
                Each statue, a masterpiece in its own right, reflects the skill
                and devotion of artisans who brought life to their creations.
                The temples, with their towering facades and detailed carvings,
                offer a glimpse into the spiritual sanctuaries of the past.
              </p>
            </div>

            {/* Right: Images */}
            <div className="relative h-[450px]">
              <img
                src="/gallery/heritage1.png"
                alt="Heritage 1"
                className="absolute bottom-0 left-20 w-[260px] z-20"
              />
              <img
                src="/gallery/heritage2.png"
                alt="Heritage 2"
                className="absolute top-30 lg:top-5 right-0 w-full max-w-[350px] z-10 rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET (below lg) remains unchanged */}
<div className="block lg:hidden">
  <div className="bg-[#F7F6F6] rounded-lg p-5">
    <div className="text-center">
      <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]">
        Timeless
      </p>
      <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-4 leading-[1]">
        Heritage
      </h2>
    </div>

          <p className="text-gray-700 mb-4 text-justify text-sm sm:text-base">
            Step into a world where history and spirituality converge. This
            gallery showcases awe-inspiring historical caves, intricate statues,
            and magnificent temples that stand as timeless testaments to
            cultural and architectural brilliance.
          </p>
          <p className="text-gray-700 mb-6 text-justify text-sm sm:text-base">
            Each statue, a masterpiece in its own right, reflects the skill and
            devotion of artisans who brought life to their creations. The
            temples, with their towering facades and detailed carvings, offer a
            glimpse into the spiritual sanctuaries of the past.
          </p>

          <div className="rounded-md py-4 flex justify-center">
            <img
              src="/gallery/heritage1.png"
              alt="Heritage"
              className="w-full sm:w-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
