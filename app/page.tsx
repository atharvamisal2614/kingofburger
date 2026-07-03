"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import CategoryNav from "../components/CategoryNav";
import MenuItem from "../components/MenuItem";
import { categories, menuItems } from "../data/menu";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(categories[0].name);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Filter items based on search or category
  const displayedItems = menuItems.filter((item) => {
    if (searchQuery.trim() !== "") {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return item.category === activeCategory;
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-cream animate-splash overflow-hidden">
        <div className="flex flex-col items-center text-center px-4">
          {/* Brand Heading split vertically - Perfectly Responsive */}
          <div className="flex flex-col items-center select-none font-serif text-brand font-bold tracking-wider leading-none">
            <span className="text-5xl sm:text-6xl md:text-7xl uppercase mb-1 sm:mb-2 animate-fade-up-1">King</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lowercase italic text-gold mb-1 sm:mb-2 animate-fade-up-2">of</span>
            <span className="text-5xl sm:text-6xl md:text-7xl uppercase animate-fade-up-3">Burger</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 w-full relative">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="flex-1 bg-bg-cream flex flex-col pb-10 z-0 relative">
        <div className="pt-2">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
        
        <CategoryNav 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setSearchQuery(""); // Clear search when a category is clicked
          }}
        />

        <div className="px-4 mt-2 flex flex-col gap-4">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2 px-2">
            <div className="w-6 sm:w-8 h-px bg-gold shrink-0"></div>
            <div className="w-1.5 h-1.5 rotate-45 border border-gold shrink-0"></div>
            <h2 className="text-brand font-bold tracking-wider text-base sm:text-lg uppercase text-center break-words leading-tight">
              {searchQuery ? "Search Results" : activeCategory}
            </h2>
            <div className="w-1.5 h-1.5 rotate-45 border border-gold shrink-0"></div>
            <div className="w-6 sm:w-8 h-px bg-gold shrink-0"></div>
          </div>

          {/* Menu Items List */}
          {displayedItems.length > 0 ? (
            displayedItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              No dishes found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
