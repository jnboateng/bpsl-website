import { useEffect } from "react";

export default function Modal({ children, onClose }) {
   

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div 
    
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      {children}
    </div>
  );
}