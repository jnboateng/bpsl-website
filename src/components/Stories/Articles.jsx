import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { 
  getArticles,
  getGalleryItems
} from "../../Api";
import { toast } from "react-toastify";

const categories = ["Articles", "Gallery"];

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Articles");
  const [activeMobileCategory, setActiveMobileCategory] = useState("Articles");
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch both articles and gallery items
        const [articlesRes, galleryRes] = await Promise.all([
          getArticles(),
          getGalleryItems()
        ]);

        // Combine and transform the data
        const combinedData = [
          ...(articlesRes.data?.map(article => ({
            ...article,
            category: "Articles",
            images: article.image ? [article.image] : []
          }))) || [],
          ...(galleryRes.data?.map(gallery => ({
            ...gallery,
            category: "Gallery",
            images: gallery.images || []
          }))) || []
        ];

        setArticles(combinedData);
      } catch (error) {
        toast.error('Failed to fetch content');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredArticles = selectedCategory === "Gallery"
    ? articles.filter(article => article.category === "Gallery")
    : articles.filter(article => article.category === "Articles");

  const getArticlesByCategory = (cat) => {
    if (cat === "Gallery") return articles.filter(article => article.category === "Gallery");
    if (cat === "Articles") return articles.filter(article => article.category === "Articles");
    return articles;
  };

  const openGalleryModal = (galleryItem, index = 0) => {
    setSelectedGallery(galleryItem);
    setSelectedImageIndex(index);
  };

  const closeGalleryModal = () => {
    setSelectedGallery(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex(prev =>
      prev < selectedGallery.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setSelectedImageIndex(prev =>
      prev > 0 ? prev - 1 : selectedGallery.images.length - 1
    );
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    }
  
    if (touchStart - touchEnd < -50) {
      prevImage();
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  return (
    <div id="articles" className="min-h-screen mt-16">
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-xl md:text-4xl font-semibold text-gray-800 leading-tight">
          Our Articles & Gallery
        </h1>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 pb-10">
        <h2 className="text-gray-800 hidden text-lg md:text-xl font-bold mb-4">Browse By:</h2>

        <div className="flex space-x-4 overflow-x-auto pb-2 justify-center mt-4 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveMobileCategory(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap border transition-all text-sm font-medium ${
                activeMobileCategory === cat
                  ? "bg-purple-100 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeMobileCategory && (
          <div className="mt-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6">
              {getArticlesByCategory(activeMobileCategory).length > 0 ? (
                getArticlesByCategory(activeMobileCategory).map((article) => (
                  <div
                    key={article.id}
                    className="w-72 flex-shrink-0 rounded-xl bg-white shadow-md p-4"
                  >
                    {article.category === "Gallery" ? (
                      <>
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {article.images.slice(0, 4).map((img, idx) => (
                            <div
                              key={idx}
                              className="cursor-pointer relative"
                              onClick={() => openGalleryModal(article, idx)}
                            >
                              <img
                                src={img}
                                alt={`${article.title} ${idx + 1}`}
                                className="w-full h-24 object-cover rounded-md"
                              />
                              {idx === 3 && article.images.length > 4 && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                                  <span className="text-white font-bold text-xs">
                                    +{article.images.length - 4}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => openGalleryModal(article)}
                          className="text-xs text-purple-100 font-semibold mb-2"
                        >
                          View all images
                        </button>
                      </>
                    ) : (
                      <img
                        src={article.images[0]}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-md mb-3"
                      />
                    )}
                    
                    <span className="bg-purple text-white text-xs font-medium px-3 py-1 rounded-md mb-2 inline-block">
                      {article.category}
                    </span>
                    <h3 className="text-base text-gray-800 font-semibold mb-1">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                      {article.excerpt || article.description}
                    </p>
                    {article.category === "Gallery" ? (
                      <button
                        onClick={() => openGalleryModal(article)}
                        className="bg-gradient-to-r from-purple-200 to-purple-100 text-white text-xs font-semibold px-3 py-2 rounded-md w-full"
                      >
                        View Gallery
                      </button>
                    ) : (
                      <Link
                        to={`/news/${article.id}`}
                        className="bg-gradient-to-r from-purple-200 to-purple-100 text-white text-xs font-semibold px-3 py-2 rounded-md inline-block"
                      >
                        Read More
                      </Link>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 p-4">No {activeMobileCategory.toLowerCase()} found</div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row px-20 py-12 gap-10">
        <aside className="md:w-1/4">
          <h2 className="text-gray-800 text-2xl font-bold mb-6">Browse By:</h2>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-2 rounded-3xl ${
                  selectedCategory === cat
                    ? "bg-purple bg-opacity-10 text-gray-800 font-bold"
                    : "hover:bg-purple-50"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 space-y-6 overflow-y-scroll h-[calc(100vh-200px)] pr-4">
          {filteredArticles.length > 0 ? (
            selectedCategory === "Gallery" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-purple-100 mb-4">
                        {article.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {article.images.slice(0, 4).map((img, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer relative group"
                            onClick={() => openGalleryModal(article, idx)}
                          >
                            <img
                              src={img}
                              alt={`${article.title} ${idx + 1}`}
                              className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                            />
                            {idx === 3 && article.images.length > 4 && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                                <span className="text-white font-bold">
                                  +{article.images.length - 4}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-extralight mb-2">
                        {article.excerpt || article.description}
                      </p>
                      <button
                        onClick={() => openGalleryModal(article)}
                        className="text-sm text-purple-100 font-semibold hover:underline"
                      >
                        View all images →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-24">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative group">
                      <img
                        src={article.images[0]}
                        alt={article.title}
                        className="w-full h-64 object-cover shadow-md rounded-t-3xl transition-transform duration-300 transform group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-purple-100 text-white text-xs font-semibold px-2 py-1 rounded">
                        {article.category}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-purple-100 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-sm font-extralight mb-2">
                        {article.excerpt || article.description}
                      </p>
                      <Link
                        to={`/news/${article.id}`}
                        className="text-sm text-purple-100 font-semibold hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-gray-500 p-4">No {selectedCategory.toLowerCase()} found</div>
          )}
        </main>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <Modal onClose={closeGalleryModal}>
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-y-scroll"
          >
            <button
              onClick={closeGalleryModal}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-[40vh] md:h-[80vh]">
              <img
                src={selectedGallery.images[selectedImageIndex]}
                alt={`${selectedGallery.title} ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
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
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
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
            </div>

            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-purple-100 mb-2">
                {selectedGallery.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedGallery.excerpt || selectedGallery.description}</p>

              <div className="flex overflow-x-auto space-x-2 py-2">
                {selectedGallery.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      selectedImageIndex === idx ? "ring-2 ring-purple-100" : ""
                    }`}
                    onClick={() => setSelectedImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}