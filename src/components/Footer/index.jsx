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
      { name: "About", href: "/about" },
      { name: "Pashupatinath", href: "/temple/pashupatinath-temple" },
      { name: "Muktinath", href: "/temple/muktinath-temple" },
      { name: "Manakamana", href: "/temple/manakamana-temple" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/share/1BYpz3GZ9G/?mibextid=wwXIfr",
      },
      { name: "Twitter", href: "https://x.com/thehindutourism" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/thehindutourism/about/?viewAsMember=true",
      },
      { name: "Instagram", href: "https://www.instagram.com/thehindutourism/" },
    ],
  },
  {
    title: "More",
    links: [
      { name: "T&C", href: "/terms-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#fffbe7] md:pt-20 pt-10 px-10 flex flex-col items-center gap-6">
        <div>
          <TextHeader
            text="Your journey to peace starts here."
            size="small"
            specialWordsIndices="5"
            className="!font-normal"
          />
        </div>
        <Link href="/customise-my-trip">
          <Button text="Plan it today" variant="default" />
        </Link>

        <img
          className="w-[474px] h-[107px]"
          src="/images/footerimage.svg"
          alt="Placeholder"
        />
      </div>

      {/* Footer Section */}
      <footer className="max-w-7xl mx-auto px-6">
        <div className="md:py-24 py-0 flex flex-wrap justify-between gap-y-6 gap-x-9 md:h-96 md:h-10 h-4">
          {/* Logo Section */}
          <div className="w-36 h-28 flex justify-center items-center mx-auto md:mx-0">
            <img className="w-32 h-30" src="/images/logoimage.png" alt="Logo" />
          </div>

          {/* Contact Info */}
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
                      {link.href.startsWith("http") ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.name}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.name}</Link>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="opacity-60 text-stone-800 text-xs font-normal leading-none tracking-tight">
                © 2025 TheHinduTourism.com
              </div>

              <div className="flex items-center justify-center">
                <hr className="hidden md:block w-px h-4 border-none bg-slate-300" />
              </div>

              <div className="opacity-60 flex items-center gap-1">
                <span className="text-stone-800 text-xs font-normal leading-none tracking-tight">
                  Crafted by:
                </span>
                <span className="text-stone-800 text-xs font-bold leading-none tracking-tight">
                  <a href="https://lishnutech.com/">Lishnu Tech Pvt. Ltd.</a>
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
