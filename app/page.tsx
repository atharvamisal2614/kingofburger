"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import CategoryNav from "../components/CategoryNav";
import PromoCarousel from "../components/PromoCarousel";
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
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

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
          <div className="flex flex-col items-center select-none font-serif text-brand font-bold tracking-wider leading-none">
            <span className="text-5xl sm:text-6xl md:text-7xl uppercase mb-1 sm:mb-2 animate-fade-up-1">King</span>
            <span className="text-2xl sm:text-3xl md:text-4xl lowercase italic text-gold mb-1 sm:mb-2 animate-fade-up-2">of</span>
            <span className="text-5xl sm:text-6xl md:text-7xl uppercase animate-fade-up-3">Burgers</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-fade-up-4">
          <p className="text-xs font-normal" style={{ fontFamily: "var(--font-poppins), sans-serif", color: "#000000" }}>
            Estd. 2021
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 w-full relative">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="flex-1 bg-bg-cream flex flex-col pb-10 z-0 relative">
        {/* 1. Carousel Card at the Top */}
        <PromoCarousel />

        {/* 2. Search Bar */}
        <SearchBar value={searchQuery} onChange={(val) => {
          setSearchQuery(val);
          if (val.trim()) {
            setActiveCategory(categories[0].name);
          }
        }} />

        {/* 3. Categories Menu */}
        <CategoryNav
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={(category) => {
            setActiveCategory(category);
            setSearchQuery(""); // Clear search when a category is clicked
          }}
        />

        {/* 4. Section Header with minimal spacing */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px 20px 8px",
        }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #D4AF37)" }} />
          <h2 style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "15px",
            fontWeight: 700,
            color: "#b71c1c",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            lineHeight: 1,
            whiteSpace: "nowrap",
            margin: 0,
          }}>
            {searchQuery ? "Search Results" : activeCategory}
          </h2>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #D4AF37)" }} />
        </div>

        {/* 5. Menu Items */}
        <div style={{ paddingLeft: "16px", paddingRight: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
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
