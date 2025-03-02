"use client"

import React, { useState, useEffect } from 'react';
import InfoHeader from '@/components/atoms/TextHeadings/InfoHeader';
import Image from 'next/image';
import useScrollSpy from "@/hooks/useScrollSpy";

const navItems = [
  { id: 'overview', label: 'Introduction' },
  { id: 'pashupatinath', label: 'Pashupatinath Temple' },
  { id: 'muktinath', label: 'Muktinath Temple' },
  { id: 'manakamana', label: 'Manakamana Temple' },
  { id: 'final-thoughts', label: 'Final Thoughts' },
];

const Sidenavbar = () => {
    const { activeSection, scrollToSection } = useScrollSpy(navItems);



  return (
    <aside className="w-full md:w-56 space-y-9 md:sticky md:top-32 self-start">
      <div className="space-y-6">
        <InfoHeader text="CONTENTS" />

        <ul className="space-y-3">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id)
              }}
              className={`text-base cursor-pointer ${
                activeSection === item.id ? 'text-orange-light' : 'text-black'
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-3">
        {["sharelink", "facebookicon", "instaicon"].map((icon) => (
          <div
            key={icon}
            className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
          >
            <Image src={`/images/${icon}.svg`} width={20} height={20} alt={icon} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidenavbar;
