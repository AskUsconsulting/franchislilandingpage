import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Franchisli — Franchise Management Platform",
  description:
    "One platform to run every location, every day. Audits, training, operations, and communications built specifically for franchise teams.",
  openGraph: {
    title: "Franchisli — Franchise Management Platform",
    description:
      "One platform to run every location, every day. Audits, training, operations, and communications in one place.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
