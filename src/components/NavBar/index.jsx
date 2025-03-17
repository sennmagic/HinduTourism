'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Button from "../atoms/Button";
import { FaCaretDown, FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

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

  // Close the menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

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
            <Link 
              key={index} 
              href={menu.url} 
              className="relative text-[#823319] text-xs font-normal uppercase transition-all duration-300 ease-in-out hover:text-[#D94D1A] hover:scale-105
              after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-[#D94D1A] after:transition-all after:duration-300 after:ease-in-out hover:after:left-0 hover:after:w-full"
            >
              {menu.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* WhatsApp Button (Desktop) */}
          <div className="hidden md:flex">
            <a href="https://wa.me/918375094215" target="_blank" rel="noopener noreferrer">
              <Button leftIcon={"/images/whatsapp.svg"} size="medium" text="+918375094215" variant="default" />
            </a>
          </div>

          {/* WhatsApp Icon (Mobile) */}
          <div className="md:hidden">
            <a href="https://wa.me/918375094215" target="_blank" rel="noopener noreferrer">
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
            <Link 
              key={index} 
              href={menu.url} 
              className="text-[#823319] text-sm font-medium uppercase block py-2"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {menu.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
