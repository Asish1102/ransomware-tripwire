import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripwire | Early Ransomware Tripwire",
  description: "Detect ransomware before encryption begins. A lightweight ransomware tripwire that detects pre-encryption behavior and automatically isolates infected machines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <header className="fixed w-full z-50 glass-panel border-b-0 border-card-border">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary glow flex items-center justify-center text-background font-bold text-xl">T</div>
              <span className="font-bold text-xl tracking-tight text-white hover:text-primary transition-colors cursor-pointer">Tripwire</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="/product" className="hover:text-primary transition-colors">Product</a>
              <a href="/technology" className="hover:text-primary transition-colors">Technology</a>
              <a href="/demo" className="hover:text-primary transition-colors">Demo</a>
              <a href="/blog" className="hover:text-primary transition-colors">Research</a>
              <a href="/about" className="hover:text-primary transition-colors">About</a>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="/login" className="hidden lg:block text-sm font-medium hover:text-primary transition-colors">Dashboard Login</a>
              <a href="/download" className="bg-primary hover:bg-primary-dark text-background font-semibold py-2 px-4 rounded transition-all glow">Download Agent</a>
            </div>
          </div>
        </header>
        
        <main className="flex-grow pt-24 text-sans">
          {children}
        </main>
        
        <footer className="border-t border-card-border py-12 mt-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-background font-bold text-sm">T</div>
                <span className="font-bold text-lg text-white">Tripwire</span>
              </div>
              <p className="text-sm text-gray-400">Stopping ransomware before encryption starts.</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/product" className="hover:text-primary">How It Works</a></li>
                <li><a href="/technology" className="hover:text-primary">Detection Engine</a></li>
                <li><a href="/demo" className="hover:text-primary">Live Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/download" className="hover:text-primary">Download Agent</a></li>
                <li><a href="/blog" className="hover:text-primary">Research Blog</a></li>
                <li><a href="/docs" className="hover:text-primary">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about" className="hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                <li><a href="/careers" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-card-border text-sm text-gray-500 flex justify-between">
            <p>&copy; 2024 Tripwire. Built by me. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">GitHub</a>
              <a href="#" className="hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
