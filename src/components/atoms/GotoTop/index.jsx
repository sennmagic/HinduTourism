'use client';
import { useState, useEffect } from 'react';
import React from 'react';

const GoToTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect mobile screens
    };

    const handleScroll = () => {
      setShowGoToTop(window.scrollY > 300);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    handleResize(); // Check on mount

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showGoToTop && (
        <>
          {/* Desktop Go To Top Button */}
          {!isMobile && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-10 bg-red-900 text-white p-3 rounded-full shadow-xl hover:bg-red-500 transition-opacity duration-300 opacity-100 z-50 animate-fadeIn"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-full shadow-md border border-orange-600">
                <img src="/images/arrowup.svg" className="w-6 h-6 rotate-0" alt="Scroll to Top" />
              </div>
            </button>
          )}

          {/* Mobile WhatsApp Floating Button */}
          {isMobile && (
            <a
              href="https://wa.me/9779851354589" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 bg-green-500 p-3 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 z-50 animate-bounce"
            >
              <img src="/images/whatsapp.svg" className="w-12 h-12" alt="Chat on WhatsApp" />
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default GoToTop;
