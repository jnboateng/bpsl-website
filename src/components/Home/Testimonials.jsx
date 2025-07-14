import React, { useState, useEffect } from "react";
import faustina from '../../images/testimonials/faustina.png'
import felicia from '../../images/testimonials/felicia.png'
import anthony from '../../images/testimonials/anthony.jpg'

const testimonials = [
  {
    id: 1,
    name: "Anthony Addai",
    role: "Phone Dealer (Anthony Phones)",
    quote:
      "Best Point helped me grow from one shop to three. Their flexible loans and support make them a partner you can trust.",
    avatar: anthony,
  },
  {
    id: 2,
    name: "Faustina Kwayi",
    role: "Loyal Customer for 10 Years (Faustinet Entreprise)",
    quote:
      "In 10 years, I expanded to four branches. Best Point’s quick overdrafts and helpful managers kept my business strong and moving forward.",
    avatar: faustina,
  },
  {
    id: 3,
    name: "Felicia Boamah",
    role: "Car Spare Parts Dealer (F.Boamah Auto Parts)",
    quote:
      "Best Point helped me grow from one shop to three. Their reliability and support make them my trusted financial partner.",
    avatar: felicia,
  },
  {
    id: 4,
    name: "Theophilus Darko",
    role: "Managing Director, Princess Ice Company Ltd",
    quote:
      "I’ve been with Best Point over 10 years. Their flexible loans and support show true care for customer growth. I always recommend them.",
    avatar: "https://www.gravatar.com/avatar/?d=mp",
  },
  {
    id: 5,
    name: "Nana Franklin Afoah Nyame-Yenam II",
    role: "Odikro of Nyamedam Community",
    quote:
      "Best Point gave us a borehole, ending years of water struggles. Our community now enjoys clean, safe water. This support truly changed lives.",
    avatar: "https://www.gravatar.com/avatar/?d=mp",
  },
];


const TestimonialCard = ({ testimonial, isMobile }) => {
  return (
    <div
    
      className={`${
        isMobile ? "w-[85vw]" : "w-full"
      } mx-4 p-6 bg-gray-100 rounded-lg h-full flex flex-col`}
     
    >
      <div className="flex items-center mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic flex-grow whitespace-normal">
        "{testimonial.quote}"
      </p>
    </div>
  );
};

const MarqueeTestimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (isMobile) {
    return (
      <div className="w-full mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>

        <div className="relative overflow-hidden h-72">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={`mobile-${testimonial.id}`}
                className="w-full flex-shrink-0 px-2"
              >
                <TestimonialCard testimonial={testimonial} isMobile={true} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 z-10"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={`indicator-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-gray-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        What Our Customers Say
      </h2>

      {/* First marquee (left) - Desktop view with 3 visible */}
      <div className="relative overflow-hidden py-4 mb-2 h-50">
        <div className="flex animate-marquee-left items-stretch h-full w-[300%]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`left-${testimonial.id}-${index}`}
              className="w-full px-2"
            >
              <TestimonialCard testimonial={testimonial} isMobile={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Second marquee (right) - Desktop view with 3 visible
      <div className="relative overflow-hidden py-4 h-50">
        <div className="flex animate-marquee-right items-stretch h-full w-[300%]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`right-${testimonial.id}-${index}`}
              className="w-1/3 px-2"
            >
              <TestimonialCard testimonial={testimonial} isMobile={false} />
            </div>
          ))}
        </div>
      </div> */}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarqueeTestimonials;
