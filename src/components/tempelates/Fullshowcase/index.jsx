"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import TextHeader from "@/components/atoms/TextHeadings/Header";

const Showcase = ({ infoheader, textheader }) => {
  const smallImages = [
    { src: "/images/Insta1.jpg", alt: "Small Image 1" },
    { src: "/images/Insta2.jpg", alt: "Small Image 2" },
    { src: "/images/Insta3.jpg", alt: "Small Image 3" },
    { src: "/images/Insta4.jpg", alt: "Small Image 5" },
    { src: "/images/Insta1.jpg", alt: "Small Image 8" },
    { src: "/images/Insta2.jpg", alt: "Small Image 9" },
    { src: "/images/Insta3.jpg", alt: "Small Image 10" },
    { src: "/images/Insta4.jpg", alt: "Small Image 12" },
    { src: "/images/Insta1.jpg", alt: "Small Image 8" },
    { src: "/images/Insta2.jpg", alt: "Small Image 9" },
    { src: "/images/Insta3.jpg", alt: "Small Image 10" },
    { src: "/images/Insta4.jpg", alt: "Small Image 12" },
  ];

  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [marqueeSpeed, setMarqueeSpeed] = useState(0); // Default speed

  // Function to handle touch start and end for human scrolling
  const handleTouchStart = () => setIsMarqueePaused(true);
  const handleTouchEnd = () => setIsMarqueePaused(false);

  // Update marquee speed based on screen size
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth <= 640) {
        // Small devices
        setMarqueeSpeed(30);
      } else {
        // Larger devices
        setMarqueeSpeed(10);
      }
    };

    // Call updateSpeed on mount and whenever window is resized
    updateSpeed();
    window.addEventListener("resize", updateSpeed);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSpeed);
    };
  }, []);

  return (
    <>
      {infoheader && textheader ? (
        <div className="mb-12 max-w-7xl mx-auto my-spacer px-6">
          <div className="text-[#ac3c16] text-xs font-normal font-['Inter'] leading-[18px] tracking-tight mb-2">
            {infoheader}
          </div>
          <TextHeader
            text={textheader}
            size="small"
            specialWordsIndices="2"
            align="start"
            className=""
          />
        </div>
      ) : null}

      <div className="max-w-full mx-auto overflow-hidden">
        <div>
          <Marquee
            speed={marqueeSpeed}
            gradient={false}
            pauseOnHover
            play={!isMarqueePaused}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex">
              {smallImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group aspect-[4/4] overflow-hidden !rounded-none"
                >
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={499}
                    className="object-cover !border-none !rounded-none transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />

                  {/* Instagram Logo (static) */}
                  <div className="absolute top-4 left-4 z-10 text-white text-lg">
                    <FaInstagram className="mr-2 text-white" />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-start p-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-white text-sm ml-6 font-bold">TheHinduTourism</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-white" />
                      <p className="text-white text-sm">Nepal</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Showcase;
