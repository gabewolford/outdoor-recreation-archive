import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} tracking-tight`}>{children}</body>
    </html>
  );
}
