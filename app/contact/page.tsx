"use client";

import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

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
          <p className="text-gray-500 text-sm">Whether you have a question about our menu, reservations, or anything else, our team is ready to answer all your questions.</p>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gold/10 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-brand" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
              <p className="text-gray-500 text-sm mt-1 mb-2">We are available from 10 AM to 11 PM.</p>
              <a href="tel:+919876543210" className="text-brand font-semibold">+91 98765 43210</a>
              <a href="tel:+911234567890" className="text-brand font-semibold">+91 12345 67890</a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gold/10 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-brand" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
              <p className="text-gray-500 text-sm mt-1 mb-2">Drop us a line anytime.</p>
              <a href="mailto:info@royalspice.com" className="text-brand font-semibold">info@royalspice.com</a>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gold/10 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg">Visit Us</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                123 Food Street, Culinary District,<br />
                Flavor Town, 400001
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-brand font-semibold mt-2 text-sm inline-flex items-center gap-1">
                Get Directions <ArrowLeft className="w-4 h-4 rotate-135" />
              </a>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gold/10 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-brand" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-900 text-lg">Hours</h3>
              <div className="flex justify-between text-sm mt-2 text-gray-700 w-full">
                <span>Mon - Fri</span>
                <span className="font-semibold text-gray-900">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between text-sm mt-1 text-gray-700 w-full">
                <span>Sat - Sun</span>
                <span className="font-semibold text-gray-900">09:00 AM - 11:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
