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
  title: "Farhan Raisprawira - Portfolio",
  description: "Full-stack developer | Mobile & Web | ITB Bina Sarana Global",
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
        {children}
      </body>
    </html>
  );
}
