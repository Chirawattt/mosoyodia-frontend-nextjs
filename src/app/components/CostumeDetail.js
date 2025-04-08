"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiInfo,
  FiStar,
  FiTag,
  FiChevronLeft,
  FiHome,
  FiZoomIn,
} from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// สำหรับแปลงชื่อหมวดหมู่ภาษาไทยเป็นภาษาอังกฤษสำหรับ URL
const categoryReverseMapping = {
  กิโมโน: "kimono",
  ยูกาตะ: "yukata",
  คอสเพลย์: "cosplay",
};

export default function CostumeDetail({ costume }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const router = useRouter();

  // Prepare images for the lightbox with captions
  const slides = costume.images.map((src, index) => ({
    src,
    title: `${costume.name} - ภาพที่ ${index + 1}`,
    description:
      index === 0
        ? `${costume.name} - ภาพหลัก`
        : `${costume.name} - มุมมองเพิ่มเติม`,
  }));

  // Opens the lightbox with the selected image
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsOpen(true);
  };

  // Mockup text สำหรับข้อมูลเพิ่มเติม (ถ้าไม่มี)
  const defaultLongDescription = `ชุดญี่ปุ่นคุณภาพสูงนี้เหมาะสำหรับการถ่ายภาพและกิจกรรมพิเศษต่างๆ ผลิตจากวัสดุคุณภาพสูง ให้ความรู้สึกสบายเมื่อสวมใส่ ดีไซน์ที่พิถีพิถันทำให้คุณโดดเด่นในทุกงาน มีขนาดให้เลือกหลากหลาย เหมาะกับทุกรูปร่าง
  
สำหรับบริการเสริม คุณสามารถเลือกเช่าอุปกรณ์เสริมเพื่อให้การแต่งกายของคุณสมบูรณ์แบบยิ่งขึ้น โดยการเช่าชุดที่ Moso-Yodia คุณจะได้รับคำแนะนำจากทีมงานผู้เชี่ยวชาญในการแต่งกายแบบญี่ปุ่นดั้งเดิม
  
เงื่อนไขการเช่า: กรุณาจองล่วงหน้า 1-2 วันเพื่อความสะดวก ต้องวางบัตรประชาชนหรือพาสปอร์ตเป็นประกัน ระยะเวลาเช่าเริ่มต้น 4 ชั่วโมง สามารถต่อเวลาได้โดยคิดค่าบริการเพิ่ม`;

  return (
    <div className="bg-background">
      {/* Lightbox component with plugins */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Zoom, Thumbnails, Captions]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 1.5,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 2,
          borderRadius: 4,
          padding: 4,
          gap: 8,
        }}
        captions={{
          showToggle: true,
          descriptionTextAlign: "center",
          descriptionMaxLength: 100,
        }}
      />

      <div className="container-custom mx-auto py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Link
            href="/"
            className="flex items-center text-primary hover:underline"
          >
            <FiHome className="mr-1" />
            <span>หน้าหลัก</span>
          </Link>
          <span className="text-foreground/50">/</span>
          <Link href="/costumes" className="text-primary hover:underline">
            ชุดทั้งหมด
          </Link>
          <span className="text-foreground/50">/</span>
          <Link
            href={`/categories/${
              categoryReverseMapping[costume.category] || "other"
            }`}
            className="text-primary hover:underline"
          >
            {costume.category}
          </Link>
          <span className="text-foreground/50">/</span>
          <span className="text-foreground/70 truncate">{costume.name}</span>
        </div>

        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center mb-4 text-primary hover:underline"
        >
          <FiChevronLeft className="mr-1" />
          <span>กลับไปยังหน้าก่อนหน้า</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-light-muted cursor-pointer group"
              onClick={() => openLightbox(selectedImage)}
            >
              <Image
                src={costume.images[selectedImage]}
                alt={`${costume.name} - มุมมองที่ ${selectedImage + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`inline-block py-1 px-3 rounded-full text-xs font-medium text-white ${
                    costume.status === "available"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {costume.status === "available" ? "ว่างตอนนี้" : "ถูกจองแล้ว"}
                </span>
              </div>

              {/* Overlay hint for clickable image */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-black/60 text-white py-2 px-4 rounded-md text-sm flex items-center">
                  <FiZoomIn className="mr-2" />
                  คลิกเพื่อดูภาพขยาย
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {costume.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  } hover:opacity-90 transition-opacity`}
                  onClick={() => {
                    setSelectedImage(index);
                    // Double click to open lightbox
                    if (selectedImage === index) {
                      openLightbox(index);
                    }
                  }}
                >
                  <Image
                    src={image}
                    alt={`${costume.name} ภาพขนาดเล็ก ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 10vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Costume Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/30 mb-2">
                {costume.category}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold">{costume.name}</h1>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${
                      i < 4
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-gray-300 stroke-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-foreground/70">
                ({costume.reviews?.length || 0} รีวิว)
              </span>
            </div>

            <div className="mb-6">
              <div className="bg-[#e5e0d5] p-4 rounded-lg shadow-md mb-4 border-l-4 border-[#e74c3c]">
                <h3 className="text-lg font-bold mb-1 flex items-center">
                  <FiTag className="text-[#e74c3c] mr-2" /> ราคาเช่า:
                </h3>
                <p className="flex items-center">
                  <span className="text-xl font-bold text-[#e74c3c]">
                    {costume.rentalPrice || "250 บาท"}
                  </span>
                  <span className="ml-2 text-sm text-foreground/70">
                    สำหรับ {costume.rentalPeriod}
                  </span>
                </p>
              </div>
              <div className="mt-4 p-4 border border-border rounded-md bg-light-muted/50">
                <p className="font-medium text-sm mb-3">
                  บริการเสริม (คิดค่าบริการเพิ่ม):
                </p>
                <div className="flex flex-wrap gap-2">
                  {costume.accessories ? (
                    costume.accessories.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white/90 rounded-full py-1.5 px-4 text-sm border-2 border-primary/20 shadow-md flex items-center hover:shadow-lg hover:scale-105 transition-all"
                      >
                        <span className="mr-2 font-medium">{item.name}</span>
                        <span className="text-[#e74c3c] font-bold">
                          {item.price}
                        </span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="bg-white/90 rounded-full py-1.5 px-4 text-sm border-2 border-primary/20 shadow-md flex items-center hover:shadow-lg hover:scale-105 transition-all">
                        <span className="mr-2 font-medium">โอบิ (เข็มขัด)</span>
                        <span className="text-[#e74c3c] font-bold">50 บาท</span>
                      </div>
                      <div className="bg-white/90 rounded-full py-1.5 px-4 text-sm border-2 border-primary/20 shadow-md flex items-center hover:shadow-lg hover:scale-105 transition-all">
                        <span className="mr-2 font-medium">รองเท้า</span>
                        <span className="text-[#e74c3c] font-bold">50 บาท</span>
                      </div>
                      <div className="bg-white/90 rounded-full py-1.5 px-4 text-sm border-2 border-primary/20 shadow-md flex items-center hover:shadow-lg hover:scale-105 transition-all">
                        <span className="mr-2 font-medium">พัด</span>
                        <span className="text-[#e74c3c] font-bold">30 บาท</span>
                      </div>
                      <div className="bg-white/90 rounded-full py-1.5 px-4 text-sm border-2 border-primary/20 shadow-md flex items-center hover:shadow-lg hover:scale-105 transition-all">
                        <span className="mr-2 font-medium">ร่ม</span>
                        <span className="text-[#e74c3c] font-bold">50 บาท</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <p className="text-foreground/80 mb-6">{costume.description}</p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-2 items-center">
                <FiTag className="text-primary" />
                <span className="font-medium">ขนาดที่มี:</span> {costume.size}
              </div>
              <div className="flex gap-2 items-center">
                <FiCalendar className="text-primary" />
                <span className="font-medium">ระยะเวลาเช่า:</span>{" "}
                {costume.rentalPeriod}
              </div>
              <div className="flex gap-2 items-center">
                <FiClock className="text-primary" />
                <span className="font-medium">สถานะ:</span>
                <span
                  className={
                    costume.status === "available"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {costume.status === "available"
                    ? "พร้อมให้เช่า"
                    : "ถูกจองแล้ว"}
                </span>
              </div>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FiInfo className="text-primary" />
                ข้อมูลจำเพาะ
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {costume.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-light-muted/50 p-3 rounded-md border border-border/50"
                  >
                    <span className="block text-sm text-primary font-medium">
                      {spec.label}
                    </span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-light-muted p-6 rounded-lg mb-6 border border-border/50">
              <h3 className="text-xl font-bold mb-2">ข้อมูลเพิ่มเติม</h3>
              <p className="text-foreground/80 whitespace-pre-line">
                {costume.longDescription || defaultLongDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/costumes"
                className="border-2 border-primary hover:bg-primary/10 text-primary py-3 px-6 rounded-md transition flex-1 text-center font-medium flex items-center justify-center"
              >
                ดูชุดเพิ่มเติม
              </Link>
              <button className="bg-[#e74c3c] hover:bg-[#c0392b] text-white py-3.5 px-6 rounded-md transition flex-1 font-medium shadow-lg flex items-center justify-center text-lg border-b-4 border-[#c0392b]">
                <FiCalendar className="mr-2" />
                ติดต่อพนักงานที่หน้าทางเข้า
              </button>
            </div>
          </motion.div>
        </div>

        {/* Reviews */}
        {costume.reviews && costume.reviews.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">
              รีวิวจากลูกค้า ({costume.reviews.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {costume.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-light-muted/40 p-6 rounded-lg border border-border"
                >
                  <div className="flex justify-between mb-2">
                    <h4 className="font-bold">{review.user}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`${
                            i < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300 stroke-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
