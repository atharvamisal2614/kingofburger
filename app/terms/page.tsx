"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-cream w-full">
      <header className="flex items-center p-4 pt-6 bg-bg-cream sticky top-0 z-10 border-b border-gray-100">
        <Link href="/" className="p-2 -ml-2 text-gray-800">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold ml-2 text-brand" style={{ fontFamily: "serif" }}>Terms & Conditions</h1>
      </header>
      <main className="p-6 flex-1 text-gray-800 leading-relaxed text-sm">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Terms of Service</h2>
        
        <section className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2">1. General</h3>
          <p className="text-gray-600">By using our digital menu, you agree to these terms. Prices are subject to change without prior notice. Images are for illustration purposes only.</p>
        </section>

        <section className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2">2. Taxes and Service Charges</h3>
          <p className="text-gray-600">All prices are exclusive of applicable taxes and a discretionary service charge unless stated otherwise.</p>
        </section>

        <section className="mb-6">
          <h3 className="font-bold text-gray-900 mb-2">3. Food Allergies</h3>
          <p className="text-gray-600">Please inform our staff of any food allergies or special dietary requirements before placing your order. We cannot guarantee completely allergen-free environments.</p>
        </section>

        <section>
          <h3 className="font-bold text-gray-900 mb-2">4. Payment</h3>
          <p className="text-gray-600">We accept major credit cards, UPI, and cash. Payment must be completed before leaving the premises.</p>
        </section>
      </main>
    </div>
  );
}
