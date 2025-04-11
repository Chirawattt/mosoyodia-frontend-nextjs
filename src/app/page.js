"use client"; // Add this to use client-side features like useEffect

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CostumeCategories from "./components/CostumeCategories";
import FeaturedCostumes from "./components/FeaturedCostumes";
import Footer from "./components/Footer";
import CafeBarSection from "./components/CafeBarSection";

export default function Home() {
  useEffect(() => {
    // Smooth scroll to top when the page loads/refreshes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CostumeCategories />
        <FeaturedCostumes />
        <CafeBarSection />
      </main>
      <Footer />
    </div>
  );
}
