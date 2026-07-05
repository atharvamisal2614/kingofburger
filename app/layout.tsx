import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "King of Burgers - Digital Menu",
  description: "Digital Menu for King of Burgers Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} antialiased`}
    >
      <body className="flex flex-col items-center justify-start bg-[#f0ebe1] min-h-screen">
        <main className="w-full max-w-md min-h-screen bg-bg-cream relative flex flex-col">
          {children}
          <footer className="w-full py-4 mt-auto border-t border-gray-200/60">
            <div className="flex items-center justify-center gap-2">
              <p className="text-xs text-gray-500">
                Designed and Developed by <a href="https://codefixerz.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-semibold">Codefixerz</a>
              </p>
              <a href="https://wa.me/919529926673" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-600 transition-colors" aria-label="Chat on WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
              </a>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
