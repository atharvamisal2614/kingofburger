"use client";

import { Category } from "../data/menu";
import { ChevronRight } from "lucide-react";

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export default function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
  // Take first 8 categories for the horizontal scroll
  const visibleCategories = categories.slice(0, 8);

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 px-4 bg-bg-cream sticky top-20 z-10 border-b border-gray-100">
      <div className="flex items-start gap-4">
        {visibleCategories.map((category) => {
          const isActive = category.name === activeCategory;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.name)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className={`w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center transition-all ${
                isActive ? "scale-105" : "group-hover:opacity-80"
              }`}>
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </div>
              <span className={`text-xs font-semibold whitespace-nowrap transition-colors ${
                isActive ? "text-brand" : "text-gray-600"
              }`}>
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
