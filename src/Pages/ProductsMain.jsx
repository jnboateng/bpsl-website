import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Hero from "../components/About/Hero";
import { cards } from "../components/Home/ProductsCarousel";

const herobg = "https://res.cloudinary.com/dinb6qtto/image/upload/v1747327037/fuelme/eunqurz5ywlilv9qris7.png";

const categoryMap = {
  loans: "Loans",
  accounts: "Accounts",
  digital: "Digital Banking",
  transfers: "Transfers",
  kiddie: "Kiddie Account",
  personal: "Personal Banking",
  business: "Business Banking",
};

// Get unique categories from cards
const uniqueCategories = [...new Set(cards.map(card => categoryMap[card.cat] || card.cat))];
const defaultCategory = uniqueCategories[0]; // Use first category as default

function ProductsMain() {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [activeTab, setActiveTab] = useState("");

  // Filter cards by main category
  const filteredCards = cards.filter(card => {
    return categoryMap[card.cat] === selectedCategory;
  });

  // Extract unique subcategories (used for tabs)
  const uniqueSubcategories = [
    ...new Set(filteredCards.map(card => card.subcat).filter(Boolean))
  ];

  // Set default tab when category changes
  React.useEffect(() => {
    if (uniqueSubcategories.length > 0) {
      setActiveTab(uniqueSubcategories[0]);
    } else {
      setActiveTab("");
    }
  }, [selectedCategory]);

  // Filter displayed cards based on active tab (subcategory)
  const displayedCards = filteredCards.filter(card => {
    if (!activeTab) return true;
    return card.subcat === activeTab;
  });

  return (
    <div>
      <Hero image={herobg} text1={"Products"} />
      <div className="flex gap-x-16 items-center mt-12 mb-6">
        <div className="bg-purple h-8 w-12" />
        <h2 className="text-3xl md:text-4xl font-bold capitalize text-purple-100">
          Our Products Catalog
        </h2>
      </div>
      <div className="mt-2 pl-2 md:pl-28">
        <span className="text-base sm:text-2xl font-extralight">
          Our products include personal banking, business banking, e-banking,
          loans, Kiddie accounts, etc
        </span>
      </div>

      <div className="p-6 md:p-12">
        <h2 className="text-xl md:text-2xl font-bold text-purple-200 mb-4">
          Category:
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <ul className="space-y-3">
              {uniqueCategories.map(cat => (
                <li
                  key={cat}
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedCategory === cat
                      ? "bg-purple-100 font-bold text-white"
                      : "hover:bg-purple-50"
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="w-full md:w-3/5">
            {/* Tabs */}
            {uniqueSubcategories.length > 0 && (
              <div className="flex bg-purple-200 p-2 text-white rounded-full w-full overflow-x-auto mb-6">
                {uniqueSubcategories.map(sub => (
                  <button
                    key={sub}
                    className={`px-6 py-2 rounded-full whitespace-nowrap ${
                      activeTab === sub
                        ? "bg-gradient-to-b from-purple to-purple-100 text-purple-200"
                        : ""
                    }`}
                    onClick={() => setActiveTab(sub)}
                  >
                    <span className="text-white text-sm capitalize">{sub}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Card List */}
            <div className="grid md:grid-cols-2 gap-12 max-h-[400px] overflow-y-auto pr-2">
              {displayedCards.map((card, index) => (
                <NavLink
                  to={`/products/${card.cat}/${card.title}`}
                  key={index}
                  className="rounded-xl overflow-hidden shadow-md"
                >
                  <div className="h-64 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
                    <img
                      src={card.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-purple-200 text-lg">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {card.features[0]}
                    </p>
                    <Link
                      to={`/products/${card.cat}/${card.title}`}
                      className="text-purple text-xs font-light hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsMain;