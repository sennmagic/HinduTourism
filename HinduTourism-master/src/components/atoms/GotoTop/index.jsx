'use client'; 
import { useState, useEffect } from 'react'; 
import React from 'react';

const GoToTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
      setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className={`max-w-7xl mx-auto fixed bottom-8 right-10 bg-red-900 text-white p-3 rounded-full shadow-xl hover:bg-red-500 transition-opacity duration-300 ${showGoToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-50`}
        >
          <div className="w-12 h-12 absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-orange-50 rounded-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.25)] border border-orange-600">
            <img
              src="/images/arrowup.svg"
              className="w-6 h-6 absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rotate-30"
              alt="Scroll to Top"
            />
          </div>
        </button>
      )}
    </div>
  );
}

export default GoToTop;
