import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Spice - Digital Menu",
  description: "Digital Menu for Royal Spice Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col items-center justify-start bg-[#f0ebe1] min-h-screen">
        <main className="w-full max-w-md min-h-screen bg-bg-cream relative flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
