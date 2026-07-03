import React from "react";
import { MenuItem as MenuItemType } from "../data/menu";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const variants = item.variants;

  return (
    <div className="bg-bg-cream border border-gold/30 rounded-xl p-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] flex gap-3 items-center relative">
      {/* Left side: Image */}
      <div className="w-[90px] h-[90px] sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
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
  );
}
