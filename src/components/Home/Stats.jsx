import React from "react";
import { motion } from "framer-motion";
import users from "../../images/general icons/users.png";
import map from "../../images/general icons/map.png";
import world from "../../images/general icons/world.png";

function Stats() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const titleAnim = {
    hidden: { y: -100, scale: 2, opacity: 0 },
    show: { 
      y: 0, 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 20,
        damping: 10
      }
    }
  };

  const imageAnim = {
    hidden: { x: -100, opacity: 0 },
    show: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 30,
        damping: 10
      }
    },
    exit: { x: 100, opacity: 0 }
  };

  const statTopAnim = {
    hidden: { y: -50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 50 
      }
    }
  };

  const statBottomAnim = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120 
      }
    }
  };

  return (
    <div className="h-[95vh] flex flex-col justify-center items-center overflow-hidden px-4">
      <motion.h1 
        className="text-3xl md:text-4xl font-open-sans font-bold mb-12 md:mb-24 text-purple-200 text-center"
        variants={titleAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        Get Along with Bestpoint
      </motion.h1>

      <motion.div 
        className="flex flex-col md:flex-row justify-evenly w-full items-center space-y-12 md:space-y-0 md:space-x-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Happy Clients */}
        <motion.div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <motion.div className="mr-4" variants={imageAnim}>
            <img src={users} alt="Happy clients" className="w-16 md:w-20 h-16 md:h-20 object-contain" />
          </motion.div>
          <div className="flex flex-col items-center space-y-1">
            <motion.span variants={statTopAnim} className="text-2xl md:text-3xl font-bold text-purple-200">292,887</motion.span>
            <motion.span variants={statBottomAnim} className="text-sm md:text-xl font-open-sans font-normal text-gray-700">Happy Clients</motion.span>
          </div>
        </motion.div>

        {/* Branches */}
        <motion.div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <motion.div className="mr-4" variants={imageAnim}>
            <img src={map} alt="Branches" className="w-16 md:w-20 h-16 md:h-20 object-contain" />
          </motion.div>
          <div className="flex flex-col items-center space-y-1">
            <motion.span variants={statTopAnim} className="text-2xl md:text-3xl font-bold text-purple-200">19</motion.span>
            <motion.span variants={statBottomAnim} className="text-sm md:text-xl font-open-sans font-normal text-gray-700">Branches</motion.span>
          </div>
        </motion.div>

        {/* USSD Service */}
        <motion.div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <motion.div className="mr-4" variants={imageAnim}>
            <img src={world} alt="Services" className="w-16 md:w-20 h-16 md:h-20 object-contain" />
          </motion.div>
          <div className="flex flex-col items-center space-y-1">
            <motion.span variants={statTopAnim} className="text-2xl md:text-3xl font-open-sans font-bold text-purple-200">24/7</motion.span>
            <motion.span variants={statBottomAnim} className="text-sm md:text-xl font-open-sans font-normal text-gray-700">Up and Running</motion.span>
            <motion.span variants={statBottomAnim} className="text-sm md:text-xl font-open-sans font-normal text-gray-700">USSD Service</motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Stats;
