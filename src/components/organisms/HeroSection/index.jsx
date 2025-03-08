"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["Namaskar!", "Vanakkam!", "Jay Shree Krishna!", "Pranam!"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Hero Text Section */}
      <div className="text-center pt-[40px]">
        <div className="relative h-[60px] overflow-hidden mb-6">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute font-[Qasira] top-0 left-0 w-full text-[36px] sm:text-[18px] md:text-[48px] leading-[72px] font-semibold text-orange-light"
            >
              {texts[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <span className="text-[20px] sm:text-[30px] md:text-[40px] leading-[48px] text-gray-700 tracking-[-0.5px] text-center font-thin">
  Explore the{" "}
  <em className="font-thin italic relative inline-block">
    <span className="relative text-gray-600 before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[1px] before:bg-gradient-to-r before:from-orange-500 before:via-orange-400 before:to-orange-300">
      holy sanctuaries
    </span>
  </em>{" "}
  in Nepal
</span>

      </div>

      {/* Spacing between Hero Text and Image */}
      <div className="mt-[40px]"></div>

      {/* Hero Image Section with Shadow Gradient */}
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <Image
          src="/images/heroimage1.svg"
          alt="Hero Banner"
          layout="responsive"
          width={10}
          height={200}
          className="object-cover w-full h-auto"
          priority
        />
        
        {/* Bottom Shadow Effect */}
        
      </div>

      {/* Spacing between Image and Temples */}
      <div className="mt-[32px]"></div>
    </div>
  );
};

export default HeroSection;
