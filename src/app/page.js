import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CostumeCategories from "./components/CostumeCategories";
import FeaturedCostumes from "./components/FeaturedCostumes";
import Footer from "./components/Footer";
import CafeBarSection from "./components/CafeBarSection";

export default function Home() {
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
