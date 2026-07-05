"use client";

import { Menu, Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  searchValue: string;
  onSearchChange: (val: string) => void;
}

export default function Header({ onMenuClick, searchValue, onSearchChange }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-20 bg-bg-cream"
      style={{ paddingBottom: "10px" }}
    >
      {/* Top row: Hamburger | Brand Title | Pure Veg icon */}
      <div className="flex items-center justify-between px-4" style={{ height: "56px" }}>
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
            width: "28px",
            height: "28px",
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
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#16A34A",
            }}
          />
        </div>
      </div>

      {/* Search bar — inside header to save space */}
      <div style={{ paddingLeft: "16px", paddingRight: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "10px 14px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Search style={{ width: "16px", height: "16px", color: "#687280", flexShrink: 0 }} />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search for dishes..."
            style={{
              background: "transparent",
              outline: "none",
              width: "100%",
              fontSize: "13px",
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              color: "#1E1E1E",
              border: "none",
            }}
            className="placeholder:text-[#687280]"
          />
        </div>
      </div>
    </header>
  );
}
