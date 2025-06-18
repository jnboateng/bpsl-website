import React, { useState } from "react";
import Hero from "../components/About/Hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import wire from "../images/footer vectors/wire.png";

export const annualReports = [
  {
    id: "2017",
    title: "Annual Report 2017",
    excerpt: "A foundational year focusing on stability and groundwork.",
    link: "/pdfs/aas.pdf",
  },
  {
    id: "2018",
    title: "Annual Report 2018",
    excerpt: "Highlights include improved internal processes and training.",
    link: "/pdfs/ANNUAL_REPORT_2023.pdf",
  },
  {
    id: "2019",
    title: "Annual Report 2019",
    excerpt: "Marked by innovation and sustained growth.",
    link: "/pdfs/annual-report-2019.pdf",
  },
  {
    id: "2020",
    title: "Annual Report 2020",
    excerpt: "Navigating uncertainty during a global pandemic.",
    link: "/pdfs/annual-report-2020.pdf",
  },
  {
    id: "2021",
    title: "Annual Report 2021",
    excerpt: "Resilience and strategic milestones throughout 2021.",
    link: "/pdfs/annual-report-2021.pdf",
  },
  {
    id: "2022",
    title: "Annual Report 2022",
    excerpt: "Digital transformation and stakeholder engagement.",
    link: "/pdfs/annual-report-2022.pdf",
  },
  {
    id: "2023",
    title: "Annual Report 2023",
    excerpt: "Sustainable growth and record-breaking revenue.",
    link: "/pdfs/annual-report-2023.pdf",
  },
  {
    id: "2024",
    title: "Annual Report 2024",
    excerpt: "Strategic pivots and market expansion.",
    link: "/pdfs/annual-report-2024.pdf",
  },
  {
    id: "2025",
    title: "Annual Report 2025",
    excerpt: "Digital excellence and customer satisfaction.",
    link: "/pdfs/annual-report-2025.pdf",
  },
];

function Reports() {
 
const sortedReports = [...annualReports].sort(
    (a, b) => parseInt(b.id) - parseInt(a.id)
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredReports = sortedReports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 4;

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(
    indexOfFirstReport,
    indexOfLastReport
  );

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <Hero text1={"Annual Reports"} />

      {/* Header */}
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800  leading-tight">
          Annual Reports
        </h1>
      </div>

      <div className="mt-2 pl-2 md:pl-24 text-gray-600">
        <span className="text-center ">
          A full archive of our strategic, financial, and operational reports.
        </span>
      </div>

      {/* Search Bar */}
      <div className="mt-12 mx-auto">
        <div className="flex justify-center items-center gap-2 bg-white border border-purple-300 rounded-full px-4 py-2 shadow-sm max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search annual reports..."
            className="flex-grow outline-none text-sm px-2 text-purple-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gradient-to-b from-purple to-purple-200 hover:bg-purple-700 text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
            Search
          </button>
        </div>
      </div>

      {/* Report List */}
      <div className="pl-2 md:pl-24 w-7/8 mt-12 h-auto md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between px-2 md:px-12">
          <div className="col-span-1">
            <ul>
              {filteredReports.length ? (
                currentReports.map((report) => (
                  <li
                    key={report.id}
                    className="w-full bg-white shadow-md rounded-xl p-5 my-3 transition hover:shadow-lg flex items-center justify-between"
                  >
                    {/* Left: Title & Link */}
                    <Link
                      to={`/reports/${report.id}`}
                      className="flex items-center gap-3 text-purple-700 hover:text-purple-900 font-semibold text-base transition-transform duration-300 hover:translate-x-1"
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span>{report.title}</span>
                    </Link>

                    {/* Right: Download Button */}
                    <a
                      href={report.downloadUrl}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 px-4 py-2 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition duration-300"
                    >
                      Download
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 mt-4">No reports found.</li>
              )}
            </ul>
            {filteredReports.length > reportsPerPage && (
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-3 py-1 rounded-md border border-purple-200 text-sm font-medium ${
                      currentPage === index + 1
                        ? "bg-purple-100 text-white"
                        : "bg-white text-purple hover:bg-purple-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="col-span-1">
            <div className=" relative w-[300px] md:w-[350px] h-[550px] md:h-[500px] p-4 rounded-xl md:mx-auto bg-gradient-to-tr from-purple-200 to-purple-300">
              <div
                className="absolute w-[70%] h-[40vh] bottom-0 right-0 bg-no-repeat z-0 object-contain opacity-75"
                style={{
                  backgroundImage: `url(${wire})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  zIndex: 0,
                }}
              />
              <div className="bg-white w-28 z-10 rounded-lg text-center flex items-center justify-center p-1">
                <span className="font-light  text-xs text-center">
                  Advertisment
                </span>
              </div>
              <p className="font-extralight text-white mt-12 text-lg text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Distinctio cupiditate quos assumenda molestias minus corporis
                odit inventore explicabo eligendi beatae ab, dolorum
                perspiciatis ea officiis itaque nobis modi saepe delectus.
              </p>

              <button className="flex z-10 items-center bg-purple-300 py-1 text-sm mt-6 text-white px-8 rounded-lg">
                Apply now
              </button>

              <div className="flex flex-row items-center justify-start mt-20 gap-3">
                <div className="bg-white rounded-full w-16 h-16 flex flex-row items-center justify-center">
                  <span className="font-semibold">BP</span>
                </div>
                <span className="text-white font-semibold  capitalize">
                  best point savings and loans
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
