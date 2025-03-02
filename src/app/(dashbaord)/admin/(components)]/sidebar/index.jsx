"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaTachometerAlt,
  FaUsers,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
  FaChartLine,
  FaBox,
  FaWallet,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("access_token"); // Remove token from cookies
    sessionStorage.removeItem("accessToken"); // Remove from session storage
    router.push("/auth/login"); // Redirect to login page
  };

  return (
    <aside
      className={`bg-slate-900 text-white w-64 p-6 fixed h-screen transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 z-50 shadow-xl`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="mb-10 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo.svg" className="h-20 w-20" alt="Logo" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AdminHub
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 flex-1">
          {[
            { icon: FaTachometerAlt, text: "Dashboard", link: "/admin" },
            { icon: FaUsers, text: "Temples", link: "/admin/customise-temple" },
            { icon: FaWallet, text: "Blog Collection", link: "/admin/customise-blogs" },
            { icon: FaChartLine, text: "Contact Form", link: "/contact-info" },
            { icon: FaBox, text: "Packages", link: "/admin/packages" },
            { icon: FaCog, text: "Settings", link: "/settings" },
          ].map(({ icon: Icon, text, link }, index) => (
            <Link
              key={index}
              href={link}
              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group border-l-4 border-transparent hover:border-blue-400"
            >
              <div className="flex items-center space-x-3">
                <Icon className="text-lg text-slate-300 group-hover:text-blue-400 transition-colors" />
                <span className="text-slate-300 group-hover:text-white font-medium">{text}</span>
              </div>
              <FaChevronRight className="text-xs text-slate-500 group-hover:text-blue-400 transition-colors" />
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="border-t border-slate-800 pt-4">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 w-full text-left"
          >
            <FaSignOutAlt className="text-slate-400" />
            <span className="text-slate-300 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
