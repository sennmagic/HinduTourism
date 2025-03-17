"use client";
import React, { useEffect, useRef } from "react";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import useScrollSpy from "@/hooks/useScrollSpy";

const Midnavbar = ({ isMenuOpen, navItems }) => {
  const { activeSection, scrollToSection } = useScrollSpy(navItems);
  const navRef = useRef(null);
  const navListRef = useRef(null);

  // Scroll to the top of the page when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load

    if (navRef.current) {
      setTimeout(() => {
        navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  // Auto-scroll navbar when active section changes
  useEffect(() => {
    if (navListRef.current && activeSection) {
      const activeElement = document.getElementById(`nav-${activeSection}`);
      if (activeElement) {
        navListRef.current.scrollTo({
          left: activeElement.offsetLeft - navListRef.current.offsetWidth / 2 + activeElement.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeSection]);

  return (
    <nav
      ref={navRef}
      className={`fixed bottom-0 left-0 w-full bg-[#fcfaf1] shadow-md transition-all duration-300 z-50 md:sticky md:top-20 ${
        isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-4 md:py-5 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Navigation Links with Auto Scroll */}
          <ul
            ref={navListRef}
            className="flex gap-4 md:gap-12 overflow-x-auto flex-nowrap md:overflow-visible pb-2 md:pb-0 flex-1 scroll-smooth"
          >
            {navItems.map((item) => (
              <li key={item.id} id={`nav-${item.id}`} className="flex-shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`px-3 py-1 md:px-4 bg-[#fcfaf1] rounded-[20px] flex items-center justify-center text-sm md:text-[15px] font-semibold leading-snug hover:text-[#d14343] transition-colors ${
                    activeSection === item.id
                      ? "bg-[rgba(255,248,215,1)] rounded-[10px] text-[#d14343]"
                      : "text-[#252525]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="ml-auto md:ml-0 flex-shrink-0">
            <Link href="/customise-my-trip">
              <Button
                text="Customize Trip"
                variant="wholyrounded"
                size="small"
                textcolor="orange-light"
                color="orangeborder"
                bordercolor="orange-light"
                className="w-full md:w-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Midnavbar;
