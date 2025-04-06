"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { API_BASE_URL } from "../utils/config";

// สำหรับแปลงประเภทจากตัวเลขเป็นภาษาไทย
const categoryMapping = {
  0: "กิโมโน",
  1: "ยูกาตะ",
  2: "คอสเพลย์",
};

export default function FeaturedCostumes() {
  const [featuredCostumes, setFeaturedCostumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCostumes = async () => {
      try {
        setLoading(true);

        // ดึงชุดที่สามารถเช่าได้จาก API (ใช้ API proxy)
        const response = await fetch(`/api/costumes/rentable`);
        if (!response.ok) {
          throw new Error("Failed to fetch rentable costumes");
        }

        const data = await response.json();

        // แปลงข้อมูลให้อยู่ในรูปแบบที่ต้องการและเลือกแค่ 4 ชุดที่มีค่า status เป็น 1
        const formattedData = data
          .filter((costume) => costume.status === 1)
          .slice(0, 4)
          .map((costume) => ({
            id: costume.id.toString(),
            name: costume.name,
            category: categoryMapping[costume.category] || "อื่นๆ",
            description: costume.description,
            image: costume.image_path
              ? `${API_BASE_URL}/${costume.image_path}`
              : "/images/costumes/placeholder.jpg",
            status: costume.status === 1 ? "available" : "booked",
          }));

        console.log(formattedData);

        setFeaturedCostumes(formattedData);
      } catch (error) {
        console.error("Error fetching featured costumes:", error);
        // ถ้ามีข้อผิดพลาด แสดงชุดตัวอย่างแทน
        setFeaturedCostumes([
          {
            id: "costume1",
            name: "กิโมโนฟุริโซเดะสีแดง",
            category: "กิโมโน",
            description:
              "กิโมโนฟุริโซเดะสีแดงหรูหราพร้อมลวดลายดอกไม้ เหมาะสำหรับโอกาสทางการ",
            image: "/images/costumes/kimono1.jpg",
            status: "available",
          },
          {
            id: "costume2",
            name: "ยูกาตะสำหรับเทศกาลฤดูร้อน",
            category: "ยูกาตะ",
            description:
              "ยูกาตะสีฟ้าอ่อนพร้อมลวดลายแบบดั้งเดิม เหมาะสำหรับเทศกาลฤดูร้อน",
            image: "/images/costumes/yukata1.jpg",
            status: "available",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCostumes();
  }, []);

  return (
    <section className="py-16 bg-[#d7cfc3]">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4a4039]">
            ชุดยอดนิยม
          </h2>
          <p className="text-[#4a4039]/80 max-w-2xl mx-auto">
            ชุดให้เช่าที่ได้รับความนิยมสูงสุด -
            ติดต่อพนักงานที่หน้าทางเข้าเพื่อจอง
          </p>
          <p className="text-[#4a4039]/90 mt-2 max-w-xl mx-auto text-sm font-medium bg-[#e5e0d5] py-2 px-4 rounded-md inline-block">
            ทุกชุดราคาเช่า 250 บาท (ค่าบริการเสริม: โอบิ, รองเท้า, พัด, ร่ม ฯลฯ)
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-8">
            <p className="text-[#4a4039]">กำลังโหลดข้อมูลชุด...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCostumes.map((costume, index) => (
              <motion.div
                key={costume.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#e5e0d5] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={costume.image}
                    alt={costume.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-block py-1 px-3 rounded-full text-xs font-medium text-white ${
                        costume.status === "available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {costume.status === "available" ? "ว่าง" : "จองแล้ว"}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-block py-1 px-2 rounded text-xs text-white bg-[#8a7967]/80 mb-1">
                      {costume.category}
                    </span>
                    <h3 className="text-white font-bold truncate">
                      {costume.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[#4a4039]/80 mb-3 line-clamp-2">
                    {costume.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#8a7967] font-medium bg-[#8a7967]/10 px-2 py-1 rounded">
                      ค่าเช่า 250 บาท
                    </span>
                    <Link
                      href={`/costumes/${costume.id}`}
                      className="text-sm font-medium text-[#8a7967] hover:underline"
                    >
                      ดูรายละเอียด
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="/costumes"
            className="inline-block bg-[#8a7967] hover:bg-[#75685a] text-white py-3 px-8 rounded-md transition"
          >
            ดูชุดทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
