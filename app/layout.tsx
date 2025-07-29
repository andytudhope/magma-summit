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
        url: "https://storage.tally.so/fb7b6bf2-a243-4776-85aa-0bede413802d/magma.webp",
        width: 957,
        height: 478,
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
    images: ["https://storage.tally.so/fb7b6bf2-a243-4776-85aa-0bede413802d/magma.webp"],
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
