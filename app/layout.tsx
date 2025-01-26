import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";
import { inter } from './fonts'

export const metadata: Metadata = {
  title: 'ParallaxChain - Decentralized AI Computational Platform',
  description: 'Transforming blockchain technology through adaptive, multi-perspective knowledge networks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-[#0A0A0A] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
