import React from "react";
import Hero from "../components/About/Hero";
import wire from "../images/footer vectors/wire.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import bgMap from "../images/footer vectors/map-bg.png";
import BranchDirectory from "../components/BranchesDirectory";
const locatorImage = "https://res.cloudinary.com/dinb6qtto/image/upload/v1747327047/fuelme/iblul8yo03tibszef3mk.png"
export const branches = {
  "Greater Accra": [
    {
      location: "SIC Life Mall Branch – Makola",
      gps: { lat: 5.5452785, lng: -0.2065975 },
      area: "Ussher Town, opposite Presby Church",
    },
    {
      location: "Madina Branch",
      gps: { lat: 5.67641, lng: -0.1733 },
      area: "Madina Zongo Junction",
    },
    {
      location: "Kasoa Branch",
      gps: { lat: 5.5346, lng: -0.4287 },
      area: "Opposite the Kasoa New Market",
    },
    {
      location: "Tema Branch",
      gps: null,
      area: "Community 1, Site 10",
    },
    {
      location: "Odorkor Branch",
      gps: { lat: 5.58257, lng: -0.26398 },
      area: "Old Cinema, near the Trotro Station",
    },
    {
      location: "East Legon Branch",
      gps: { lat: 5.64731, lng: -0.14968 },
      area: "Within American House Building",
    },
    {
      location: "Abossey Okai Branch",
      gps: null,
      area: "Opposite the Abossey Okai Central Mosque",
    },
    {
      location: "Accra Newtown Branch",
      gps: null,
      area: "Opposite Shell Filling Station near Malata Market",
    },
    {
      location: "Ashaiman Branch",
      gps: { lat: 5.68912, lng: -0.02818 },
      area: "Nii Atanya Highway",
    },
    {
      location: "Mile 7 Branch (Head Office)",
      gps: { lat: 5.55867, lng: -0.20118 },
      area: "Old Peace FM Building, Achimota Mile 7",
    },
  ],
  Ashanti: [
    {
      location: "Ejisu Branch",
      gps: null,
      area: "Opposite Fire Service Station and adjacent GCB",
    },
    {
      location: "Kejetia Branch",
      gps: { lat: 6.69834, lng: -1.62114 },
      area: "Former S.A.T. Building",
    },
    {
      location: "Suame Branch",
      gps: { lat: 6.71733, lng: -1.63088 },
      area: "Suame Water Works, opposite Nurom Hotel",
    },
    {
      location: "Adum Branch",
      gps: null,
      area: "Opposite Lava Stores",
    },
  ],
  Western: [
    {
      location: "Takoradi Branch",
      gps: null,
      area: "Adjacent U-84 Market Circle",
    },
  ],
  Bono: [
    {
      location: "Sunyani Branch",
      gps: { lat: 7.33243, lng: -2.32768 },
      area: "OA Terminal",
    },
  ],
  Central: [
    {
      location: "Swedru Branch",
      gps: null,
      area: "Odakwaano, adjacent Total Service Station",
    },
  ],
  Northern: [
    {
      location: "Tamale Branch",
      gps: null,
      area: "Within Forsmuel Building, opposite Taxi Rank",
    },
  ],
};

function Locator() {
  return (
    <div>
      <Hero image={locatorImage} text1={"Branch Locator"} />
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <div className="text-center w-full capitalize">
     
          <h1 className="text-3xl md:text-3xl font-bold text-gray-800  leading-tight">
            Locate the closest Branch near you
          </h1>
        </div>
      </div>
      
      <div className="relative z-0 h-screen mt-12">
        {/* Background - prevent pointer events with pointer-events-none */}
        <div
          className="absolute z-0 inset-0 w-full opacity-45 h-full bg-cover bg-no-repeat bg-right pointer-events-none"
          style={{ backgroundImage: `url(${bgMap})` }}
        />

        {/* Content - ensure higher z-index and proper positioning */}
        <div className="relative z-10 h-full">
          <BranchDirectory />
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-200 to-purple-300 h-[420px] md:h-48 w-80 md:w-3/4 mx-auto mt-32 md:mt-2 rounded-3xl relative p-6">
        <div
          className="absolute top-0 right-2  w-full md:w-1/3 h-screen object-cover md:bg-contain opacity-60 bg-no-repeat"
          style={{ backgroundImage: `url(${wire})` }}
        />
        <div className="z-10 text-white">
          <h3 className="text-3xl text-center font-bold mb-4 text-wrap">
            Get in touch with us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-16 mt-12 gap-6">
            <div className="flex space-x-4 items-start">
              <div className="bg-gradient-to-b from-purple to-purple-200 p-2 rounded-full">
                <FaPhoneAlt className="text-white" />
              </div>
              <div>
                <p className="font-extralight text-xs">Give us a call</p>
                <p className="font-bold text-xs">0303932990-4</p>
                <p className="font-bold text-xs">TOLL FREE: 0800505050</p>
              </div>
            </div>

            {/* Visit */}
            <div className="flex space-x-4 items-start">
              <div className="bg-gradient-to-b from-purple to-purple-200 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <p className="font-extralight text-xs">Visit</p>
                <p className="font-bold text-xs">Mile 7 – Achimota</p>
                <p className="font-bold text-xs">Old Peace FM Building</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex space-x-4 items-start md:col-span-1">
              <div className="bg-gradient-to-b from-purple to-purple-200 p-2 rounded-full">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <p className="font-extralight text-xs">Send us a mail</p>
                <p className="font-bold text-xs">
                  P. O. Box CT 10191, Cantonments
                </p>
                <p className="font-bold text-xs">info@bestpointgh.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locator;
