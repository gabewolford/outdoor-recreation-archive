import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import MobileMenu from "./components/MobileMenu";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import "animate.css";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  style: "normal",
});

export const metadata = {
  title: "Outdoor Recreation Archive",
  description: "Preserving the history of outdoor gear.",
  keywords:
    "Outdoor, outdoors, recreation, archive, media archive, outdoor recreation archive, books, catalogs, magazines, manuscripts, periodicals, photographs, utah state university, outdoor product design and development, outdoor catalogs, outdoor history",
  openGraph: {
    title: "Outdoor Recreation Archive",
    description: "Preserving the history of outdoor gear.",
    siteName: "Outdoor Recreation Archive",
    type: "website",
    locale: "en_US",
    url: "https://outdoorrecreationarchive.com",
    images: [
      {
        url: "https://outdoorrecreationarchive.com/images/og-image.png",
        alt: "Outdoor Recreation Archive",
      },
    ],
  },
  images: [
    {
      url: "https://outdoorrecreationarchive.com/images/og-image.png",
      alt: "Outdoor Recreation Archive",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="cursor-crosshair">
      <body
        className={`${inter.className} tracking-tight flex flex-col min-h-svh w-full text-gray-main`}
      >
        <MobileMenu />
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-69EP29S22Y" />
      </body>
    </html>
  );
}
