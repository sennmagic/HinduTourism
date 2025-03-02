import React from "react";
import Button from "../atoms/Button";
import TextHeader from "../atoms/TextHeadings/Header";
import Contactinfo from "../organisms/Contactinfo";
import Image from "next/image";
import Link from "next/link";
const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "About", href: "#" },
      { name: "Pashupatinath", href: "#" },
      { name: "Muktinath", href: "#" },
      { name: "Manakamana", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Facebook", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Instagram", href: "#" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "T&C", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <>


    <div
      className="w-full max-h-[400px] bg-[#FFFBE7] flex flex-col justify-center items-center gap-5 px-6 md:py-20 lg:py-28 lg:px-20 xl:px-32 text-center"
    >
      {/* Text Header */}
      <div>
        <TextHeader 
          text="Your journey to peace starts here." 
          size="small" 
          specialWordsIndices="4" 
          className="!font-normal" 
        />
      </div>
<Link href={"/customise-my-trip"}>
<Button text="Plan it today" variant="default" />



</Link>
      {/* CTA Button */}
      
      {/* Illustration Image (Now Touching Bottom) */}
      <div className="relative w-full max-w-md h-[200px] lg:h-[250px] flex justify-center items-end top-[110px]">
        <Image
          src="/images/footerimage.svg" // Ensure the image is inside the public folder
          alt="Illustration"
     width={400}
     height={400}
          className="object-contain absolute" // Forces the image to touch the ground
        />
      </div>
    </div>
 






      <footer className="max-w-7xl mx-auto px-6">
        <div className="py-24 flex flex-wrap justify-between gap-y-6 gap-x-9 md:h-96 h-10">
          {/* Logo Section */}
          <div className="w-36 h-28 flex justify-center items-center mx-auto md:mx-0">
            <img className="w-36 h-28" src="/images/Logo.svg" alt="Logo" />
          </div>

          {/* Static Contact Details Section */}
        <Contactinfo />

          {/* Footer Links Section */}
          <div className="flex flex-col gap-14 w-full md:w-auto">
            <div className="flex flex-wrap justify-start gap-10 md:gap-28 md:px-0 px-2">
              {footerLinks.map((section, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="opacity-75 text-orange-900 text-sm font-semibold leading-tight">
                    {section.title}
                  </div>
                  {section.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="opacity-75 text-orange-900 text-xs font-normal leading-none tracking-tight cursor-pointer"
                    >
                      <p href={link.href}>{link.name}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left Section */}
              <div className="opacity-60 text-stone-800 text-xs font-normal leading-none tracking-tight">
                © 2025 TheHinduTourism.com
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <hr className="hidden md:block w-px h-4 border-none bg-slate-300" />
              </div>

              {/* Right Section */}
              <div className="opacity-60 flex items-center gap-1">
                <span className="text-stone-800 text-xs font-normal leading-none tracking-tight">
                  Crafted by:
                </span>
                <span className="text-stone-800 text-xs font-bold leading-none tracking-tight">
                  Lishnu Tech Pvt. Ltd.
                </span>
              </div>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <div className="w-14 h-14 relative mx-auto md:mx-0"></div>
        </div> 

      </footer>
    

    </>   
  );
};

export default Footer;
