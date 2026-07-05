"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 py-2 bg-bg-cream">
      <div
        className="relative flex items-center px-4 py-3 gap-3"
        style={{
          background: "#FFFFFF",
          borderRadius: "14px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        }}
      >
        <Search
          className="shrink-0"
          style={{ width: "17px", height: "17px", color: "#687280" }}
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for dishes..."
          style={{
            background: "transparent",
            outline: "none",
            width: "100%",
            fontSize: "13.5px",
            fontFamily: "var(--font-poppins), sans-serif",
            fontWeight: 400,
            color: "#1E1E1E",
          }}
          className="placeholder:text-[#687280]"
        />
      </div>
    </div>
  );
}
