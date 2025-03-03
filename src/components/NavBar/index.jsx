'use client';

import { useState, useEffect } from 'react';
import Button from "../atoms/Button";
import Link from "next/link";
import Flag from 'react-world-flags';
import { FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en'); // Default to English
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navMenuData = [
    { label: "PASHUPATINATH", url: "/temple/pashupatinath-temple" },
    { label: "MANAKAMANA", url: "/temple/manakamana-temple" },

    { label: "MUKTINATH", url: "/temple/muktinath-temple" },
    { label: "BLOG", url: "/blogs" },
    { label: "ABOUT US", url: "/about" },
    { label: "CONTACT", url: "/contact" },
  ];

  // Function to change the language
  const changeLanguage = (lang) => {
    setLanguage(lang);

    // Polling mechanism to wait for the select element
    const interval = setInterval(() => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        const select = translateElement.querySelector('select');
        if (select) {
          select.value = lang;
          const event = new Event('change', { bubbles: true });
          select.dispatchEvent(event); // Trigger the change event
          clearInterval(interval); // Stop polling once the element is found
        }
      }
    }, 100); // Check every 100ms
  };

  // Load the Google Translate script dynamically
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      console.log('Google Translate script loaded');
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi', // Add more languages if needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#fbf9f0] shadow-md">
      <div className="max-w-7xl mx-auto h-[98px] px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="w-[98px] h-[74px] flex justify-center items-center">
          <Link href="/">
            <img
              className="w-full h-full cursor-pointer"
              src="/images/Logo.svg"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex gap-12">
          {navMenuData.map((menu, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <p className="text-[#823319] text-xs font-normal font-['Inter'] uppercase leading-[18px] tracking-tight">
                <Link href={menu.url}>{menu.label}</Link>
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-4">
          <div className="md:hidden flex items-center gap-0.5">
            <img
              src="/images/whatsapp.svg"
              alt="WhatsApp"
              className="w-6 h-6"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 p-2 rounded-full"
            >
              <Flag code={language === 'en' ? 'US' : 'IN'} style={{ width: 30, height: 20 }} />
              <FaCaretDown className="text-xl" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-10 right-0 bg-white border shadow-lg rounded-md py-2">
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 w-40 hover:bg-gray-100"
                >
                  <Flag code="US" style={{ width: 20, height: 15 }} />
                  <span>English</span>
                </button>
                <button
                  onClick={() => {
                    changeLanguage('hi');
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 p-2 w-full hover:bg-gray-100"
                >
                  <Flag code="IN" style={{ width: 20, height: 15 }} />
                  <span>Hindi</span>
                </button>
              </div>
            )}
          </div>
          <div className="hidden md:flex">
          <a
            href="https://wa.me/9779851354589"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              leftIcon={"/images/whatsapp.svg"}
              size="medium"
              text="+918375094215"
              variant="default"
            />
          </a>
        </div>
        </div>
      </div>
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
};

export default Navbar;