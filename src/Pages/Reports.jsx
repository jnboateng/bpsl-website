import React, { useState, useEffect } from "react";
import Hero from "../components/About/Hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import wire from "../images/footer vectors/wire.png";
import { getReports } from "../Api"; // Make sure this import path is correct

function Reports() {
  const [showFileModal, setShowFileModal] = useState(false);
  const [currentFileUrl, setCurrentFileUrl] = useState("");
  const [viewerError, setViewerError] = useState(false);
  const [currentViewer, setCurrentViewer] = useState("google");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reports from API
  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await getReports();
        setReports(response.data);
      } catch (err) {
        setError(err);
        console.log("Failed to fetch annual reports");
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  const sortedReports = [...reports].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 4;

  const filteredReports = sortedReports.filter(
    (report) =>
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    return url?.split(".").pop().toLowerCase();
  };

  // Function to determine if file can be previewed
  const canPreview = (url) => {
    if (!url) return false;
    const ext = getFileExtension(url);
    return ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt"].includes(
      ext
    );
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl md:text-4xl text-red-500 font-semibold">
          Error loading annual reports
        </h1>
        <button
          onClick={() => window.location.reload()}
          className="text-purple-600 underline mt-4 inline-block"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <Hero text1={"Annual Reports"} />

      {/* Header */}
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12 ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Annual Reports
        </h1>
      </div>

      <div className="mt-2 pl-2 md:pl-24 text-gray-600">
        <span className="text-center ">
          A full archive of our strategic, financial, and operational reports.
        </span>
      </div>

      {/* Search Bar */}
      <div className="mt-12 w-[90vw] md:w-92 mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between px-2 md:px-12">
          <div className="col-span-1">
            <ul>
              {filteredReports.length ? (
                currentReports.map((report) => (
                  <li
                    key={report._id || report.id}
                    className="w-full bg-white shadow-md rounded-xl p-5 my-3 transition hover:shadow-lg flex items-center justify-between"
                  >
                    {/* Left: Title & Link */}
                    <Link className="flex items-center gap-3 text-purple-700 hover:text-purple-900 font-semibold text-base transition-transform duration-300 hover:translate-x-1">
                      <ArrowRight className="w-5 h-5" />
                      <span>{report.title}</span>
                    </Link>

                    {/* Right: View Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openFileViewer(report.link)}
                        className="ml-4 px-4 py-2 cursor-pointer hover:bg-gradient-to-t bg-gradient-to-b from-purple to-purple-200 text-white text-sm font-medium rounded-md transition duration-300"
                        disabled={!report.link}
                      >
                        View
                      </button>
                      <a
                        href={report.link}
                        download
                        className="ml-4 px-4 py-2 inline-block hover:bg-gradient-to-t bg-gradient-to-b from-purple to-purple-200 text-white text-sm font-medium rounded-md transition duration-300"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 mt-4">
                  {searchTerm
                    ? "No matching reports found"
                    : "No reports available"}
                </li>
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
          <div className="col-span-1 mx-2">
            <div className="relative w-full md:w-[350px] h-[450px] p-4 rounded-xl md:mx-auto bg-gradient-to-tr from-purple-200 to-purple-300">
              <div
                className="absolute w-full h-[40vh] bottom-0 right-0 bg-no-repeat z-0 object-contain opacity-75"
                style={{
                  backgroundImage: `url(${wire})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom",
                  zIndex: 0,
                }}
              />
              <div className="bg-white md:w-28 z-10 rounded-lg text-center flex items-center justify-center p-1">
                <span className="font-light text-xs text-center">
                  Advertisement
                </span>
              </div>
              <p className="font-extralight text-white mt-12 text-lg text-left">
                Start your investment journey today—every big dream begins with
                a small step. Try investing with Best Point Savings and Loans.
                Visit our website and take that step now!
              </p>
              <div className="flex justify-center bg-purple-300 hover:bg-gray-100 mt-6  rounded-lg">
                <Link to={'/products/savings/Fixed Deposit'} className="text-center py-1 text-sm text-white px-8">
                  Apply now
                </Link>
              </div>

              <div className="flex flex-row items-center justify-start mt-20 gap-3">
                <div className="bg-white rounded-full w-16 h-16 flex flex-row items-center justify-center">
                  <span className="font-semibold">BP</span>
                </div>
                <span className="text-white font-semibold capitalize">
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
                        {currentFileUrl ? (
                          <>
                            File type: .
                            {getFileExtension(currentFileUrl).toUpperCase()}
                          </>
                        ) : (
                          "No file available"
                        )}
                      </div>
                      <div className="flex gap-2">
                        {currentFileUrl && (
                          <a
                            href={currentFileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
                          >
                            Open in New Tab
                          </a>
                        )}
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
