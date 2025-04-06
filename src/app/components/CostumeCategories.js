"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    id: "kimono",
    title: "กิโมโน",
    description:
      "ชุดญี่ปุ่นดั้งเดิมที่เป็นทางการ มีลวดลายสวยงามและความสำคัญทางวัฒนธรรมอันลึกซึ้ง",
    image: "/images/kimono.png",
    color: "bg-[#8a7967]",
    hoverColor: "hover:bg-[#75685a]",
    gradientFrom: "from-[#8a7967]/80",
  },
  {
    id: "yukata",
    title: "ยูกาตะ",
    description:
      "กิโมโนฤดูร้อนแบบลำลอง ทำจากผ้าฝ้ายน้ำหนักเบา เหมาะสำหรับเทศกาลและงานฤดูร้อน",
    image: "/images/yukata.png",
    color: "bg-[#a2917f]",
    hoverColor: "hover:bg-[#8d7e6e]",
    gradientFrom: "from-[#a2917f]/80",
  },
  {
    id: "cosplay",
    title: "คอสเพลย์",
    description:
      "ชุดแฟนซีที่ได้แรงบันดาลใจจากตัวละครในอนิเมะ มังงะ วิดีโอเกม และวัฒนธรรมป๊อป",
    image: "/images/cosplay.png",
    color: "bg-[#baa89a]",
    hoverColor: "hover:bg-[#a5958a]",
    gradientFrom: "from-[#baa89a]/80",
  },
];

export default function CostumeCategories() {
  return (
    <section className="py-16 bg-[#e5e0d5]">
      <div className="container-custom mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4a4039]">
            สำรวจหมวดหมู่ชุดของเรา
          </h2>
          <p className="text-[#4a4039]/80 max-w-2xl mx-auto">
            ค้นพบคอลเลคชั่นชุดญี่ปุ่นแท้ๆ มากมายที่พร้อมให้เช่า
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Link
                href={`/categories/${category.id}`}
                className="block group h-full"
              >
                <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t ${category.gradientFrom} to-transparent`}
                    ></div>
                    <div className="absolute bottom-4 left-0 right-0 px-6">
                      <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col relative">
                    <div
                      className={`absolute -top-5 right-6 ${category.color} ${category.hoverColor} text-white text-sm font-bold py-2 px-4 rounded-full shadow-md transform transition-transform group-hover:scale-105`}
                    >
                      {category.title}
                    </div>
                    <p className="text-[#4a4039]/90 mb-6 flex-grow pt-2">
                      {category.description}
                    </p>
                    <div className="text-[#8a7967] font-medium flex items-center">
                      ดูคอลเลคชั่น
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
