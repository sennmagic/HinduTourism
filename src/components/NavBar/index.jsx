'use client';

import { useState, useEffect } from 'react';
import Button from "../atoms/Button";
import Link from "next/link";
import Flag from 'react-world-flags';
import { FaCaretDown, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navMenuData = [
    { label: "PASHUPATINATH", url: "/temple/pashupatinath-temple" },
    { label: "MUKTINATH", url: "/temple/muktinath-temple" },
    { label: "MANAKAMANA", url: "/temple/manakamana-temple" },
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
      <div className="max-w-7xl mx-auto h-[98px] px-6 py-3 flex justify-between items-center">
        <div className="w-[98px] h-[74px] flex justify-center items-center">
          <Link href="/">
            <img className="w-[600px] h-[100px] cursor-pointer" src="/images/logoimage.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navMenuData.map((menu, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Link href={menu.url} className="text-[#823319] text-xs font-normal uppercase">{menu.label}</Link>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2 p-2 rounded-full">
              <Flag code={language === 'en' ? 'GB' : 'IN'} style={{ width: 30, height: 20 }} />
              <FaCaretDown className="text-xl" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 right-0 bg-white border shadow-lg rounded-md py-2">
                <button onClick={() => { changeLanguage('en'); setDropdownOpen(false); }} className="flex items-center gap-2 p-2 w-40 hover:bg-gray-100">
                  <Flag code="GB" style={{ width: 20, height: 15 }} />
                  <span>English</span>
                </button>
                <button onClick={() => { changeLanguage('hi'); setDropdownOpen(false); }} className="flex items-center gap-2 p-2 w-40 hover:bg-gray-100">
                  <Flag code="IN" style={{ width: 20, height: 15 }} />
                  <span>Hindi</span>
                </button>
              </div>
            )}
          </div>

          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:flex">
            <a href="https://wa.me/9779851354589" target="_blank" rel="noopener noreferrer">
              <Button leftIcon={"/images/whatsapp.svg"} size="medium" text="+918375094215" variant="default" />
            </a>
          </div>

          {/* WhatsApp Icon (Mobile) */}
          <div className="md:hidden">
            <a href="https://wa.me/9779851354589" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 text-3xl" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full top-[98px] left-0 right-0 px-6 py-4 flex flex-col gap-4">
          {navMenuData.map((menu, index) => (
            <Link key={index} href={menu.url} className="text-[#823319] text-sm font-medium uppercase block py-2">
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
