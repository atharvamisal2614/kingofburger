"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 h-20 bg-bg-cream sticky top-0 z-20">
      <button onClick={onMenuClick} className="p-2 -ml-2 relative z-10" aria-label="Open Menu">
        <Menu className="w-6 h-6 text-black" />
      </button>
      <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 w-full pointer-events-none">
        <div className="text-brand text-2xl font-bold tracking-tight leading-none" style={{ fontFamily: "serif" }}>
          King of Burger
        </div>
      
        <div className="flex items-center gap-1.5 mt-2.5 select-none">
          <div className="w-3 h-3 flex items-center justify-center border-2 border-green-500 rounded-sm shrink-0">
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[10px] font-extrabold text-green-500 tracking-wider uppercase">Pure Veg</span>
        </div>
      </div>
      <div className="w-6"></div> {/* Spacer to center the logo */}
    </header>
  );
}
