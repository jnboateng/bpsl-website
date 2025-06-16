import React from "react";

function Describe() {
  return (
    <div>
      <div className="relative md:mt-12 min-h-[60vh] flex flex-col items-center px-4 sm:px-8">
        <div className="absolute top-8 flex flex-col sm:flex-row gap-6 sm:gap-x-16 justify-start w-full items-center sm:items-start">
          <div className="hidden md:block bg-purple mt-2 h-8 w-12" />
          <div className="w-[90vw] md:w-full text-center lg:text-left lg:w-[80vw] ">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Discover <span className="text-purple">Exciting </span>
              Career
            </h2>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
              Opportunities at <span className="text-purple">Best point</span>
            </h2>
            <span className="text-base sm:text-2xl text-justify md:text-center font-extralight">
              We're looking for young and energetic teams to join us in shaping
              the future of banking and finance. Discover a career path and grow
              with us.
            </span>
          </div>
        </div>

        <div className="w-full flex justify-center mt-[24rem] sm:mt-[20rem]">
          <button
            onClick={() => {
              document
                .getElementById("jobs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-purple-200 w-3/4 sm:w-2/5 h-14 sm:h-16 rounded-full shadow-md"
          >
            <span className="text-lg sm:text-2xl font-bold text-white">
              Apply Today
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Describe;
