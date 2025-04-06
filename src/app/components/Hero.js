"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#e5e0d5]">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/HeroBG.png"
          alt="Hero Background"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-20 blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#4a4039]/15"></div>
      </div>

      <div className="container-custom mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-[#8a7967] inline-block transform hover:scale-105 transition-transform duration-300 drop-shadow-lg">
              <span className="text-[#75685a]">日</span>
              <span className="text-[#8a7967]">本</span>
            </span>
            <span className="text-[#8a7967] drop-shadow-md">
              の衣装をお楽しみください
            </span>
          </h1>
          <p className="text-lg mb-8 text-[#4a4039]">
            สัมผัสความงดงามของชุดญี่ปุ่นดั้งเดิม - กิโมโน, ยูกาตะ และชุดคอสเพลย์
            ที่ Moso-Yodia ร้านให้เช่าชุดคาเฟ่และบาร์
            <span className="block mt-2 font-medium">
              เพียงติดต่อพนักงานที่หน้าทางเข้าเพื่อจองชุดโดยตรง
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/costumes"
              className="inline-block bg-[#8a7967] hover:bg-[#75685a] text-white py-3 px-8 rounded-md transition shadow-md hover:shadow-lg"
            >
              ดูชุดทั้งหมด
            </Link>
            <Link
              href="/about"
              className="inline-block bg-transparent border border-[#8a7967] hover:bg-[#8a7967]/10 text-[#4a4039] py-3 px-8 rounded-md transition shadow-sm hover:shadow-md"
            >
              เกี่ยวกับร้านของเรา
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero-image.png"
              alt="การแสดงชุดญี่ปุ่น"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#8a7967]/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#8a7967]/20 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#e5e0d5] to-transparent"></div>
    </section>
  );
}
