import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cocktail Guide | 经典鸡尾酒指南",
  description: "探索经典鸡尾酒的历史、配方与调制艺术",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-bar-darker text-white`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold gradient-text font-serif">
              Cocktail Guide
            </a>
            <div className="flex items-center gap-6">
              <a
                href="/"
                className="text-gray-300 hover:text-bar-accent transition-colors"
              >
                首页
              </a>
              <a
                href="#classics"
                className="text-gray-300 hover:text-bar-accent transition-colors"
              >
                经典配方
              </a>
            </div>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-500">
          <p>&copy; 2024 Cocktail Guide. 请理性饮酒。</p>
        </footer>
      </body>
    </html>
  );
}
