import { Link } from "react-router-dom";
import Hero from "../components/About/Hero";
import React, { useState } from "react";


export const dummyNotices = [
  {
    id: 1,
    image: "https://via.placeholder.com/400x200?text=Notice+1",
    title: "Consumer Recourse Directive - BOG",
    description:
      "Details on consumer rights and bank obligations. Learn how to seek redress and what channels to use when you have a complaint against a financial institution. These directives aim to strengthen consumer trust in the financial sector.",
    category: "BOG Notices",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x200?text=Notice+2",
    title: "Use Of Ghana Card For Transactions",
    description:
      "Ghana Card is now required for all banking and financial transactions. This directive seeks to streamline identity verification across institutions and improve customer data accuracy.",
    category: "BOG Notices",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x200?text=Notice+3",
    title: "Mobile Money Fraud Alert",
    description:
      "Beware of fraudulent MoMo prompts and links. Scammers often impersonate banks to steal your information. Always verify the source before responding to messages.",
    category: "Security",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/400x200?text=Notice+4",
    title: "Update on Interest Rates",
    description:
      "New rates effective May 2025 have been announced by the Bank of Ghana. This reflects current inflation trends and monetary policy adjustments.",
    category: "Finance",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/400x200?text=Notice+5",
    title: "ATM Service Downtime",
    description:
      "Scheduled maintenance will affect ATM services this weekend. Customers are advised to complete urgent withdrawals before Saturday 10pm.",
    category: "BOG Notices",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/400x200?text=Notice+6",
    title: "Customer Service Update",
    description:
      "Starting next month, customer service hours will be extended from 7am to 8pm on weekdays to better serve clients during peak periods.",
    category: "BOG Notices",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/400x200?text=Notice+7",
    title: "Report Suspicious Calls",
    description:
      "If you receive suspicious phone calls asking for personal information, report them immediately to our hotline. Your safety is our priority.",
    category: "Security",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/400x200?text=Notice+8",
    title: "BoG Mobile App Launch",
    description:
      "The official Bank of Ghana mobile app is now available. Access services like account summaries, alerts, and rate updates in one place.",
    category: "Finance",
  },
];

const categories = ["All", "BOG Notices", "Security", "Finance"];

function Notices() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 4;

  const filteredNotices = dummyNotices
    .filter((n) =>
      selectedCategory === "All" ? true : n.category === selectedCategory
    )
    .filter(
      (n) =>
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage
  );
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePageChange = (direction) => {
    setCurrentPage((prev) =>
      direction === "next"
        ? Math.min(prev + 1, totalPages)
        : Math.max(prev - 1, 1)
    );
  };

  return (
    <div>
      <Hero text1={"Notices"} />
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-purple-200 leading-tight w-1/2">
          All Notices
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 gap-4 mb-6 border rounded-3xl px-1 py-1">
          {/* Filter Dropdown with Display */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-gradient-to-b from-purple to-purple-100 text-white font-light px-4 py-2 rounded-3xl text-sm outline-none appearance-none pr-8"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Selected Label */}
          <span className="ml-2 mr-4 font-semibold text-sm text-purple-800">
            {selectedCategory === "All" ? "Public Notices" : selectedCategory}
          </span>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="grid w-2/3 mx-auto mt-24 grid-cols-1 sm:grid-cols-2 gap-36 mb-8">
        {paginatedNotices.length ? (
          paginatedNotices.map((notice) => (
            <Link
            to={`/notices/${notice.id}`}
              key={notice.id}
              className="rounded-xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={notice.image}
                alt={notice.title}
                className="w-full h-80 object-cover border border-purple rounded-xl border-opacity-20"
              />
              <div className="p-4">
                <h2 className="font-semibold text-purple-800 mb-2">
                  {notice.title}
                </h2>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">
                  {notice.description}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-gray-500 col-span-full text-center">
            No notices found.
          </div>
        )}
      </div>
      {/* Pagination with Previous and Next buttons */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6 mb-6">
          <button
            onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-purple-600 border-purple-300 hover:bg-purple-100"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  currentPage === page
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-purple-600 border-purple-300 hover:bg-purple-100"
                }`}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() =>
              currentPage < totalPages && handlePageClick(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-purple-600 border-purple-300 hover:bg-purple-100"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Notices;
