'use client';

import { useState, useEffect } from 'react';
import Button from "../atoms/Button";
import Link from "next/link";
import Flag from 'react-world-flags';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navMenuData = [
    { label: "MANAKAMANA", url: "/temple/manakamana-temple" },
    { label: "PASHUPATINATH", url: "/temple/pashupatinath-temple" },
    { label: "MUKTINATH", url: "/temple/muktinath-temple" },
    { label: "BLOG", url: "/blogs" },
    { label: "ABOUT US", url: "/about" },
    { label: "CONTACT", url: "/contact" },
  ];

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const interval = setInterval(() => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        const select = translateElement.querySelector('select');
        if (select) {
          select.value = lang;
          const event = new Event('change', { bubbles: true });
          select.dispatchEvent(event);
          clearInterval(interval);
        }
      }
    }, 100);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        },
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-[#fbf9f0] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <Link href="/">
            <img className="w-[98px] h-[74px] cursor-pointer" src="/images/Logo.svg" alt="Logo" />
          </Link>
        </div>

        <div className="hidden md:flex gap-12">
          {navMenuData.map((menu, index) => (
            <Link key={index} href={menu.url} className="text-[#823319] text-xs font-normal uppercase tracking-tight">
              {menu.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 p-2 rounded-full">
              <Flag code={language === 'en' ? 'US' : 'IN'} style={{ width: 30, height: 20 }} />
              <FaCaretDown className="text-xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 right-0 bg-white border shadow-lg rounded-md py-2 w-40">
                <button onClick={() => { changeLanguage('en'); setDropdownOpen(false); }} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                  <Flag code="US" style={{ width: 20, height: 15 }} />
                  <span>English</span>
                </button>
                <button onClick={() => { changeLanguage('hi'); setDropdownOpen(false); }} className="flex items-center gap-2 p-2 hover:bg-gray-100">
                  <Flag code="IN" style={{ width: 20, height: 15 }} />
                  <span>Hindi</span>
                </button>
              </div>
            )}
          </div>

          {/* WhatsApp Number (Desktop) */}
          <a href="tel:+9779812345678" className="hidden md:block">
            <Button leftIcon="/images/whatsapp.svg" size="medium" text="+9779812345678" variant="default" />
          </a>

          {/* WhatsApp Icon (Mobile) */}
          <a href="tel:+9779812345678" className="block md:hidden">
            <img src="/images/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
          </a>

          {/* Hamburger Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center space-y-6 p-6 transition-transform transform duration-300">
          <div className="w-full flex justify-end">
            <button onClick={() => setIsMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>
          <Link href="/">
            <img className="w-[98px] h-[74px] mb-4" src="/images/Logo.svg" alt="Logo" />
          </Link>
          {navMenuData.map((menu, index) => (
            <Link key={index} href={menu.url} className="text-[#823319] text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              {menu.label}
            </Link>
          ))}
        </div>
      )}

      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
};

export default Navbar;