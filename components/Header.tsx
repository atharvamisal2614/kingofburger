"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 h-20 bg-bg-cream sticky top-0 z-20">
      <button onClick={onMenuClick} className="p-2 -ml-2" aria-label="Open Menu">
        <Menu className="w-6 h-6 text-black" />
      </button>
      <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2">
        <div className="text-brand text-2xl font-bold tracking-tight leading-none" style={{ fontFamily: "serif" }}>
          Royal Spice
        </div>
        <div className="text-[10px] font-semibold text-gray-800 tracking-wider mt-1 uppercase">
          Pure Veg Restaurant
        </div>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-4 h-px bg-gold"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-gold"></div>
          <div className="w-4 h-px bg-gold"></div>
        </div>
      </div>
      <div className="w-6"></div> {/* Spacer to center the logo */}
    </header>
  );
}
