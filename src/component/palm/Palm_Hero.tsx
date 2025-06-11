import ImgLandBanner from "../../assets/images/landing/palmleaves.webp";

const HomePage = () => {
  return (
    <div className="text-gray-800">
      <section className="relative h-[50vh] md:h-[90vh] text-white flex items-center overflow-hidden">
        <img
          src={ImgLandBanner}
          alt="Aluvihara Rock Temple"
          className="absolute top-0 left-0 w-full h-full object-top object-cover z-0"
        />
        <div className="w-full pr-4 relative z-10">
          <div className="lg:w-[800px] md:max-w-[90%] md:mr-auto">
            <div className="bg-black/70 p-6 rounded-md md:rounded-r-[10px]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2 pl-0 md:pl-14 font-roboto leading-[1.5] md:leading-[1.5] lg:leading-[1.3] text-center md:text-left">
                <span className="text-primary block">Palm</span>
                <span className="text-white">Leaves Process</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
