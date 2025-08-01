import banner from "../../images/logo/hero-banner.svg"

const Hero = ({image,text1}) => {
  return (
    <div className="relative h-[250px] overflow-hidden w-full  ">
      {/* Background Image */}
      <img
        src={banner}
        alt={`${text1}`}
        className="absolute mt-14 inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-3xl overflow-hidden" /> */}

      {/* Text Container */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="relative">
          {/* Faded Background Title */}
          <h1 className="text-[72px] md:text-[100px] capitalize font-extrabold text-white/40 leading-none select-none">
            {text1}
          </h1>

          {/* Foreground Title */}
          <h2 className="absolute top-16 left-4 capitalize text-white text-3xl md:text-5xl font-bold">
            {text1}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;