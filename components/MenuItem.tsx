"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { MenuItem as MenuItemType } from "../data/menu";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const variants = item.variants;

  return (
    <>
      <div className="bg-bg-cream border border-gold/30 rounded-xl p-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] flex gap-3 items-center relative">
        {/* Left side: Image */}
        <div 
          onClick={() => setIsEnlarged(true)}
          className="w-[90px] h-[90px] sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative cursor-pointer hover:opacity-95 transition-opacity group"
        >
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Neat fallback svg placeholder if image has not been uploaded yet
              e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F4EFE6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23C0A060'>No Image</text></svg>";
            }}
          />
        </div>

        {/* Right side: Content & Price */}
        <div className="flex-1 flex justify-between items-center gap-4">
          {/* Text Content */}
          <div className="flex-1 flex flex-col pt-1.5">
            <div className="flex gap-2 items-start">
              <div className="flex flex-col">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight">{item.name}</h3>
              </div>
            </div>

            {/* Description - always visible, gray text */}
            {item.description && (
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>

          {/* Price - Centered vertically on the right */}
          <div className="flex-shrink-0 flex items-center justify-center min-w-[60px] text-right">
            {variants && variants.length > 0 ? (
              <div className="flex flex-col items-end gap-1">
                {variants.map((v, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-500 font-medium">{v.name}:</span>
                    <span className="text-brand font-bold">₹{v.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-brand font-bold text-base sm:text-lg">₹{item.price ?? 0}</div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox / Enlarged Image Modal */}
      {isEnlarged && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setIsEnlarged(false)}
        >
          {/* Close button at the top-right corner of screen */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsEnlarged(false);
            }}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 hover:bg-black/70 rounded-full focus:outline-none"
            aria-label="Close image"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div 
            className="relative max-w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23F4EFE6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='10' fill='%23C0A060'>No Image</text></svg>";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
