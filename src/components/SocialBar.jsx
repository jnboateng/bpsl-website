import React from "react";
import Draggable from "react-draggable";
import { FaPhone, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaInfo } from "react-icons/fa";

const SocialBar = () => {
  return (
    <Draggable>
      <div className="hidden md:flex fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex-col space-y-1 bg-white py-2 px-1 rounded-3xl">
        <div className="bg-pink-400 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaPhone className="text-white" />
        </div>
        <div className="bg-green-500 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaWhatsapp className="text-white" />
        </div>
        <div className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaFacebookF className="text-white" />
        </div>
        <div className="bg-red-600 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaInstagram className="text-white" />
        </div>
        <div className="bg-blue-900 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaLinkedinIn className="text-white" />
        </div>
        <div className="bg-purple-800 p-2 rounded-full hover:scale-110 transition-transform duration-200">
          <FaInfo className="text-white" />
        </div>
      </div>
    </Draggable>
  );
};

export default SocialBar;
