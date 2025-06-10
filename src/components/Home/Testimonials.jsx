import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner, Johnson Retail",
    quote:
      "Best Point Savings and Loans gave my business the financial boost it needed. Their loan process was quick and stress-free.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Consultant",
    quote:
      "I’ve tried several banks, but Best Point stands out for their customer service and flexible savings plans.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Principal, Greenleaf School",
    quote:
      "Their education loan package helped dozens of our students stay in school. Truly a partner in community development.",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Founder, Wilson Agro Supplies",
    quote:
      "Best Point’s SME support has been crucial to our growth. Their team understands the needs of small businesses.",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Accountant, Global Textiles Ltd.",
    quote:
      "Managing our corporate accounts has never been easier. Best Point offers great tools and a personal touch.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const TestimonialCard = ({ testimonial, isMobile }) => {
  return (
    <div
     style={{
        border: "1px solid rgba(168, 85, 247, 0.3)", // border-t-purple-500/20
       
      }}
      className={`${
        isMobile ? "w-[85vw]" : "w-full"
      } mx-4 p-6 bg-gray-100 rounded-lg shadow-md h-full flex flex-col`}
     
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
          What Our Clients Say
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
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
        What Our Clients Say
      </h2>

      {/* First marquee (left) - Desktop view with 3 visible */}
      <div className="relative overflow-hidden py-4 mb-8 h-50">
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

      {/* Second marquee (right) - Desktop view with 3 visible */}
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
      </div>

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
