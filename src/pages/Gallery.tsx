// src/pages/GalleryPage.tsx
import TimelessHeritage from '../component/gallery/TimelessHeritage';
import DiscoverHighlights from '../component/gallery/DiscoverHighlights';
import GalleryGrid from '../component/gallery/GalleryGrid';
import Hero from '../component/gallery/Hero';

import NavBar1 from '../component/common/NavBar1';
import Footer from '../component/common/Footer';
import { useEffect } from 'react';

export default function Gallery() {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <main>
      <NavBar1 page="gallery"/>
      <Hero />
      <TimelessHeritage />
      <DiscoverHighlights />
      <GalleryGrid />
    </main>

    {/* footer section */ }
    <div className="mt-30">
      <footer className="bg-[#222222] py-10">
        <Footer />
      </footer>
      {/* copyrights */}
      <div
        className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
        <p>All rights reserved | Powered by All In One IT Solutions</p>
      </div>
    </div>
  </>
  );
}
