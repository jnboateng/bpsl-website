import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const cards = [
  // Loans
  {
    cat: "loans",
    subcat: "personal",
    title: "Salary Loans",
    features: [
      "Tailored for salaried employees",
      "Quick disbursement",
      "Flexible repayment terms",
      "Competitive interest rates",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "loans",
    subcat: "business",
    title: "SME Loans",
    features: [
      "Supports small and medium enterprises",
      "No collateral for small amounts",
      "Business-friendly repayment plans",
      "Financial advisory services included",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331400/cnzlfzpe4vf0a1vauhs8.png",
  },
  {
    cat: "loans",
    subcat: "personal",
    title: "Auto Loans",
    features: [
      "Finance your dream car",
      "Flexible payment period",
      "Low down payment required",
      "Fast processing",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331401/yx2gvvjonaff1f8rwygn.png",
  },
  {
    cat: "loans",
    subcat: "institutional",
    title: "Church Loans",
    features: [
      "Designed for religious organizations",
      "Funding for infrastructure and events",
      "Competitive interest rates",
      "Flexible loan tenor",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },

  // Accounts
  {
    cat: "accounts",
    subcat: "savings",
    title: "Savings Account",
    features: [
      "Earn interest on deposits",
      "Free monthly statements",
      "Easy access to funds",
      "No hidden charges",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "accounts",
    subcat: "investment",
    title: "Fixed Deposit Account",
    features: [
      "Guaranteed returns on investment",
      "Flexible maturity options",
      "Higher interest rates",
      "Safe and secure saving",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331421/wmlwgiklcqqavtb1ppbf.png",
  },
  {
    cat: "accounts",
    subcat: "transactional",
    title: "Current Account",
    features: [
      "Ideal for frequent transactions",
      "Access to cheque book",
      "Unlimited withdrawals",
      "No interest earned",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "accounts",
    subcat: "savings",
    title: "Susu Account",
    features: [
      "Daily/weekly contributions",
      "Ideal for micro-savings",
      "No maintenance fees",
      "Withdraw anytime",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331400/cnzlfzpe4vf0a1vauhs8.png",
  },
  {
    cat: "accounts",
    subcat: "savings",
    title: "Savings Plus Account",
    features: [
      "Higher interest rates than regular savings",
      "Minimum balance required",
      "Bonus on long-term saving",
      "Priority banking services",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331401/yx2gvvjonaff1f8rwygn.png",
  },
  {
    cat: "accounts",
    subcat: "savings",
    title: "Mmofra Daakye Account",
    features: [
      "Specially designed for children",
      "Parental access and monitoring",
      "Free passbook provided",
      "Encourages savings culture early",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },

  // Digital Banking
  {
    cat: "digital",
    subcat: "mobile",
    title: "USSD Service (*277#)",
    features: [
      "Access banking without internet",
      "Check balance, transfer funds, pay bills",
      "Works on any mobile phone",
      "Available 24/7",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },

  // Transfers
  {
    cat: "transfers",
    subcat: "international",
    title: "Western Union",
    features: [
      "Global money transfer network",
      "Fast and secure transactions",
      "Cash pickup or bank deposit options",
      "Send and receive worldwide",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331421/wmlwgiklcqqavtb1ppbf.png",
  },
  {
    cat: "transfers",
    subcat: "international",
    title: "MoneyGram",
    features: [
      "Send and receive funds globally",
      "Multiple payout options",
      "Trusted and reliable",
      "Available in over 200 countries",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "transfers",
    subcat: "international",
    title: "Ria",
    features: [
      "Affordable transfer fees",
      "Fast delivery times",
      "Mobile wallet deposits available",
      "Strong presence in Africa",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331400/cnzlfzpe4vf0a1vauhs8.png",
  },
  {
    cat: "transfers",
    subcat: "international",
    title: "UnityLink",
    features: [
      "UK and EU to Ghana transfers",
      "Mobile money and bank options",
      "Favorable exchange rates",
      "Licensed and regulated service",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331401/yx2gvvjonaff1f8rwygn.png",
  },
  {
    cat: "transfers",
    subcat: "local",
    title: "Mobile Money Services",
    features: [
      "Instant fund transfers",
      "Pay bills and buy airtime",
      "Link to your bank account",
      "Secure and easy to use",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },
];

export default function MovingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  // Setup initial visible cards
  useEffect(() => {
    updateVisibleCards(currentIndex);
  }, [currentIndex]);

  const updateVisibleCards = (centerIndex) => {
    const totalCards = cards.length;
    // Create an array of 5 card indices centered around the current index
    const visibleIndices = [-2, -1, 0, 1, 2].map((offset) => {
      let index = (centerIndex + offset) % totalCards;
      if (index < 0) index += totalCards;
      return index;
    });

    setVisibleCards(
      visibleIndices.map((index) => ({
        ...cards[index],
        index,
        position: visibleIndices.indexOf(index) - 2, // -2, -1, 0, 1, 2
      }))
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Define positions for the cards
  const getCardStyles = (position) => {
    const positions = {
      "-2": {
        x: "-96%",
        scale: 0.7,
        opacity: 0.3,
        zIndex: 1,
      },
      "-1": {
        x: "-64%",
        scale: 0.85,
        opacity: 0.6,
        zIndex: 2,
      },
      0: {
        x: "0%",
        scale: 1,
        opacity: 1,
        zIndex: 3,
      },
      1: {
        x: "64%",
        scale: 0.85,
        opacity: 0.6,
        zIndex: 2,
      },
      2: {
        x: "96%",
        scale: 0.7,
        opacity: 0.3,
        zIndex: 1,
      },
    };

    return positions[position] || { x: 0, scale: 0, opacity: 0, zIndex: 0 };
  };

  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className="w-full m-2 md:ml-16 mt-16 py-12 px-4">
      <div className="w-[92vw] md:w-[48vw] mx-auto">
        <div className="relative h-[27rem] mt-12 flex items-center justify-center overflow-hidden">
          {/* Card container */}
          <div className="w-72 h-full relative">
            {visibleCards.map((card) => (
              <motion.div
                key={card.index}
                className="absolute top-0 left-0 w-72  bg-white rounded-lg shadow-lg overflow-hidden"
                initial={getCardStyles(card.position.toString())}
                animate={getCardStyles(card.position.toString())}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 1,
                }}
                style={{
                  originX: 0.5,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-full h-40 bg-blue-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    {card.title}
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    {card.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-4 h-4 mr-2 text-purple mt-0.5">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {card.position === 0 && (
                    <button className="mt-4 w-full bg-purple text-white py-2.5 px-4 rounded-md transition-colors font-medium">
                      Learn More
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Progress bar */}

        <div className="w-full flex items-center max-w-md bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-purple h-2  rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Navigation controls */}
        <div className="flex flex-col items-center mt-2">
          <div className="flex items-center space-x-8 mb-6">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              className="bg-white p-3 rounded-full hover:text-white text-purple shadow-md hover:bg-purple transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating}
              className="bg-white p-3 rounded-full hover:text-white text-purple shadow-md hover:bg-purple transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
