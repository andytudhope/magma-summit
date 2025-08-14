import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { tanHeadline } from './fonts';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Magma Builder Summit",
  description: "The best founders and builders gathering to create what Africa needs next.",
  metadataBase: new URL("https://summit.borderless.africa"), 
  openGraph: {
    title: "Magma Builder Summit",
    description: "Founders and builders gathering to create what Africa needs next.",
    url: "https://summit.borderless.africa",
    siteName: "Magma Builder Summit",
    images: [
      {
        url: "/share.jpeg",
        width: 1600,
        height: 900,
        alt: "Magma Builder Summit 2025",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magma Builder Summit",
    description: "Founders and builders gathering to create what Africa needs next.",
    site: "@borderlessaf", 
    creator: "@borderlessaf",
    images: ["/twitter.jpeg"],
  },
  icons: {
    icon: "/favicon.ico", 
    shortcut: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${tanHeadline.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
