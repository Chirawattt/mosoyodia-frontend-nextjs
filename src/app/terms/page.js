"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container-custom mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-center"
          >
            ข้อกำหนดการใช้งาน
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. การยอมรับข้อกำหนด
              </h2>
              <p className="text-foreground/80">
                การใช้งานเว็บไซต์และบริการของเรา
                หมายความว่าคุณยอมรับและตกลงที่จะปฏิบัติตามข้อกำหนดการใช้งานเหล่านี้
                หากคุณไม่เห็นด้วยกับข้อกำหนดใดๆ กรุณาอย่าใช้บริการของเรา
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. การให้บริการ</h2>
              <p className="text-foreground/80 mb-4">
                เรามอบบริการดังต่อไปนี้:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>การเช่าชุดญี่ปุ่น</li>
                <li>บริการคาเฟ่และบาร์</li>
                <li>บริการถ่ายภาพ</li>
                <li>กิจกรรมและเวิร์คช็อป</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. การจองและการชำระเงิน
              </h2>
              <p className="text-foreground/80">การจองจะสมบูรณ์เมื่อ:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>คุณได้กรอกข้อมูลการจองครบถ้วน</li>
                <li>เราได้รับยืนยันการชำระเงิน</li>
                <li>เราได้ส่งอีเมลยืนยันการจองให้คุณ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. นโยบายการยกเลิกและการคืนเงิน
              </h2>
              <p className="text-foreground/80">การยกเลิกการจอง:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>ยกเลิกก่อน 48 ชั่วโมง: คืนเงินเต็มจำนวน</li>
                <li>ยกเลิกภายใน 24-48 ชั่วโมง: คืนเงิน 50%</li>
                <li>ยกเลิกภายใน 24 ชั่วโมง: ไม่คืนเงิน</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. ความรับผิดชอบ</h2>
              <p className="text-foreground/80">ผู้ใช้บริการมีหน้าที่:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>ดูแลรักษาชุดที่เช่าให้อยู่ในสภาพดี</li>
                <li>ชำระค่าชดเชยกรณีเกิดความเสียหาย</li>
                <li>ปฏิบัติตามกฎระเบียบของสถานที่</li>
                <li>ไม่นำชุดออกนอกสถานที่โดยไม่ได้รับอนุญาต</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. การละเมิดลิขสิทธิ์
              </h2>
              <p className="text-foreground/80">
                ห้ามทำซ้ำ ดัดแปลง หรือเผยแพร่เนื้อหาใดๆ
                จากเว็บไซต์ของเราโดยไม่ได้รับอนุญาต
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. การแก้ไขข้อกำหนด
              </h2>
              <p className="text-foreground/80">
                เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดการใช้งานนี้ได้ทุกเมื่อ
                โดยจะแจ้งให้ทราบผ่านทางเว็บไซต์
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. ติดต่อเรา</h2>
              <p className="text-foreground/80">
                หากคุณมีคำถามเกี่ยวกับข้อกำหนดการใช้งาน กรุณาติดต่อเราได้ที่:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>อีเมล: support@mosoyodia.com</li>
                <li>โทรศัพท์: 02-XXX-XXXX</li>
                <li>ที่อยู่: XXX ถนน XXX เขต XXX กรุงเทพฯ</li>
              </ul>
            </section>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              กลับสู่หน้าหลัก
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
