import React, { useEffect } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialBar = () => {
  // Load Tawk.to script
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/65536ce7cec6a912820fc0f9/1hf6u2q2e";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    const checkTawkLoaded = setInterval(() => {
      if (window.Tawk_API) {
        window.Tawk_API.hideWidget();
        clearInterval(checkTawkLoaded);
      }
    }, 100);

    return () => {
      if (s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
      clearInterval(checkTawkLoaded);
    };
  }, []);

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.toggle();
    }
  };

  return (
    <div className="flex md:hidden flex-row items-center justify-center space-x-3 bg-white px-4 py-2 rounded-full shadow-md w-full max-w-fit mx-auto my-4">
      <Link
        to="tel:0800505050"
        className="bg-pink-400 p-2 rounded-full hover:scale-110 transition-transform duration-200"
      >
        <FaPhone className="text-white" />
      </Link>
      <Link
        to={"https://wa.me/233509823349"}
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
        to={"https://x.com/bestpointsl"}
        target="_blank"
        className="bg-purple-100 p-2 rounded-full hover:scale-110 transition-transform duration-200"
      >
        <FaTwitter className="text-white" />
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
    </div>
  );
};

export default SocialBar;
