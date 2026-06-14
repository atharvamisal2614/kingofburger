"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="px-4 py-2 bg-bg-cream">
      <div className="relative flex items-center bg-white rounded-lg shadow-sm border border-gray-100 px-3 py-2">
        <Search className="w-5 h-5 text-gray-400 shrink-0" />
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for dishes..."
          className="ml-2 bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400 font-medium"
        />
      </div>
    </div>
  );
}
