"use client";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "@/components/herosection/herosection";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Card />
      </main>
      <Footer />
    </div>
  );
}
