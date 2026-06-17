"use client";

import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, User } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f0ebe1] w-full">
      <header className="flex items-center justify-between px-4 h-20 bg-bg-cream sticky top-0 z-20 shadow-sm shrink-0">
        <Link href="/" className="p-2 -ml-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2">
          <div className="text-brand text-xl font-bold tracking-tight leading-none" style={{ fontFamily: "serif" }}>
            Contact Us
          </div>
        </div>
        <div className="w-6"></div>
      </header>

      <main className="flex-1 bg-bg-cream flex flex-col pb-10 rounded-t-3xl mt-[-10px] z-0 relative px-6 pt-8 gap-8 overflow-y-auto">
        
        {/* Intro Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "serif" }}>We'd love to hear from you</h2>
                  </div>

        {/* Contact Info flat list */}
        <div className="flex flex-col gap-6 w-full">
          {/* Owner */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <User className="w-5 h-5 text-brand" />
            </div>
            <div className="flex flex-col border-b border-gray-200/60 pb-5 w-full">
              <h3 className="text-gray-500 text-sm font-medium">Owner</h3>
              <p className="text-gray-900 font-bold text-lg mt-0.5">Pankaj Satish Rathod</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-brand" />
            </div>
            <div className="flex flex-col border-b border-gray-200/60 pb-5 w-full">
              <h3 className="text-gray-500 text-sm font-medium">Call Us</h3>
              <a href="tel:+919890957617" className="text-brand font-bold text-lg mt-0.5">+91 98909 57617</a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-brand" />
            </div>
            <div className="flex flex-col border-b border-gray-200/60 pb-5 w-full">
              <h3 className="text-gray-500 text-sm font-medium">Visit Us</h3>
              <p className="text-gray-900 font-semibold mt-0.5 leading-relaxed">
                King of Burger,<br />
                Near inspire Computers, Kapad Bazar,<br />
                telikhunt, Ahilyanagar, 414001
              </p>
              <a href="https://maps.google.com/?q=King+of+Burger,+Near+inspire+Computers,+Kapad+Bazar,+telikhunt,+Ahilyanagar,+414001" target="_blank" rel="noreferrer" className="text-brand font-semibold mt-2 text-sm inline-flex items-center gap-1">
                Get Directions <ArrowLeft className="w-4 h-4 rotate-135" />
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-brand" />
            </div>
            <div className="flex flex-col pb-5 w-full">
              <h3 className="text-gray-500 text-sm font-medium">Hours</h3>
              <p className="text-gray-900 font-bold text-lg mt-0.5">09:00 AM - 11:00 PM</p>
              <p className="text-gray-500 text-sm mt-1">Open all 7 days</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
