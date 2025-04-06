"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FiFilter, FiX, FiChevronDown, FiTag, FiHome } from "react-icons/fi";
import { API_BASE_URL } from "../../utils/config";

// สำหรับแปลงประเภทจากตัวเลขเป็นภาษาไทย
const categoryMapping = {
  0: "กิโมโน",
  1: "ยูกาตะ",
  2: "คอสเพลย์",
};

// สำหรับแปลงประเภท URL เป็นชื่อประเภทในภาษาไทย
const categoryNameMapping = {
  kimono: "กิโมโน",
  yukata: "ยูกาตะ",
  cosplay: "คอสเพลย์",
};

// สำหรับแปลงกลุ่มอายุเป็นภาษาไทย
const ageGroupMapping = {
  adult: "ผู้ใหญ่",
  child: "เด็ก",
  both: "ทุกช่วงอายุ",
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category;
  const categoryName = categoryNameMapping[categoryId] || "ไม่ระบุประเภท";

  const [costumes, setCostumes] = useState([]);
  const [filters, setFilters] = useState({
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

    // กรองตามประเภทที่กำหนดจาก URL parameter
    if (costume.category !== categoryName) return false;

    // กรองตามสถานะ
    if (filters.status !== "all") {
      if (filters.status === "available" && costume.status !== "available")
        return false;
      if (filters.status === "booked" && costume.status !== "booked")
        return false;
    }

    // กรองตามช่วงอายุ
    if (filters.ageGroup !== "all" && costume.ageGroup !== filters.ageGroup)
      return false;

    // กรองตามคำค้นหา
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
      status: "all",
      ageGroup: "all",
    });
    setSearchTerm("");
  };

  return (
    <div className="bg-[#f7f4ef] min-h-screen">
      <Navbar />
      <main>
        <div className="bg-[#e5e0d5] border-b border-[#c3b6a6]">
          <div className="container-custom mx-auto py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#4a4039]">
                {categoryName}
              </h1>
              <p className="text-[#4a4039]/80 max-w-2xl mx-auto">
                {categoryId === "kimono" &&
                  "ชุดญี่ปุ่นดั้งเดิมที่เป็นทางการ มีลวดลายสวยงามและความสำคัญทางวัฒนธรรมอันลึกซึ้ง"}
                {categoryId === "yukata" &&
                  "กิโมโนฤดูร้อนแบบลำลอง ทำจากผ้าฝ้ายน้ำหนักเบา เหมาะสำหรับเทศกาลและงานฤดูร้อน"}
                {categoryId === "cosplay" &&
                  "ชุดแฟนซีที่ได้แรงบันดาลใจจากตัวละครในอนิเมะ มังงะ วิดีโอเกม และวัฒนธรรมป๊อป"}
              </p>
            </motion.div>
          </div>
        </div>

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
            <span className="text-foreground/70">{categoryName}</span>
          </div>

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
                  className="py-3 px-4 bg-[#e74c3c] text-white rounded-md hover:bg-[#c0392b] transition-colors shadow-md font-medium flex items-center gap-2"
                >
                  <FiX className="stroke-2" />
                  รีเซ็ตตัวกรอง
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            <AnimatePresence>
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
            </AnimatePresence>
          </div>

          {/* Results info */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-foreground/70">
              {loading
                ? "กำลังโหลดข้อมูล..."
                : `แสดง ${filteredCostumes.length} ชุด ${categoryName}`}
            </p>
            <div className="flex flex-wrap gap-2">
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
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/costumes/${costume.id}`} className="block">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={costume.image}
                        alt={costume.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {costume.status === "booked" && (
                        <div className="absolute top-0 right-0 m-2 py-1 px-2 bg-[#e74c3c] text-white text-xs rounded-md">
                          จองแล้ว
                        </div>
                      )}
                      {costume.status === "available" && (
                        <div className="absolute top-0 right-0 m-2 py-1 px-2 bg-[#2ecc71] text-white text-xs rounded-md">
                          ว่าง
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
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
              <p className="text-lg mb-4">
                ไม่พบชุด{categoryName}ที่ตรงกับตัวกรองของคุณ
              </p>
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
