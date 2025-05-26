import React from "react";

export default function DiscoverHighlights() {
  return (
    <section className="relative py-10 px-4 md:px-20 lg:px-0 lg:py-0 lg:mt-60 overflow-visible mx-auto">
      <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">
        {/* Left: Image overflowing to the top */}
        <div className="relative z-20">
          <img
            src="/gallery/cave.png"
            alt="Cave view"
            className="absolute left-[-150px] top-[-320px] w-[800px] max-w-none rounded-md z-10 hidden lg:block opacity-45"
          />
        </div>
      </div>
    </section>
  );
}

