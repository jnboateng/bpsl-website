import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../images/logo/1.jpg"
import slide2 from "../../images/logo/smile.jpg"
import slide3 from "../../images/logo/3.jpg"
import slide4 from "../../images/logo/Frame.jpg"
import slide5 from "../../images/logo/2.jpg"
import SwipeButton from "./Swiper";
const HeroCarousel = () => {
  // Add this inside the component
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselData = [
    {
      title:
        "Fast & Flexible Loans for Every Need",
      text: "Get approved in 24 hours with low-interest, stress-free financing. Whether it's a startup, emergency, or asset, we've got you covered.",
      image:slide1,
      link: "/loans1",
      textBtn: "Apply Now",
    },
    {
      title: "Join the smile",
      text: "Easy-access loans for government workers — disbursed within 24 hours and repaid seamlessly through Controller deductions.",
      image:slide2,
      link: "/loans2",
      textBtn: "Apply Today – Smile Tomorrow",
    },
    {
      title:
        "Bank Anywhere, Anytime",
      text: "Experience the power of digital banking with our USSD service. Easy, fast, and always available. Just Dial *277#.",
      image:slide3,
      link: "/loans3",
      textBtn: "Read More",
    },
    {
      title: "Stay Safe. Don’t Fall for Online Loan Scams!",
      text: "Best Point Savings and Loans does not operate any loan services through Facebook, WhatsApp, or any other online platform. Ignore requests asking for payment to access a loan",
      image:slide4,
      link: "/loans4",
      textBtn: "Call 0800505050 (Toll-Free) ",
    },
    {
      title:"Grow Your Savings Faster",
      text: "Enjoy competitive interest rates, zero monthly fees, and easy access to your money. It's time to earn more and worry less.",
      image:slide5,
      link: "/loans4",
      textBtn: "Start Saving Today",
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
    <div className="min-h-screen w-full pt-16 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
      {/* Left Box - Text Content */}
      <div className="w-full sm:w-1/2 h-auto sm:h-full flex items-center justify-center">
        <div className="w-full sm:w-[46vw] max-w-[700px] h-[50vh] sm:h-[85vh] bg-[#5f5f5f] rounded-3xl  overflow-hidden relative">
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
                className="text-gray-700 capitalize font-open-sans text-sm lg:text-xl mb-8 md:mb-16"
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
        <div className="w-full sm:w-[46vw] max-w-[700px] h-[50vh] sm:h-[85vh] rounded-3xl overflow-hidden relative">
          <AnimatePresence mode="sync">
            <motion.img
              key={currentIndex}
              src={carouselData[currentIndex].image}
              alt={carouselData[currentIndex].title}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
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
