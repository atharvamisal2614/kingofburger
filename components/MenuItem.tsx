import { MenuItem as MenuItemType } from "../data/menu";
import { Crown } from "lucide-react";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="bg-bg-cream border border-gold/30 rounded-xl p-4 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] flex flex-col gap-2 relative">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          {/* Veg/Non-Veg Indicator */}
          <div className={`mt-1 w-4 h-4 shrink-0 flex items-center justify-center border-2 rounded-sm ${item.isVeg ? "border-veg" : "border-nonveg"}`}>
            <div className={`w-2 h-2 rounded-full ${item.isVeg ? "bg-veg" : "bg-nonveg"}`}></div>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-lg">{item.name}</h3>
            
            {/* Badges row */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-sm">
              {item.isChefSpecial && (
                <div className="flex items-center gap-1 text-gold font-semibold text-xs">
                  <Crown className="w-4 h-4 fill-gold text-gold" />
                  <span>Chef&apos;s Special</span>
                </div>
              )}
              
              {item.isChefSpecial && item.spiceLevel && (
                <span className="text-gray-300">•</span>
              )}
              
              {item.spiceLevel && (
                <div className={`flex items-center gap-1 font-semibold text-xs ${
                  item.spiceLevel === "Spicy" ? "text-red-600" :
                  item.spiceLevel === "Medium" ? "text-orange-500" :
                  "text-green-600"
                }`}>
                  <span className="text-sm leading-none">
                    {item.spiceLevel === "Spicy" ? "🌶️🌶️" : item.spiceLevel === "Medium" ? "🌶️" : "🌿"}
                  </span>
                  <span>{item.spiceLevel}</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Price and Availability */}
        <div className="flex flex-col items-end gap-1 shrink-0">
          <div className="text-brand font-bold text-lg">₹{item.price}</div>
          <div className={`text-xs font-semibold ${item.isAvailable ? "text-veg" : "text-gray-400"}`}>
            {item.isAvailable ? "Available" : "Sold Out"}
          </div>
        </div>
      </div>
    </div>
  );
}
