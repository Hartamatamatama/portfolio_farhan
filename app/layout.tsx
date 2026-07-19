import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-eta-umber-75.vercel.app"),
  title: "Farhan Raisprawira | Full-stack Developer",
  description: "Portfolio of Farhan Raisprawira Hartama, a Full-stack Developer & Mobile Engineer specializing in Next.js, React, Flutter, and Go.",
  keywords: ["Farhan Raisprawira", "Farhan Hartama", "Portfolio", "Full-stack Developer", "Flutter Developer", "Frontend", "Backend", "Next.js"],
  authors: [{ name: "Farhan Raisprawira Hartama" }],
  openGraph: {
    title: "Farhan Raisprawira | Full-stack Developer",
    description: "Portfolio of Farhan Raisprawira Hartama, a Full-stack Developer & Mobile Engineer.",
    url: "https://portfolio-eta-umber-75.vercel.app",
    siteName: "Farhan's Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Raisprawira | Full-stack Developer",
    description: "Portfolio of Farhan Raisprawira Hartama, a Full-stack Developer & Mobile Engineer.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-slate-950 text-white overflow-x-hidden`}
      >
        <AnimatedBackground />
        <Navbar />
        <div className="page-transition">
          {children}
        </div>
      </body>
    </html>
  );
}
