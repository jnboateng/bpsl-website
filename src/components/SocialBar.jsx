import React, { useEffect } from "react";
import Draggable from "react-draggable";
import {
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaInfo,
  FaTwitter,
  FaComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialBar = () => {
  // Load Tawk.to script
  useEffect(() => {
    // Load Tawk.to script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = "https://embed.tawk.to/65536ce7cec6a912820fc0f9/1hf6u2q2e";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);

    // Hide the default Tawk.to widget when it loads
    const checkTawkLoaded = setInterval(() => {
      if (window.Tawk_API) {
        // Hide the default widget
        window.Tawk_API.hideWidget();
        clearInterval(checkTawkLoaded);
      }
    }, 100);

    return () => {
      // Cleanup
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
    <Draggable>
      <div className="hidden md:flex fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex-col space-y-1 bg-white py-2 px-1 rounded-3xl shadow-lg">
        <Link
          to="tel:0800505050"
          className="bg-pink-400 p-2 rounded-full hover:scale-110 transition-transform duration-200"
        >
          <FaPhone className="text-white" />
        </Link>
        <Link
          to={"https://wa.me/233509823348"}
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

        {/* Custom Tawk.to Chat Button */}
        <button
          onClick={openChat}
          className="bg-purple-100 p-2 rounded-full hover:scale-110 transition-transform duration-200"
          aria-label="Live Chat"
        >
          <FaComment className="text-white text-lg" />
        </button>
      </div>
    </Draggable>
  );
};

export default SocialBar;
