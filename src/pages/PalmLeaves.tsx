import Signatures from "../component/palm/Signatures"
import Tech from "../component/palm/Tech"
import Palm_Hero from "../component/palm/Palm_Hero"
import Process from "../component/palm/Process"
import NavBar1 from "../component/common/NavBar1"
import Footer from "../component/common/Footer"
import { useEffect } from "react"

const PalmLeaves: React.FC = () => {
  //top mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header>
        {/* <NavBar /> */}
        <NavBar1 page="palm"/>

        {/* hero section */}
        <section className="h-auto w-full">
         
          <Palm_Hero/>
        </section>
      </header>
        
        <Tech/>
        <Process/>
        <Signatures/>


            {/* footer section */}
      <div className="mt-30">
        <footer className="bg-[#222222] py-10">
          <Footer />
        </footer>
        {/* copyrights */}
        <div
          className="bg-[#1E1E1E] text-center py-3 text-[8px] md:text-xs text-ternary">
          <p>All rights reserved | Powered by All In One Holdings</p>
        </div>
      </div>
    </>
  );
};

export default PalmLeaves;
