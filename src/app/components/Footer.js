import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiInstagram,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#4a4039] text-white">
      <div className="container-custom mx-auto py-12">
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20 bg-[#e5e0d5] rounded-full p-2">
            <Image
              src="/RoundedLogo.png"
              alt="Moso-Yodia Logo"
              fill
              sizes="80px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#e5e0d5]">
              Moso-Yodia
            </h3>
            <p className="text-white/70 mb-4">
              ร้านให้เช่าชุดญี่ปุ่นแท้ คาเฟ่และบาร์ ที่มีบริการให้เช่าชุดกิโมโน,
              ยูกาตะ และคอสเพลย์ - เพื่อจองกรุณาติดต่อพนักงานที่หน้าทางเข้า
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  href="/costumes"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  ชุดทั้งหมด
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/kimono"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  กิโมโน
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/yukata"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  ยูกาตะ
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/cosplay"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  คอสเพลย์
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">ข้อมูลการติดต่อ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-[#baa89a]" />
                <span className="text-white/70">
                  123 ถนนสุขุมวิท ซอย 55
                  <br />
                  กรุงเทพฯ 10110
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-[#baa89a]" />
                <span className="text-white/70">+66 2-123-4567</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-[#baa89a]" />
                <a
                  href="mailto:info@mosoyodia.com"
                  className="text-white/70 hover:text-[#e5e0d5] transition-colors"
                >
                  info@mosoyodia.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">เวลาทำการ</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FiClock className="mt-1 mr-3 text-[#baa89a]" />
                <div>
                  <p className="text-white/70">วันจันทร์ - วันศุกร์</p>
                  <p className="font-medium">11:00 - 22:00 น.</p>
                </div>
              </li>
              <li className="flex items-start">
                <FiClock className="mt-1 mr-3 text-[#baa89a]" />
                <div>
                  <p className="text-white/70">วันเสาร์ - วันอาทิตย์</p>
                  <p className="font-medium">10:00 - 23:00 น.</p>
                </div>
              </li>
              <li className="text-white/70 mt-4 pt-4 border-t border-white/10">
                <p>การเช่าชุด: กรุณาติดต่อพนักงานที่หน้าทางเข้าเพื่อทำการจอง</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom mx-auto py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Moso-Yodia
              ร้านให้เช่าชุดคาเฟ่และบาร์ สงวนลิขสิทธิ์
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-white/70 text-sm hover:text-[#e5e0d5] transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </Link>
              <Link
                href="/terms"
                className="text-white/70 text-sm hover:text-[#e5e0d5] transition-colors"
              >
                ข้อกำหนดการใช้งาน
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
