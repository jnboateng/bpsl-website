import Navbar from "../components/Navbar";
import Pages from "./Pages";
import Footer from "../components/Footer";
import BuildingCarousel from "../components/Home/BuildingCarousel";
import SocialBar from "../components/SocialBar";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <div className="fixed z-50 bg-white w-full">
        <Navbar />
      </div>
      <Pages />
      <BuildingCarousel />
      <SocialBar />
      <Footer />
      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept All Cookies"
        declineButtonText="Reject All"
        enableDeclineButton
        cookieName="site_cookie_consent"
        containerClasses="fixed bottom-0 w-full bg-blue-200 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50"
        contentClasses="text-sm mb-2 md:mb-0 max-w-4xl"
        buttonClasses="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
        declineButtonClasses="bg-green-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm ml-2"
        overlay
        expires={150}
        onAccept={() => {
          console.log("✅ Cookies accepted");
        }}
        onDecline={() => {
          console.log("❌ Cookies declined");
        }}
        style={{
          background: "#2C1531",
          color: "white",
          padding: "6px",
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "12px",
          zIndex: 9999,
          fontSize: "14px",
        }}
        buttonStyle={{
          backgroundColor: "#D200AB", // Tailwind green-600
          color: "#fff",
          fontSize: "13px",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
        declineButtonStyle={{
          backgroundColor: "#fff", 
          color: "#333",
          fontSize: "13px",
          padding: "8px 16px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
          marginLeft: "8px",
        }}
      >
        We use cookies and similar technologies to enhance your browsing
        experience, serve personalized content and ads, and analyze website
        traffic. By clicking “Accept All Cookies”, you consent to the storing of
        cookies on your device. You can manage your preferences or reject
        non-essential cookies by clicking “Reject All”. Read our{" "}
        <Link to="/privacy" className="underline text-[#D200AB]">
          Privacy Policy
        </Link>{" "}
        for more information.
      </CookieConsent>
    </div>
  );
}

export default Homepage;
