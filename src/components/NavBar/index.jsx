"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { SiViber } from "react-icons/si";
import { MdPhone, MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navMenuData = [
    { label: "PASHUPATINATH", url: "/temple/pashupatinath-temple" },
    { label: "MUKTINATH", url: "/temple/muktinath-temple" },
    { label: "MANAKAMANA", url: "/temple/manakamana-temple" },
    { label: "BLOG", url: "/blogs" },
    { label: "ABOUT US", url: "/about" },
    { label: "Book Your Trip", url: "/contact" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-orange-light text-white text-sm px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 relative">
          {/* Left: Contact Info */}
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-1">
              <MdPhone className="text-lg" />
              <a href="tel:+918375094215" className="hover:underline">
                +91 83750 94215
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="text-lg" />
              <a href="mailto:info@example.com" className="hover:underline">
                info@thehindutourism.com
              </a>
            </div>
          </div>

          {/* Center: SACRED NEPAL */}
          <div className="absolute left-1/2 transform -translate-x-1/2 font-italic tracking-wide text-sm hidden md:block">
            SACRED NEPAL AWAITS YOU
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            Contact us :
            <a
              href="https://wa.me/918375094215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:scale-110 transition-transform"
            >
              <FaWhatsapp />
            </a>
            <a
              href="viber://chat?number=918375094215"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:scale-110 transition-transform"
            >
              <SiViber />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-[#fbf9f0] shadow-md">
        <div className="max-w-7xl mx-auto h-[98px] px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img
                className="w-[120px] h-auto cursor-pointer"
                src="/images/logoimage.png"
                alt="Logo"
              />
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

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <button onClick={handleMenuToggle} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 z-40"
              onClick={handleCloseMenu}
            ></div>
            <div className="md:hidden bg-white shadow-lg absolute w-full top-[98px] left-0 right-0 px-6 py-4 flex flex-col gap-4 z-50">
              {navMenuData.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.url}
                  className="text-[#823319] text-sm font-medium uppercase block py-2"
                  onClick={handleCloseMenu}
                >
                  {menu.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
