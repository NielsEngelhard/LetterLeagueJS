import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

const specialFont = localFont({
  src: '../../public/fonts/special.otf',
  variable: '--font-special',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spellit - A Word Game",
  description: "Made by Turing Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-foreground ${geistSans.variable} ${geistMono.variable} ${specialFont.variable} antialiased dark`}>
        <Providers>
          
          <Header></Header>

          <div className="min-h-screen flex flex-col">
            <main className="flex-1 py-8 px-6">
              <div className="max-w-6xl mx-auto">
                {children}
              </div>
            </main>
          </div>        

          <Footer></Footer>

        </Providers>
      </body>
    </html>
  );
}
