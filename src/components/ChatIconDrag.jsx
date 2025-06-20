import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const ChatIcon = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 20, y: 500 });

  const phoneNumber = "233509823348";
  const defaultMessage = "Hello! I'm interested in learning more about your services.";

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      className="fixed z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      {/* WhatsApp Chat Box */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-80 bg-white rounded-lg shadow-xl p-4 border border-gray-200 text-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-gray-800">Chat with us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-lg leading-none"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 mb-4">Click below to start a WhatsApp chat with our team.</p>
          <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded transition"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Floating Chat Icon */}
      <div
        onMouseDown={handleMouseDown}
        onClick={() => !isDragging && setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg transition-transform ${
          isOpen ? "" : "hover:scale-110"
        }`}
      >
        <MessageCircle className="text-white" size={24} />
      </div>
    </div>
  );
};

export default ChatIcon;
