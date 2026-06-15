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
  title: "King of Burger - Digital Menu",
  description: "Digital Menu for King of Burger Restaurant",
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
          <footer className="w-full py-4 text-center mt-auto">
            <p className="text-xs text-gray-500">
              Designed and Developed by <a href="https://codefixerz.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Codefixerz</a>
            </p>
          </footer>
        </main>
      </body>
    </html>
  );
}
