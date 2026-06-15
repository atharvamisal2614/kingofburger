import { MenuItem as MenuItemType } from "../data/menu";

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
              {/* Badges removed as per request */}
            </div>
          </div>
        </div>
        
        {/* Price and Availability */}
        <div className="flex flex-col items-end gap-1 shrink-0">
          {item.variants ? (
            <div className="flex flex-col items-end gap-1">
              {item.variants.map((v, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500 font-medium">{v.name}:</span>
                  <span className="text-brand font-bold">₹{v.price}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-brand font-bold text-lg">₹{item.price}</div>
          )}
          <div className={`text-xs font-semibold mt-1 ${item.isAvailable ? "text-veg" : "text-gray-400"}`}>
            {item.isAvailable ? "Available" : "Sold Out"}
          </div>
        </div>
      </div>
    </div>
  );
}
