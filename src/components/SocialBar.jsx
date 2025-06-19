import React from "react";
import Draggable from "react-draggable";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaInfo,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const SocialBar = () => {
  return (
    <Draggable>
      <div className="hidden md:flex fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex-col space-y-1 bg-white py-2 px-1 rounded-3xl">
        <Link
          to="tel:0800505050"
          className="bg-pink-400 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaPhone className="text-white" />
        </Link>
        <Link
          to={""}
          target="_blank"
          className="bg-green-500 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaWhatsapp className="text-white" />
        </Link>
        <Link
          to={"https://www.facebook.com/bestpointsl/"}
          target="_blank"
          className="bg-blue-600 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaFacebookF className="text-white" />
        </Link>
        <Link
          to={"https://www.instagram.com/bestpointsl/"}
          target="_blank"
          className="bg-red-600 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaInstagram className="text-white" />
        </Link>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/company/bestpointsl"}
          className="bg-blue-900 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaLinkedinIn className="text-white" />
        </Link>
        <Link
          to={"https://x.com/bestpointsl"}
          target="_blank"
          className="bg-purple-100 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaTwitter className="text-white" />
        </Link>
      </div>
    </Draggable>
  );
};

export default SocialBar;
