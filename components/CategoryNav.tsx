"use client";

import { Category } from "../data/menu";

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

function getCategoryIcon(name: string, isActive: boolean) {
  const strokeColor = isActive ? "#FFFFFF" : "#D4AF37"; // White if active, Gold if inactive

  switch (name) {
    case "Burger":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 11c0-4 3.5-7 9-7s9 3 9 7" />
          <path d="M2 13.5c1-1 2 0 3-1s2 1 3 0 2 1 3 0 2 1 3 0 2 1 3 0 2-1 3 0" />
          <path d="M3 16.5h18" />
          <path d="M4 20h16c0 0 .5-3-1-3.5H5c-1.5.5-1 3.5-1 3.5z" />
        </svg>
      );
    case "Pizza":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M15 3L3 15c0 0 4 6 9 6s9-6 9-6L15 3z" />
          <path d="M11.5 12h.01" strokeWidth="3" stroke={strokeColor} />
          <path d="M14.5 16h.01" strokeWidth="3" stroke={strokeColor} />
          <path d="M9 16.5h.01" strokeWidth="3" stroke={strokeColor} />
          <path d="M14 9.5h.01" strokeWidth="3" stroke={strokeColor} />
        </svg>
      );
    case "Sandwich":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 11L12 4l9 7" />
          <path d="M3 15l9 7 9-7" />
          <path d="M2 11h20v4H2z" />
        </svg>
      );
    case "Grilled Sandwich":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 3l10 18" />
          <path d="M12 3l9 16.2" />
          <path d="M3 4.8L12.2 21" />
        </svg>
      );
    case "French Fries":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M5 11l2 10h10l2-10" />
          <path d="M5 11c0 0 3 2 7 2s7-2 7-2" />
          <path d="M8 4v7" />
          <path d="M11 2v9" />
          <path d="M14 3v8" />
          <path d="M17 5v6" />
        </svg>
      );
    case "Chaat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M3 14c0 4 4.5 6 9 6s9-2 9-6H3z" />
          <path d="M6 10c0-2 2-3 2-3" />
          <path d="M12 10c0-2-1-3-1-3" />
          <path d="M18 10c0-2-2-3-2-3" />
          <path d="M21 7l-5-5" />
        </svg>
      );
    case "Milkshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M6 8h12l-2 13H8L6 8z" />
          <path d="M5 8c0-3 3-4 7-4s7 1 7 4" />
          <path d="M15 2L12 8" />
        </svg>
      );
    case "Bread Pizza":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M4 11h16" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="8" cy="8" r="1" fill={strokeColor} stroke="none" />
          <circle cx="15" cy="8" r="1" fill={strokeColor} stroke="none" />
          <circle cx="11" cy="15" r="1" fill={strokeColor} stroke="none" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      );
  }
}

export default function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
  // Take first 8 categories for the horizontal scroll
  const visibleCategories = categories.slice(0, 8);

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2.5 px-4 bg-bg-cream">
      <div className="flex items-center gap-3">
        {visibleCategories.map((category) => {
          const isActive = category.name === activeCategory;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className="shrink-0 focus:outline-none"
              style={{
                width: "66px",
                height: "82px",
                borderRadius: "10px", // Less rounded as requested (was 14px/20px)
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "all 0.22s ease",
                background: isActive ? "#b71c1c" : "#FFFFFF",
                boxShadow: isActive ? "none" : "0 2px 8px rgba(0,0,0,0.05)", // No shadow on active
                border: isActive ? "1px solid #b71c1c" : "1px solid #F4ECE3",
                cursor: "pointer",
              }}
            >
              {/* Icon inside card */}
              <div className="flex items-center justify-center shrink-0">
                {getCategoryIcon(category.name, isActive)}
              </div>

              {/* Label inside card */}
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#FFFFFF" : "#687280",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  textAlign: "center",
                  maxWidth: "58px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
