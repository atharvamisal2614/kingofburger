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
        <h2 className="text-2xl font-bold mb-4 text-gray-900">King of Burger</h2>
        <p className="mb-4">
          Hi, I am Pankaj,
        </p>
        <p className="mb-4">
          I had a strong interest in the restaurant business from a young age. At that time, I used to watch the TV show Shark Tank, which inspired me to start my own food business and sell through online platforms like Zomato and Swiggy. Motivated by this idea, I launched my business on May 12, 2021, and began serving customers through these platforms.
        </p>
        <p className="mb-4">
          I have a God-gifted talent for cooking and a natural sense of taste, which helps me create delicious and high-quality food. My passion for food and dedication to customer satisfaction have been key factors in my journey as a restaurant entrepreneur.
        </p>
      </main>
    </div>
  );
}
