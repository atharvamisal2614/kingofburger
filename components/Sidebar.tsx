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
          <a href="https://share.google/iLhnQiKndyNz5rrpT" target="_blank" rel="noreferrer" onClick={onClose} className="flex items-center gap-4 px-6 py-3 text-gray-800 hover:bg-brand-light/30 transition-colors">
            <Star className="w-5 h-5 text-brand" />
            <span className="font-medium">Reviews</span>
          </a>
          <Link href="/contact" onClick={onClose} className="flex items-center gap-4 px-6 py-3 text-gray-800 hover:bg-brand-light/30 transition-colors">
            <Phone className="w-5 h-5 text-brand" />
            <span className="font-medium">Contact Us</span>
          </Link>
        </nav>
        
        <div className="p-4 mt-auto border-t border-gray-200 flex flex-col items-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <p className="text-xs text-center text-gray-500">
              Designed and developed by <a href="https://codefixerz.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Codefixerz</a>
            </p>
            <a href="https://wa.me/919529926673" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors" aria-label="Chat on WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
