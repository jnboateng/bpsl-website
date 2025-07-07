import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getFeaturedProducts } from "../../Api";
import { toast } from "react-toastify";

export default function MovingCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  // Fetch featured products
  const fetchProducts = async () => {
    try {
      const res = await getFeaturedProducts();
      setProducts(res.data || []);
      console.log(res.data)
    } catch (error) {
      toast.error("Failed to load featured products");
      console.error("Error fetching products", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Update visible products when currentIndex or products change
  useEffect(() => {
    if (products.length > 0) {
      updateVisibleProducts(currentIndex);
    }
  }, [currentIndex, products]);

  const updateVisibleProducts = (centerIndex) => {
    const totalProducts = products.length;
    if (totalProducts === 0) return;

    // Create an array of 5 card indices centered around the current index
    const visibleIndices = [-2, -1, 0, 1, 2].map((offset) => {
      let index = (centerIndex + offset) % totalProducts;
      if (index < 0) index += totalProducts;
      return index;
    });

    setVisibleProducts(
      visibleIndices.map((index) => ({
        ...products[index],
        index,
        position: visibleIndices.indexOf(index) - 2, // -2, -1, 0, 1, 2
      }))
    );
  };

  const handleNext = () => {
    if (isAnimating || products.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || products.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Define positions for the products
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

  // Safely get features array from product
  const getProductFeatures = (product) => {
    if (!product) return [];
    
    // If features is an array, use it
    if (Array.isArray(product.features)) {
      return product.features;
    }
    
    // If description exists, split it into features
    if (product.description) {
      return product.description
        .split('.')
        .map(f => f.trim())
        .filter(f => f.length > 0);
    }
    
    // Default empty array
    return [];
  };

  const progress = products.length > 0 ? ((currentIndex + 1) / products.length) * 100 : 0;

  if (products.length === 0) {
    return (
      <div className="w-full m-2 md:ml-16 mt-16 py-12 px-4 text-center text-gray-500">
        No featured products available
      </div>
    );
  }

  return (
    <div className="w-full m-2 md:ml-16 mt-16 py-12 px-4">
      <div className="w-[92vw] md:w-[48vw] mx-auto">
        <div className="relative h-[27rem] mt-12 flex items-center justify-center overflow-hidden">
          {/* Card container */}
          <div className="w-72 h-full relative">
            {visibleProducts.map((product) => {
              const features = getProductFeatures(product);
              
              return (
                <motion.div
                  key={`${product.id}-${product.index}`}
                  className="absolute top-0 left-0 w-72 bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={getCardStyles(product.position.toString())}
                  animate={getCardStyles(product.position.toString())}
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
                      src={product.image_url || product.image}
                      alt={product.title || product.name}
                      className="w-full h-full object-fit"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/288x160";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl text-gray-800 mb-3">
                      {product.title || product.name}
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1.5">
                      {features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-4 h-4 mr-2 text-purple mt-0.5">
                            •
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {product.position === 0 && (
                      <button className="mt-4 w-full bg-purple text-white py-2.5 px-4 rounded-md transition-colors font-medium">
                        Learn More
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full flex items-center max-w-md bg-gray-200 rounded-full h-3">
          <motion.div
            className="bg-purple h-2 rounded-full"
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
              disabled={isAnimating || products.length === 0}
              className="bg-white p-3 rounded-full hover:text-white text-purple shadow-md hover:bg-purple transition-colors border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              disabled={isAnimating || products.length === 0}
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