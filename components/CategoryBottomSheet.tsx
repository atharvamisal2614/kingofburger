"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { Category } from "../data/menu";

interface CategoryBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (categoryName: string) => void;
}

export default function CategoryBottomSheet({
  isOpen,
  onClose,
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryBottomSheetProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Bottom Sheet */}
      <div 
        className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-bg-cream rounded-t-3xl shadow-[0_-5px_25px_rgba(0,0,0,0.2)] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: '80vh' }}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-200 shrink-0">
          <div className="text-lg font-bold text-gray-900">All Categories</div>
          <button onClick={onClose} className="p-2 -mr-2 bg-gray-100 rounded-full text-gray-500 hover:text-black">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-3 gap-4 pb-10">
          {categories.map((category) => {
            const isActive = category.name === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => {
                  onSelectCategory(category.name);
                  onClose();
                }}
                className={`flex flex-col items-center gap-2 p-2 rounded-xl transition-all ${
                  isActive ? "bg-brand/10" : "hover:bg-white"
                }`}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {/* Using standard img for placeholder as next/image requires configured domains */}
                  <img 
                    src={category.image}  
                    alt={category.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image not found
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMGUwZTAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzY2NiIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
                <span className={`text-xs text-center font-medium line-clamp-2 ${isActive ? "text-brand" : "text-gray-700"}`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
