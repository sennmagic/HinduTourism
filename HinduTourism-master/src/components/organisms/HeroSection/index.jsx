"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Breadcrumb from "@/components/atoms/BreadCrumb";
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false); // State to track hover

  const texts = ["Namaskar!", "Vanakkam!", "Jay Shree krishna!", "Pranam!"];

  // Function to handle text cycling
  const cycleText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const timer = setInterval(cycleText, 2000); // Slower interval (2 seconds)
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    
    
    <div className="relative w-full h-full ">
      {/* Hero Text Section */}
      <div className="text-center pt-[40px]">
        <div className="relative h-[60px] overflow-hidden mb-6"> {/* Added mb-6 here */}
          
          <AnimatePresence>
            {/* Current Text Animation */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.9 }} // Start with a slight vertical movement downwards
              animate={{
                opacity: 1,
                y: 0, // Slide to normal position
                scale: 1, // Scale up to normal size
              }}
              exit={{ opacity: 0, y: -20, scale: 0.9 }} // Slide out upwards with a scale-down effect
              transition={{
                duration: 1, // Slower duration for a smooth effect (1 second)
                ease: "easeInOut", // Smooth easing
              }}
              className="absolute font-[Qasira] top-0 left-0 w-full text-[36px] sm:text-[18px] md:text-[48px] leading-[72px] font-semibold text-orange-light"
            >
              {texts[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Explore Text */}
        <span className="text-[20px] sm:text-[30px] md:text-[40px] leading-[48px] text-gray-700  tracking-[-1px] text-center font-light ">
          Explore the{" "}
          <em className="  font-light italic  relative inline-block">
            <span className="">holy sanctuaries </span>
            <div
  style={{
    height: "0px",
    border: "1px #F05A28 solid",
  }}
  className="w-[120px] sm:w-[100px] md:w-[250px] lg:w-[281px]"
></div>

          </em>{" "}
          in Nepal
      </span>
      </div>

      {/* Spacing between Hero Text and Image */}
      <div className="mt-[40px]"></div>

      {/* Hero Image Section with Hover Effect */}
      <div className="relative ">
        <motion.div
          className="relative"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Default Hero Image */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{
              duration: 0.3, // Slightly slower hover transition (0.3 seconds)
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/updatedhero4.svg"
              alt="Hero Banner"
              layout="responsive"
              width={10}
              height={200}
              className="object-cover w-full h-auto"
              priority

            />
          </motion.div>

          {/* Hover Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}  
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{
              duration: 0.6, // Slightly slower hover transition (0.6 seconds)
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/updatedhero3.svg"
              alt="Hero Banner"
              layout="responsive"
              width={10}
              height={200}
              className="object-cover w-full h-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Bottom  */}
      
      </div>

      {/* Spacing between Image and Temples */}
      <div className="mt-[32px]"></div>

      {/* Placeholder for Temple Overlay Images */}
      <div className="w-full flex justify-center gap-[32px] z-[10] relative">
        {/* Add temple images or content here */}
      </div>
    </div>
    </>
  );
};

export default HeroSection;