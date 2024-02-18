import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import MobileMenu from "./components/MobileMenu";

const inter = Inter({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  style: "normal",
});

export const metadata = {
  title: "Outdoor Recreation Archive",
  description: "Preserving the history of outdoor gear.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="cursor-crosshair">
      <body
        className={`${inter.className} tracking-tight flex flex-col min-h-svh w-full text-gray-main`}
      >
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
