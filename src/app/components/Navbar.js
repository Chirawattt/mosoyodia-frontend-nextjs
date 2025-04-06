"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#e5e0d5]/95 backdrop-blur-sm border-b border-[#c3b6a6]">
      <div className="container-custom mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/RoundedLogo.png"
                alt="Moso-Yodia Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#8a7967]">
                Moso-Yodia
              </span>
              <span className="text-sm text-[#4a4039]/80">
                ร้านให้เช่าชุดคาเฟ่และบาร์
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              หน้าแรก
            </Link>
            <Link
              href="/costumes"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              ชุดทั้งหมด
            </Link>
            <Link
              href="/categories/kimono"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              กิโมโน
            </Link>
            <Link
              href="/categories/yukata"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              ยูกาตะ
            </Link>
            <Link
              href="/categories/cosplay"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              คอสเพลย์
            </Link>
            <Link
              href="/about"
              className="text-[#4a4039] hover:text-[#8a7967] transition-colors"
            >
              เกี่ยวกับเรา
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#4a4039] p-2"
            aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#e5e0d5] border-b border-[#c3b6a6]"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                หน้าแรก
              </Link>
              <Link
                href="/costumes"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ชุดทั้งหมด
              </Link>
              <Link
                href="/categories/kimono"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                กิโมโน
              </Link>
              <Link
                href="/categories/yukata"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ยูกาตะ
              </Link>
              <Link
                href="/categories/cosplay"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                คอสเพลย์
              </Link>
              <Link
                href="/about"
                className="text-lg py-2 text-[#4a4039] hover:text-[#8a7967] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                เกี่ยวกับเรา
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
