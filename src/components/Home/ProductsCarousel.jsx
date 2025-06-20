import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const cards = [
  // Original Loans card
  {
    cat: "loans",
    subcat: "personal",
    title: "Loans",
    features: [
      "Government Salary Loan",
      "Nkosuo Loan",
      "SME Loan",
      "Salary Loan",
      "Trade Finance",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  // Loan subcategories
  {
    cat: "loans",
    subcat: "personal",
    title: "Government Salary Loan",
    features: ["Competitive rates", "Flexible repayment", "Quick approval"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "loans",
    subcat: "Business",
    title: "Nkosuo Loan",
    features: ["Business growth", "Collateral-free options", "Tailored amounts"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "loans",
    subcat: "Business",
    title: "SME Loan",
    features: ["Business expansion", "Working capital", "Equipment financing"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "loans",
    subcat: "personal",
    title: "Salary Loan",
    features: ["Instant approval", "Salary deduction", "Low interest"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },
  {
    cat: "loans",
    subcat: "Business",
    title: "Trade Finance",
    features: ["Import/export support", "Letters of credit", "Guarantees"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331399/om9zpjrtrgfvw0wtbueo.png",
  },

  // Original Savings card
  {
    cat: "savings",
    subcat: "savings",
    title: "Savings",
    features: [
      "Susu Account",
      "Sika Dua",
      "Mmofra Daakye",
      "Fixed Deposit",
      "Savings Account",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  // Savings subcategories
  {
    cat: "savings",
    subcat: "Susu Account",
    title: "Susu Account",
    features: ["Daily collections", "Mobile deposits", "Withdrawal flexibility"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "savings",
    subcat: "Sika Dua",
    title: "Sika Dua",
    features: ["High interest", "Growth account", "Regular savings"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "savings",
    subcat: "Mmofra Daakye",
    title: "Mmofra Daakye",
    features: ["Children's account", "Education focus", "Parental controls"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "savings",
    subcat: "Fixed Deposit",
    title: "Fixed Deposit",
    features: ["Higher returns", "Term options", "Secure investment"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "savings",
    subcat: "Savings Account",
    title: "Savings Account",
    features: ["Easy access", "Interest earning", "Transaction flexibility"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },

  // Original Digital Channels card
  {
    cat: "digital channels",
    subcat: "digital channels",
    title: "Digital Channels",
    features: [
      "Best Mobile Banking",
      "Mobile Money Services",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  // Digital subcategories
  {
    cat: "digital channels",
    subcat: "Best Mobile Banking",
    title: "Best Mobile Banking",
    features: ["USSD (*277#)", "Mobile app", "24/7 banking"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },
  {
    cat: "digital channels",
    subcat: "Mobile Money Services",
    title: "Mobile Money Services",
    features: ["Airtime purchase", "Bill payments", "Money transfers"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331415/tfnklbhelss4stefo5hh.png",
  },

  // Original Remittance card
  {
    cat: "remittance",
    subcat: "Remittance",
    title: "Remittance",
    features: [
      "Western Union",
      "UnityLink",
      "Ria Money Transfer",
      "MoneyGram",
    ],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },
  // Remittance subcategories
  {
    cat: "remittance",
    subcat: "Western Union",
    title: "Western Union",
    features: ["Global reach", "Instant transfers", "Multiple payout options"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },
  {
    cat: "remittance",
    subcat: "UnityLink",
    title: "UnityLink",
    features: ["Competitive rates", "Reliable service", "Nationwide branches"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },
  {
    cat: "remittance",
    subcat: "Ria Money Transfer",
    title: "Ria Money Transfer",
    features: ["Low fees", "Fast service", "Mobile integration"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  },
  {
    cat: "remittance",
    subcat: "MoneyGram",
    title: "MoneyGram",
    features: ["Worldwide network", "Secure transactions", "Multiple currencies"],
    image: "https://res.cloudinary.com/dinb6qtto/image/upload/v1747331402/zgmtugjpczcovkk8gad6.png",
  }
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
