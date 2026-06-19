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
  title: "Opereva — Multi-Location Operations Platform",
  description:
    "Run every location to the same standard. Audits, checklists, training, and team communication in one platform — built for car washes, restaurants, and franchises.",
  openGraph: {
    title: "Opereva — Multi-Location Operations Platform",
    description:
      "Run every location to the same standard. Audits, checklists, training, and team communication in one clean dashboard.",
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
