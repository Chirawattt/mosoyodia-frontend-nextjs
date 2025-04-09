"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cafeFeatures = [
  {
    id: 1,
    title: "พิธีชงชา",
    description:
      "สัมผัสประสบการณ์พิธีชงชาญี่ปุ่นแบบดั้งเดิมขณะสวมชุดกิโมโนหรือยูกาตะที่คุณเช่า",
    image: "/images/tea-ceremony.png",
  },
  {
    id: 2,
    title: "มุมถ่ายภาพ",
    description:
      "มุมถ่ายภาพมืออาชีพด้วยฉากหลังธีมญี่ปุ่นสำหรับภาพถ่ายที่น่าจดจำ",
    image: "/images/photo-area.png",
  },
  {
    id: 3,
    title: "เครื่องดื่มธีมพิเศษ",
    description:
      "เพลิดเพลินกับเครื่องดื่มพิเศษที่ได้แรงบันดาลใจจากวัฒนธรรมญี่ปุ่นและอนิเมะ",
    image: "/images/themed-drinks.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CafeBarSection() {
  return (
    <section className="py-16 japanese-pattern relative overflow-hidden">
      <div className="container-custom mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          เยี่ยมชมคาเฟ่และบาร์ของเรา
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-foreground/80 mb-8"
        >
          เพลิดเพลินกับชาญี่ปุ่นดั้งเดิม กาแฟ และเครื่องดื่มรีเฟรชต่างๆ
          ในคาเฟ่สไตล์ญี่ปุ่นแท้ๆ สถานที่ถ่ายรูปสวยๆ ในชุดที่คุณเช่า!
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {cafeFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-background rounded-lg shadow-md overflow-hidden relative h-80 group hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-0">
                <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                  <h3 className="text-xl font-bold text-white ml-6">
                    {feature.title}
                  </h3>
                </div>
                <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                  <p className="text-white/90 ml-6">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}
