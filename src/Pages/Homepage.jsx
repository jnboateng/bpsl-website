import Navbar from "../components/Navbar";
import Pages from "./Pages";
import Footer from "../components/Footer";
import BuildingCarousel from "../components/Home/BuildingCarousel";
import SocialBar from "../components/SocialBar";
import CookieConsent from "./CookieConsent";

function Homepage() {
  return (
    <div>
      <div className="fixed z-50 bg-white w-full">
        <Navbar />
      </div>
      <Pages />
      <BuildingCarousel />
      <SocialBar />
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default Homepage;
