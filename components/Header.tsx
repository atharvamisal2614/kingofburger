"use client";

import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-bg-cream flex items-center justify-between px-4 h-14">
      {/* Left: Menu button */}
      <button
        onClick={onMenuClick}
        className="p-1.5 -ml-1.5 hover:opacity-70 transition-opacity"
        aria-label="Open Menu"
      >
        <Menu className="w-5 h-5 text-dark" />
      </button>

      {/* Center: Brand */}
      <h1
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "#b71c1c",
          lineHeight: 1,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        King of Burgers
      </h1>

      {/* Right: Pure Veg dot symbol only */}
      <div
        style={{
          width: "24px",
          height: "24px",
          borderRadius: "6px",
          border: "1.5px solid #16A34A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
        title="Pure Veg"
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#16A34A",
          }}
        />
      </div>
    </header>
  );
}
