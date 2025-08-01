import { useState, useEffect,useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SwipeButton from "./Swiper";
import { getCarouselItems } from "../../Api";

const HeroCarousel = () => {
  const intervalRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (carouselData.length === 0) return;
    startInterval();

    return () => clearInterval(intervalRef.current);
  }, [carouselData]);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 10000);
  };

  useEffect(() => {
    loadItems();
  }, []);

  async function loadItems() {
    setLoading(true);
    try {
      const data = await getCarouselItems();
      setCarouselData(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Failed to fetch carousel items:", error);
      setCarouselData([]);
    } finally {
      setLoading(false);
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    startInterval(); 
  };

  return (
    <div className="h-[95vh] w-full max-w-[120rem] mx-auto pt-16 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-12 px-6 overflow-hidden">
      {/* Left Box - Text Content */}
      <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
        <div className="w-full sm:w-[46vw] h-[40vh] sm:h-[85vh] bg-[#f5f5f5] rounded-3xl  overflow-hidden relative">
          <AnimatePresence mode="wait">
            <div
              key={currentIndex}
              className="absolute mt-2 md:mt-16 p-2 md:p-8"
            >
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-xl lg:text-4xl font-sans font-bold mb-4 text-purple-100"
              >
                {carouselData[currentIndex]?.title}
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                className="text-gray-700 capitalize font-open-sans text-sm lg:text-2xl mb-8 md:mb-16"
              >
                {carouselData[currentIndex]?.text}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              >
                <SwipeButton
                  link={carouselData[currentIndex]?.link}
                  text_btn={carouselData[currentIndex]?.text_btn}
                />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Box - Image Content */}
      <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
        <div className="w-full sm:w-[46vw] h-[40vh] sm:h-[85vh] rounded-3xl overflow-hidden relative">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentIndex}
              src={carouselData[currentIndex]?.image_url}
              alt={carouselData[currentIndex]?.title}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="w-full h-full object-fit rounded-xl"
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div className="inline-flex gap-2 opacity-80 bg-gray-400 px-4 py-2 rounded-full">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-purple-200 scale-125"
                      : "bg-gray-100 opacity-100"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
