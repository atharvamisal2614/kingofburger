"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-cream w-full">
      <header className="flex items-center p-4 pt-6 bg-bg-cream sticky top-0 z-10 border-b border-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold ml-2 text-brand" style={{ fontFamily: "serif" }}>About Us</h1>
      </header>
      <main className="p-6 flex-1 text-gray-800 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Royal Spice</h2>
        <p className="mb-4">
          Welcome to Royal Spice, your ultimate destination for pure vegetarian culinary delights. We take pride in serving authentic, flavorful, and high-quality dishes prepared with the freshest ingredients.
        </p>
        <p className="mb-4">
          Our chefs are dedicated to bringing you the best dining experience, blending traditional recipes with a modern touch.
        </p>
        <p>
          Thank you for choosing Royal Spice. We hope you enjoy your meal!
        </p>
      </main>
    </div>
  );
}
