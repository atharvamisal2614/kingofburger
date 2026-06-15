"use client";

import { X, Info, Star, Phone, FileText } from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-bg-cream z-50 transform transition-all duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full shadow-none"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
          <div className="text-xl font-bold text-brand" style={{ fontFamily: "serif" }}>King of Burger</div>
          <button onClick={onClose} className="p-2 -mr-2 text-gray-500 hover:text-black">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 py-4 flex flex-col gap-2">
          <Link href="/about" onClick={onClose} className="flex items-center gap-4 px-6 py-3 text-gray-800 hover:bg-brand-light/30 transition-colors">
            <Info className="w-5 h-5 text-brand" />
            <span className="font-medium">About Restaurant</span>
          </Link>
          <a href="https://google.com" target="_blank" rel="noreferrer" onClick={onClose} className="flex items-center gap-4 px-6 py-3 text-gray-800 hover:bg-brand-light/30 transition-colors">
            <Star className="w-5 h-5 text-brand" />
            <span className="font-medium">Reviews</span>
          </a>
          <Link href="/contact" onClick={onClose} className="flex items-center gap-4 px-6 py-3 text-gray-800 hover:bg-brand-light/30 transition-colors">
            <Phone className="w-5 h-5 text-brand" />
            <span className="font-medium">Contact Us</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
