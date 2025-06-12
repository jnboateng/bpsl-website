import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SwipeButton from "./Swiper";
const HeroCarousel = () => {
  // Add this inside the component
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      title:
        "Attractive savings and investment accounts that offer high interest rates and help customers grow their wealth.",
      text: "Earn More on Your Savings, Competitive Interest, No Monthly Fees, Easy Access....",
      image:
        "https://res.cloudinary.com/dinb6qtto/image/upload/v1747330904/ptjmdd2zra9hzwjybbw1.png",
      link: "/loans1",
      textBtn: "Register Now",
    },
    {
      title: "See How Our Loans Are Changing Lives!",
      text: "Thanks to Best Point Savings and Loans, our dream is now a reality! With the SME loan, we finally had the support to set up our shop",
      image:
        "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331388/f6sxinwnzcms6zdw6far.png",
      link: "/loans2",
      textBtn: "Apply Now",
    },
    {
      title:
        "Fast & flexible loan solutions with low interest rates, quick approval, and minimal paperwork.",
      text: "Get Funds in 24 Hours !, Business Loans, Personal Loans, Salary Advances, Asset Financing.......",
      image:
        "https://res.cloudinary.com/dinb6qtto/image/upload/v1747330904/ptjmdd2zra9hzwjybbw1.png",
      link: "/loans3",
      textBtn: "Get In Touch",
    },
    {
      title: "Seamless Transactions, Anytime Anywhere, 24/7 Access.",
      text: "Our USSD App Simplifies Your Every Banking Needs, Bill Payments, Airtimes & Bundles, Mini-Statements, Bank Transfers....",
      image:
        "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331388/f6sxinwnzcms6zdw6far.png",
      link: "/loans4",
      textBtn: "Apply Now",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === carouselData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="min-h-screen w-full pt-16 md:pt-12 flex flex-col sm:flex-row items-center justify-center  sm:gap-x-2 px-6">
      {/* Left Box - Text Content */}
      <div className="w-full sm:w-1/2 h-auto sm:h-full flex items-center justify-center">
        <div className="w-full sm:w-[46vw] max-w-[700px] h-[50vh] sm:h-[85vh] bg-gray-100 rounded-3xl  overflow-hidden relative">
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
                {carouselData[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                className="text-gray-700  font-open-sans text-sm lg:text-xl mb-8 md:mb-16"
              >
                {carouselData[currentIndex].text}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
              >
                <SwipeButton
                  link={carouselData[currentIndex].link}
                  textBtn={carouselData[currentIndex].textBtn}
                />
              </motion.div>
            </div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Box - Image Content */}
      <div className="w-full sm:w-1/2 h-auto sm:h-full flex items-center justify-center">
        <div className="w-full sm:w-[46vw] max-w-[700px] h-[50vh] sm:h-[85vh] bg-white rounded-3xl  overflow-hidden relative">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentIndex}
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full h-full object-cover rounded-xl"
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
