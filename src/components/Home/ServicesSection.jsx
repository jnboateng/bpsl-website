import React from "react";
import BackgroundVideo from "./Video";

function ServicesSection() {
  return (
    <div className="h-[60vh] md:h-screen w-full p-6 flex flex-col items-center justify-center  md:py-12">
      <div className="h-1/ md:h-2/5 flex flex-col items-center mx-auto w-full md:w-3/5 space-y-4  md:mb-8 md:space-y-2">
        <h1 className="text-xl md:text-4xl font-bold text-purple-100 text-center mb-1 md:mb-6  sm:mb-4">
          A Range of Services We Provide
        </h1>
        <p className="text-xs md:text-xl font-open-sans font-normal text-center mt-2 sm:text-base sm:leading-relaxed sm:px-2">
          We process global and local financial transactions easy, fast, and
          secure. Whether you're sending money across the globe, managing local
          remittances, or seeking reliable mobile money services, we are here to
          serve you.
        </p>
      </div>
      <div className="w-full mx-auto min-w-[300px] h-3/5 md:w-full md:min-w-0 md:h-[50vh]">
        <BackgroundVideo />
      </div>
    </div>
  );
}

export default ServicesSection;
