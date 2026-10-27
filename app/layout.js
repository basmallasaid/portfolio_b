import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import MouseSpotlight from "@/components/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Basmalla | Frontend Developer Portfolio",
  description: "Frontend Developer specializing in Next.js, React, and Tailwind CSS. Crafting intuitive & modern web experiences.",
  keywords: ["Basmalla", "Frontend Developer", "React", "Next.js", "Tailwind CSS", "Portfolio", "Web Developer"],
  openGraph: {
    title: "Basmalla | Frontend Developer Portfolio",
    description: "Frontend Developer specializing in Next.js, React, and Tailwind CSS. Crafting intuitive & modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#09090b] text-zinc-50 antialiased">
        <Navbar />
        <ScrollProgress />
        <MouseSpotlight />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
