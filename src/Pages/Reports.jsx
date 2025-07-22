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
  const [showFileModal, setShowFileModal] = useState(false);
  const [currentFileUrl, setCurrentFileUrl] = useState("");
  const [viewerError, setViewerError] = useState(false);
  const [currentViewer, setCurrentViewer] = useState("google"); // google, office, pdfjs, direct
 
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

  // Function to get file extension
  const getFileExtension = (url) => {
    return url.split(".").pop().toLowerCase();
  };

  // Function to determine if file can be previewed
  const canPreview = (url) => {
    const ext = getFileExtension(url);
    return ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"].includes(ext);
  };

  // Function to get appropriate viewer URL
  const getViewerUrl = (fileUrl, viewer) => {
    const encodedUrl = encodeURIComponent(fileUrl);

    switch (viewer) {
      case "google":
        return `https://docs.google.com/gview?embedded=true&url=${encodedUrl}`;
      case "office":
        return `https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`;
      default:
        return `https://docs.google.com/gview?embedded=true&url=${encodedUrl}`;
    }
  };

  // Handle viewer error
  const handleViewerError = () => {
    setViewerError(true);
  };

  // Switch to next viewer
  const switchViewer = (viewer) => {
    setCurrentViewer(viewer);
    setViewerError(false);
  };

  // Open file in viewer modal
  const openFileViewer = (fileUrl) => {
    setCurrentFileUrl(fileUrl);
    setShowFileModal(true);
    setViewerError(false);
    setCurrentViewer("google"); // Reset to default viewer
  };

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
          <button className="bg-gradient-to-b from-purple to-purple-200 hover:bg-gradient-to-t text-white text-sm font-medium px-4 py-1.5 rounded-full transition">
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

                    {/* Right: View Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openFileViewer(report.link)}
                        className="ml-4 px-4 py-2 cursor-pointer hover:bg-gradient-to-t bg-gradient-to-b from-purple to-purple-200 text-white text-sm font-medium rounded-md transition duration-300"
                      >
                        View
                      </button>
                      
                    </div>
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

      {/* Enhanced Document Preview Modal */}
      {showFileModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white w-[95%] h-[95%] rounded-lg shadow-lg relative overflow-hidden">
            {/* Header with viewer options and close button */}
            <div className="flex justify-between items-center p-3 bg-gray-100 border-b">
              <div className="flex gap-2">
                <button
                  onClick={() => switchViewer("google")}
                  className={`px-3 py-1 rounded text-sm ${
                    currentViewer === "google"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Google Viewer
                </button>
                <button
                  onClick={() => switchViewer("office")}
                  className={`px-3 py-1 rounded text-sm ${
                    currentViewer === "office"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                  }`}
                >
                  Office Viewer
                </button>
              </div>
              <button
                onClick={() => {
                  setShowFileModal(false);
                  setViewerError(false);
                  setCurrentViewer("google");
                }}
                className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Close
              </button>
            </div>

            {/* Document viewer content */}
            <div className="relative w-full h-[calc(100%-60px)]">
              {viewerError ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                  <div className="text-red-500 text-lg mb-4">
                    Unable to preview this document
                  </div>
                  <div className="text-gray-600 mb-6">
                    The document viewer encountered an error. This might happen
                    if:
                    <ul className="mt-2 text-left list-disc list-inside">
                      <li>The file is not publicly accessible</li>
                      <li>The file format is not supported</li>
                      <li>The file is too large</li>
                      <li>There are CORS restrictions</li>
                    </ul>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={currentFileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                    >
                      Open in New Tab
                    </a>
                    
                  </div>
                </div>
              ) : (
                <>
                  {!canPreview(currentFileUrl) ? (
                    <div className="flex flex-col items-center justify-center h-full text-center p-8">
                      <div className="text-orange-500 text-lg mb-4">
                        Preview not available for this file type
                      </div>
                      <div className="text-gray-600 mb-6">
                        File type: .{getFileExtension(currentFileUrl).toUpperCase()}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={currentFileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                        >
                          Open in New Tab
                        </a>
                        
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={getViewerUrl(currentFileUrl, currentViewer)}
                      title="Document Preview"
                      className="w-full h-full"
                      frameBorder="0"
                      onError={handleViewerError}
                      onLoad={(e) => {
                        // Check if iframe loaded successfully
                        try {
                          const iframeDoc =
                            e.target.contentDocument ||
                            e.target.contentWindow.document;
                          if (
                            iframeDoc.title.includes("error") ||
                            iframeDoc.body.innerText.includes(
                              "preview is not available"
                            )
                          ) {
                            handleViewerError();
                          }
                        } catch (err) {
                          // Cross-origin restrictions prevent access, assume it's working
                          console.log(
                            "Cannot access iframe content due to CORS, assuming success"
                          );
                        }
                      }}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Reports;