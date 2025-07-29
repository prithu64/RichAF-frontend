import { useEffect } from "react";

const HowItWorksModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6 md:px-10 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl text-white animate-fade-in"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white text-xl hover:text-red-400 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">How it Works</h2>

        <ul className="space-y-3 text-sm sm:text-base text-white/90">
            <li>1. Create your RichAF profile — cool name required.</li>
            <li>2. Pick your balance (yes, you decide how rich you are).</li>
            <li>3. Stay secure — no scams, no drama.</li>
            <li>4. Flaunt your fake fortune. Send money. Rule the world.</li>
        </ul>
        <p className="mt-4 text-xs sm:text-sm text-white/60 italic text-center">
            ⚠️ May cause delusion. Use wisely.
       </p>

      </div>
    </div>
  );
};

export default HowItWorksModal;
