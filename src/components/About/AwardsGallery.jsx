import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { awards } from "./Awards";
import { useParams } from "react-router-dom";
import UndoButton from "../UndoButton";

export default function AwardsGallery() {
  const { id } = useParams();
  const [selectedId, setSelectedId] = useState(id || 0);
  const [selectedAward, setSelectedAward] = useState(awards[id] || awards[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    setSelectedAward(
      awards.find((award) => award.id === parseInt(selectedId)) || awards[0]
    );
  }, [selectedId, awards]);

  const handleSelect = (award) => {
    // For mobile: toggle expanded state
    if (window.innerWidth < 768) {
      setMobileExpanded(mobileExpanded === award.id ? null : award.id);
      return;
    }

    // For desktop: handle selection and animation
    if (award.id === selectedAward.id || isAnimating) return;
    setDirection(award.id > selectedAward.id ? -1 : -1);
    setIsAnimating(true);
    setSelectedId(award.id);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start mt-12">
        <div className="bg-purple h-8 w-12 mb-2" />
        <>
          <UndoButton />
          <div className="hidden md:block">
            <h1 className="text-xl md:text-3xl font-bold text-purple-200 leading-tight">
              {selectedAward.title}
            </h1>
            <div className="mt-2">
              <span className="text-xs md:text-lg">{selectedAward.excerpt}</span>
            </div>
          </div>
        </>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6">
        {/* Main Image Container - Only visible on desktop */}
        <div className="relative w-full md:w-3/4 lg:w-4/5 h-96 md:h-[500px] bg-gray-100 rounded-xl overflow-hidden hidden md:block">
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={selectedAward.id}
              custom={direction}
              initial={(direction) => ({
                x: direction * 300,
                opacity: 0,
              })}
              animate={{
                x: 0,
                opacity: 1,
              }}
              exit={(direction) => ({
                x: direction * -300,
                opacity: 0,
              })}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="w-full h-full object-contain p-4"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Grid of awards - Full width on mobile, sidebar on far right for desktop */}
        <div className="w-full md:w-1/4 lg:w-1/5 max-h-full md:max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {awards.map((award) => (
              <div key={award.id} className="relative">
                <motion.div
                  onClick={() => handleSelect(award)}
                  className={`
                    w-full aspect-square rounded-md overflow-hidden cursor-pointer
                    ${
                      selectedAward.id === award.id
                        ? "md:opacity-70"
                        : "opacity-100"
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Mobile-only overlay - shows when tapped */}
                {mobileExpanded === award.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 md:hidden"
                  >
                    <h3 className="text-xs font-bold">{award.title}</h3>
                    {award.description && (
                      <p className="text-xs mt-1">{award.description}</p>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
