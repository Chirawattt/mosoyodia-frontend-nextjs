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

export default function PrivacyPolicy() {
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
            นโยบายความเป็นส่วนตัว
          </motion.h1>

          <motion.div variants={itemVariants} className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. ข้อมูลที่เรารวบรวม
              </h2>
              <p className="text-foreground/80 mb-4">
                เรารวบรวมข้อมูลส่วนบุคคลที่คุณให้กับเราโดยตรง เช่น:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>ชื่อ-นามสกุล</li>
                <li>ที่อยู่</li>
                <li>อีเมล</li>
                <li>หมายเลขโทรศัพท์</li>
                <li>ข้อมูลการชำระเงิน</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. การใช้ข้อมูล</h2>
              <p className="text-foreground/80">เราใช้ข้อมูลที่รวบรวมเพื่อ:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>ให้บริการและจัดการการเช่าชุด</li>
                <li>ประมวลผลการชำระเงิน</li>
                <li>ติดต่อสื่อสารกับคุณ</li>
                <li>ปรับปรุงบริการของเรา</li>
                <li>ส่งข้อมูลการตลาด (เมื่อได้รับอนุญาต)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. การแบ่งปันข้อมูล
              </h2>
              <p className="text-foreground/80">
                เราจะไม่ขายหรือให้เช่าข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม
                เว้นแต่:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>ได้รับความยินยอมจากคุณ</li>
                <li>จำเป็นต้องปฏิบัติตามกฎหมาย</li>
                <li>เพื่อปกป้องสิทธิ์และความปลอดภัยของเรา</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. ความปลอดภัยของข้อมูล
              </h2>
              <p className="text-foreground/80">
                เราใช้มาตรการรักษาความปลอดภัยที่เหมาะสมเพื่อปกป้องข้อมูลส่วนบุคคลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต
                การเปิดเผย การเปลี่ยนแปลง หรือการทำลาย
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. สิทธิ์ของคุณ</h2>
              <p className="text-foreground/80">คุณมีสิทธิ์ที่จะ:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>เข้าถึงข้อมูลส่วนบุคคลของคุณ</li>
                <li>ขอแก้ไขข้อมูลที่ไม่ถูกต้อง</li>
                <li>ขอลบข้อมูลของคุณ</li>
                <li>คัดค้านการประมวลผลข้อมูล</li>
                <li>ขอถอนความยินยอม</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. การเปลี่ยนแปลงนโยบาย
              </h2>
              <p className="text-foreground/80">
                เราอาจปรับปรุงนโยบายความเป็นส่วนตัวนี้เป็นครั้งคราว
                เราจะแจ้งให้คุณทราบเกี่ยวกับการเปลี่ยนแปลงที่สำคัญผ่านทางเว็บไซต์หรืออีเมล
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. ติดต่อเรา</h2>
              <p className="text-foreground/80">
                หากคุณมีคำถามเกี่ยวกับนโยบายความเป็นส่วนตัวนี้
                กรุณาติดต่อเราได้ที่:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>อีเมล: privacy@mosoyodia.com</li>
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
