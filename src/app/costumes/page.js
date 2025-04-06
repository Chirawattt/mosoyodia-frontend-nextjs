"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiFilter, FiX, FiChevronDown, FiTag } from "react-icons/fi";
import { API_BASE_URL } from "../utils/config";

// สำหรับแปลงประเภทจากตัวเลขเป็นภาษาไทย
const categoryMapping = {
  0: "กิโมโน",
  1: "ยูกาตะ",
  2: "คอสเพลย์",
};

// สำหรับแปลงกลุ่มอายุเป็นภาษาไทย
const ageGroupMapping = {
  adult: "ผู้ใหญ่",
  child: "เด็ก",
  both: "ทุกช่วงอายุ",
};

export default function CostumesPage() {
  const [costumes, setCostumes] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    status: "all",
    ageGroup: "all",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // ดึงข้อมูลชุดทั้งหมดเมื่อโหลดหน้า
  useEffect(() => {
    const fetchCostumes = async () => {
      try {
        setLoading(true);
        // ใช้ API proxy เพื่อหลีกเลี่ยงปัญหา CORS
        const response = await fetch(`/api/costumes`);
        if (!response.ok) {
          throw new Error("Failed to fetch costumes");
        }
        const data = await response.json();

        // แปลงข้อมูลให้เข้ากับรูปแบบของแอป
        const formattedData = data
          .map((costume) => {
            // ตรวจสอบว่า costume มีค่าหรือไม่
            if (!costume) return null;

            return {
              id: costume.id ? costume.id.toString() : "",
              name: costume.name || "ไม่ระบุชื่อ",
              category: categoryMapping[costume.category] || "อื่นๆ",
              description: costume.description || "ไม่มีคำอธิบาย",
              image: costume.image_path
                ? `${API_BASE_URL}/uploads/${costume.image_path.replace(
                    /^uploads\//,
                    ""
                  )}`
                : "/images/costumes/placeholder.jpg",
              status: costume.status === 1 ? "available" : "booked",
              isRentable: costume.isRentable || false,
              ageGroup: ageGroupMapping[costume.age_group] || "ไม่ระบุ",
            };
          })
          .filter((costume) => costume !== null);

        setCostumes(formattedData);
      } catch (error) {
        console.error("Error fetching costumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCostumes();
  }, []);

  const filteredCostumes = costumes.filter((costume) => {
    // ตรวจสอบว่า costume มีค่าหรือไม่
    if (!costume) return false;

    // Filter by category
    if (filters.category !== "all" && costume.category !== filters.category)
      return false;

    // Filter by status
    if (filters.status !== "all") {
      if (filters.status === "available" && costume.status !== "available")
        return false;
      if (filters.status === "booked" && costume.status !== "booked")
        return false;
    }

    // Filter by age group
    if (filters.ageGroup !== "all" && costume.ageGroup !== filters.ageGroup)
      return false;

    // Filter by search term
    if (searchTerm) {
      const name = costume.name || "";
      const description = costume.description || "";
      const searchTermLower = searchTerm.toLowerCase();

      if (
        !name.toLowerCase().includes(searchTermLower) &&
        !description.toLowerCase().includes(searchTermLower)
      ) {
        return false;
      }
    }

    return true;
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      category: "all",
      status: "all",
      ageGroup: "all",
    });
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-8 pb-16">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              เลือกชมคอลเลคชั่นชุดของเรา
            </h1>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              สำรวจชุดญี่ปุ่นแท้หลากหลายประเภทที่พร้อมให้บริการเช่า -
              เพื่อจองกรุณาติดต่อพนักงานที่หน้าทางเข้า
            </p>
          </div>

          <div className="bg-[#e5e0d5] rounded-lg p-6 shadow-lg mb-10 text-center text-[#4a4039] border-2 border-[#e74c3c] transform hover:scale-[1.01] transition-transform">
            <div className="flex justify-center mb-3">
              <span className="bg-[#e74c3c] text-white px-4 py-1.5 rounded-full font-medium inline-block -mt-10 shadow-md text-sm">
                ข้อมูลสำคัญ
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#e74c3c] flex items-center justify-center">
              <FiTag className="mr-2" />
              ราคาเช่าชุด
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-inner mb-3">
              <p className="font-medium">
                ทุกชุดราคาเช่าเท่ากัน{" "}
                <span className="text-2xl font-bold text-[#e74c3c]">
                  250 บาท
                </span>{" "}
                ต่อชุด
              </p>
            </div>
            <div className="bg-white/80 p-3 rounded-lg">
              <p className="font-medium text-sm">
                <span className="text-[#e74c3c] font-bold">บริการเสริม</span>{" "}
                (คิดค่าบริการเพิ่ม):
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                <span className="bg-white py-1 px-3 rounded-full text-sm border border-[#e74c3c]/20 shadow-sm">
                  โอบิ (50฿)
                </span>
                <span className="bg-white py-1 px-3 rounded-full text-sm border border-[#e74c3c]/20 shadow-sm">
                  รองเท้า (50฿)
                </span>
                <span className="bg-white py-1 px-3 rounded-full text-sm border border-[#e74c3c]/20 shadow-sm">
                  พัด (30฿)
                </span>
                <span className="bg-white py-1 px-3 rounded-full text-sm border border-[#e74c3c]/20 shadow-sm">
                  ร่ม (50฿)
                </span>
              </div>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="ค้นหาชุด..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-3 px-4 pr-10 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
                  >
                    <FiX />
                  </button>
                )}
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center justify-center gap-2 py-3 px-4 bg-light-muted rounded-md border border-border"
              >
                <FiFilter />
                ตัวกรอง
                <FiChevronDown
                  className={`transition ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex items-center gap-4">
                <div>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="py-3 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="all">ทุกประเภท</option>
                    <option value="กิโมโน">กิโมโน</option>
                    <option value="ยูกาตะ">ยูกาตะ</option>
                    <option value="คอสเพลย์">คอสเพลย์</option>
                  </select>
                </div>

                <div>
                  <select
                    value={filters.status}
                    onChange={(e) =>
                      handleFilterChange("status", e.target.value)
                    }
                    className="py-3 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="all">ทุกสถานะ</option>
                    <option value="available">ว่าง</option>
                    <option value="booked">จองแล้ว</option>
                  </select>
                </div>

                <div>
                  <select
                    value={filters.ageGroup}
                    onChange={(e) =>
                      handleFilterChange("ageGroup", e.target.value)
                    }
                    className="py-3 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="all">ทุกช่วงอายุ</option>
                    <option value="ผู้ใหญ่">ผู้ใหญ่</option>
                    <option value="เด็ก">เด็ก</option>
                    <option value="ทุกช่วงอายุ">เหมาะกับทุกวัย</option>
                  </select>
                </div>

                <button
                  onClick={resetFilters}
                  className="flex items-center gap-1 py-2 px-4 bg-[#e74c3c]/10 text-[#e74c3c] rounded-md hover:bg-[#e74c3c]/20 transition-colors border border-[#e74c3c]/30 font-medium shadow-sm hover:shadow"
                >
                  <FiX className="stroke-2" />
                  รีเซ็ตตัวกรอง
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 p-4 bg-light-muted rounded-md border border-border"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ประเภท
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) =>
                        handleFilterChange("category", e.target.value)
                      }
                      className="w-full py-2 px-3 rounded-md border border-border bg-background focus:outline-none"
                    >
                      <option value="all">ทุกประเภท</option>
                      <option value="กิโมโน">กิโมโน</option>
                      <option value="ยูกาตะ">ยูกาตะ</option>
                      <option value="คอสเพลย์">คอสเพลย์</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      สถานะ
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                      className="w-full py-2 px-3 rounded-md border border-border bg-background focus:outline-none"
                    >
                      <option value="all">ทุกสถานะ</option>
                      <option value="available">ว่าง</option>
                      <option value="booked">จองแล้ว</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      ช่วงอายุ
                    </label>
                    <select
                      value={filters.ageGroup}
                      onChange={(e) =>
                        handleFilterChange("ageGroup", e.target.value)
                      }
                      className="w-full py-2 px-3 rounded-md border border-border bg-background focus:outline-none"
                    >
                      <option value="all">ทุกช่วงอายุ</option>
                      <option value="ผู้ใหญ่">ผู้ใหญ่</option>
                      <option value="เด็ก">เด็ก</option>
                      <option value="ทุกช่วงอายุ">เหมาะกับทุกวัย</option>
                    </select>
                  </div>

                  <button
                    onClick={resetFilters}
                    className="w-full py-2.5 text-center flex items-center justify-center gap-2 text-white bg-[#e74c3c] rounded-md hover:bg-[#c0392b] transition-colors shadow-md font-medium"
                  >
                    <FiX className="stroke-2" />
                    รีเซ็ตตัวกรอง
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-foreground/70">
              แสดง {filteredCostumes.length} จาก {costumes.length} ชุด
            </p>
            <div className="flex flex-wrap gap-2">
              {filters.category !== "all" && (
                <span className="inline-flex items-center gap-1 py-1 px-3 bg-primary/10 text-primary rounded-full text-sm">
                  {filters.category}
                  <button onClick={() => handleFilterChange("category", "all")}>
                    <FiX size={14} />
                  </button>
                </span>
              )}
              {filters.status !== "all" && (
                <span className="inline-flex items-center gap-1 py-1 px-3 bg-primary/10 text-primary rounded-full text-sm">
                  {filters.status === "available" ? "ว่าง" : "จองแล้ว"}
                  <button onClick={() => handleFilterChange("status", "all")}>
                    <FiX size={14} />
                  </button>
                </span>
              )}
              {filters.ageGroup !== "all" && (
                <span className="inline-flex items-center gap-1 py-1 px-3 bg-primary/10 text-primary rounded-full text-sm">
                  {filters.ageGroup}
                  <button onClick={() => handleFilterChange("ageGroup", "all")}>
                    <FiX size={14} />
                  </button>
                </span>
              )}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-16">
              <p className="text-lg">กำลังโหลดข้อมูล...</p>
            </div>
          ) : filteredCostumes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCostumes.map((costume, index) => (
                <motion.div
                  key={costume.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link href={`/costumes/${costume.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={costume.image}
                        alt={costume.name}
                        fill
                        priority={index < 4}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
                        <span className="inline-block py-1 px-2 rounded text-xs text-white bg-primary/80 mb-1">
                          {costume.category}
                        </span>
                        <h3 className="text-white font-bold truncate">
                          {costume.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
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
          ) : (
            <div className="text-center py-16 bg-light-muted rounded-lg">
              <p className="text-lg mb-4">ไม่พบชุดที่ตรงกับตัวกรองของคุณ</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-6 text-white bg-[#e74c3c] rounded-md hover:bg-[#c0392b] transition-colors shadow-md font-medium"
              >
                <FiX className="stroke-2" />
                รีเซ็ตตัวกรอง
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
