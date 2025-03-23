'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { SiViber } from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navMenuData = [
    { label: "PASHUPATINATH", url: "/temple/pashupatinath-temple" },
    { label: "MUKTINATH", url: "/temple/muktinath-temple" },
    { label: "MANAKAMANA", url: "/temple/manakamana-temple" },
    { label: "BLOG", url: "/blogs" },
    { label: "ABOUT US", url: "/about" },
    { label: "CONTACT", url: "/contact" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fbf9f0] shadow-md">
      <div className="max-w-7xl mx-auto h-[98px] px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <img className="w-[120px] h-auto cursor-pointer" src="/images/logoimage.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navMenuData.map((menu, index) => (
            <Link 
              key={index} 
              href={menu.url} 
              className="relative text-[#823319] text-sm font-medium uppercase transition-all duration-300 ease-in-out hover:text-[#D94D1A] hover:scale-105
              after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#D94D1A] after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        {/* Contact Icons */}
        <div className="flex items-center gap-6">
          <a href="https://wa.me/918375094215" target="_blank" rel="noopener noreferrer" className="text-green-500 text-3xl transition-transform duration-300 hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="viber://chat?number=918375094215" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-3xl transition-transform duration-300 hover:scale-110">
            <SiViber />
          </a>
          
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
            <Link 
              key={index} 
              href={menu.url} 
              className="text-[#823319] text-sm font-medium uppercase block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;