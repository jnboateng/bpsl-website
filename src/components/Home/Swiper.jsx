import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SwipeButton = ({ link, textBtn }) => {
  const navigate = useNavigate();
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(230); // Default fallback

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current;
      const trackWidth = track.offsetWidth;
      const handleWidth = 56;
      setMaxX(trackWidth - handleWidth);
    }
  }, []);

  const bgOpacity = useTransform(x, [0, maxX], [0.6, 1]);

  const handleDragEnd = (_, info) => {
    if (info.point.x - info.offset.x >= maxX - 10) {
      navigate(link); // Redirect on successful swipe

      // Optional: Reset after a delay
      setTimeout(() => {
        animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
      }, 600);
    } else {
      // Not far enough: reset
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <div className="w-full flex justify-start mt-10 sm:mt-16">
      <div
        ref={trackRef}
        className="relative w-full max-w-[280px] h-16 bg-purple-200 rounded-full overflow-hidden select-none"
      >
        {/* Label Text */}
        <motion.div className="absolute inset-0 text-base sm:text-lg capitalize flex items-center justify-center text-white font-normal">
          {textBtn}
        </motion.div>

        {/* Draggable handle */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: maxX }}
          dragElastic={0.05}
          style={{ x }}
          onDragEnd={handleDragEnd}
          className="w-14 h-14 bg-gradient-to-b from-purple to-purple-200 rounded-full absolute top-1 left-1 z-10 cursor-grab active:cursor-grabbing shadow-md flex items-center justify-center text-white font-bold"
          whileTap={{ scale: 0.95 }}
        >
          →
        </motion.div>
      </div>
    </div>
  );
};

export default SwipeButton;
