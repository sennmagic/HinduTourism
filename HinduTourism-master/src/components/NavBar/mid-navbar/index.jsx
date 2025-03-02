"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import useScrollSpy from "@/hooks/useScrollSpy";

const Midnavbar = ({ isMenuOpen, navItems }) => {
  const { activeSection, scrollToSection } = useScrollSpy(navItems);

  return (
    <nav
      className={`sticky top-20 left-0 w-full bg-[#fcfaf1] shadow-md transition-all duration-300 z-50 ${
        isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto py-3 px-4 md:py-5 md:px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <ul className="flex gap-4 md:gap-12 overflow-x-auto flex-nowrap md:overflow-visible pb-2 md:pb-0">
            {navItems.map((item) => (
              <li key={item.id} className="flex-shrink-0">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id)
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

          <div className="hidden md:block">
            <Link href={"/customise-my-trip"}>
              <Button
                text="Customize Trip"
                variant="wholyrounded"
                size="small"
                textcolor="orange-light"
                color="orangeborder"
                bordercolor="orange-light"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Midnavbar;
