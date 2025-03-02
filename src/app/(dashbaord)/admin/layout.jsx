import React from "react";
import Sidebar from "./(components)]/sidebar";
export default function AdminLayout({ children }) {
  return (
    <div className="bg-slate-50 flex">
      {/* Sidebar should always be visible */}
      <Sidebar />

      <main className="flex-1 md:ml-64 transition-all duration-300">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-30 border-b border-slate-200 h-14"></header>

        {/* Main Content */}
        <div className="p-6 min-h-screen">{children}</div>
      </main>
    </div>
  );
}
