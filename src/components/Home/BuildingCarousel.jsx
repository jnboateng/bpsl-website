import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import image1 from "../../images/footer vectors/ph.png";
import image2 from "../../images/footer vectors/mg.png";
import building from "../../images/logo/footer-banner.svg"
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Susu & Nkosuo Loans",
    description: "Grow your business with flexible loans from Best Point!",
    amount: "Open to traders, artisans, and small business owners saving with us for at least 2 months.",
    buttonText: "Read More",
    image: image1,
    linkedPage:'/products/business/Susu and Nkosuo Loans',
  },
  {
    title: "Mmofra Daakye Account (Kids Account)",
    description: "Start with just GHS 5 and build a brighter future for your child.",
    amount: "Open your child’s account today – it’s simple!",
    buttonText: "Click to Apply",
    image: image2,
    linkedPage:'/products/accounts/Mmofra Daakye Account',
  },
 



];

export default function BuildingCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { title, description, amount, buttonText, image,linkedPage } = slides[current];

  return (
    <div className="flex items-center py-12 justify-center  min-h-[400px] relative overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${building})` }}
        ></div>
        {/* Gradient overlay - fades top and bottom */}
        <div
          className="absolute inset-0 w-full h-full"
          
        ></div>
      </div>

      <div className="bg-white z-10 rounded-xl shadow-md flex items-center w-[90%] max-w-5xl p-4 md:p-6 space-x-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 bg-purple-200 text-white rounded-full p-2 hover:bg-purple-100 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex md:flex-row md:justify-between w-full flex-col gap-4">
          <div className="w-full md:w-1/3 h-40 min-w-[100px]">
            <img
              src={image}
              alt="carousel"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="font-medium text-gray-700">{amount}</p>
            <Link to={linkedPage} className="mt-3 bg-purple-200 hover:bg-purple-100 text-white px-4 py-2 rounded-lg">
              {buttonText}
            </Link>
          </div>
        </div>
        {/* Image */}

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 bg-purple-200 text-white rounded-full p-2 hover:bg-purple-100 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
