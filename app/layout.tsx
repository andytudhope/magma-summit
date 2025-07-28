import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { tanHeadline } from './fonts';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Magma Builder Summit",
  description: "The best founders and builders gathering to create what Africa needs next.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${tanHeadline.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
