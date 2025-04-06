"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import CostumeDetail from "../../components/CostumeDetail";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { API_BASE_URL } from "../../utils/config";

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

export default function CostumePage() {
  const params = useParams();
  const [costume, setCostume] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewImages, setReviewImages] = useState([]);

  useEffect(() => {
    const fetchCostumeDetails = async () => {
      try {
        setLoading(true);

        // ดึงข้อมูลชุด (ใช้ API proxy)
        const costumeResponse = await fetch(`/api/costumes/${params.id}`);
        if (!costumeResponse.ok) {
          throw new Error(`Failed to fetch costume with ID ${params.id}`);
        }
        const costumeData = await costumeResponse.json();

        // ดึงรูปภาพรีวิวที่เกี่ยวข้องกับชุด (ใช้ API proxy)
        const reviewImagesResponse = await fetch(
          `/api/costumes/${params.id}/reviewImages`
        );
        let reviewImagesData = [];
        if (reviewImagesResponse.ok) {
          reviewImagesData = await reviewImagesResponse.json();
        }

        // แปลงข้อมูลให้เข้ากับรูปแบบของ component CostumeDetail
        const formattedCostume = {
          id: costumeData.id.toString(),
          name: costumeData.name,
          category: categoryMapping[costumeData.category] || "อื่นๆ",
          description: costumeData.description,
          longDescription:
            costumeData.long_description || costumeData.description,
          images: costumeData.image_path
            ? [
                `${API_BASE_URL}/uploads/${costumeData.image_path.replace(
                  /^uploads\//,
                  ""
                )}`,
                // ใช้รูปจากการรีวิวเพิ่มเติม (ถ้ามี)
                ...reviewImagesData
                  .slice(0, 3)
                  .map(
                    (img) =>
                      `${API_BASE_URL}/uploads/${img.image_path.replace(
                        /^uploads\//,
                        ""
                      )}`
                  ),
              ]
            : ["/images/costumes/placeholder.jpg"],
          rentalPrice: "250 บาท",
          rentalPeriod: "4 ชั่วโมง",
          status: costumeData.status === 1 ? "available" : "booked",
          size: costumeData.size || "S, M, L",
          specifications: [
            { label: "วัสดุ", value: costumeData.material || "ไม่ระบุ" },
            { label: "ขนาด", value: costumeData.size || "S, M, L" },
            {
              label: "กลุ่มอายุ",
              value: ageGroupMapping[costumeData.age_group] || "ไม่ระบุ",
            },
            {
              label: "รหัสชุด",
              value: costumeData.costume_code || costumeData.id,
            },
          ],
          accessories: [
            { name: "โอบิ (เข็มขัด)", price: "50 บาท" },
            { name: "รองเท้า", price: "50 บาท" },
            { name: "พัด", price: "30 บาท" },
            { name: "ร่ม", price: "50 บาท" },
          ],
          reviews: reviewImagesData.slice(0, 5).map((img, index) => ({
            id: `r${index + 1}`,
            user: img.reviewer_name || "ลูกค้า",
            rating: img.rating || Math.floor(Math.random() * 2) + 4, // สุ่มคะแนน 4-5 ดาว ถ้าไม่มีข้อมูล
            comment: img.review_text || "ชุดสวยมาก เช่าแล้วประทับใจ",
          })),
        };

        setCostume(formattedCostume);
        setReviewImages(reviewImagesData);
      } catch (error) {
        console.error("Error fetching costume details:", error);
        setError("ไม่สามารถดึงข้อมูลชุดได้ โปรดลองใหม่อีกครั้ง");
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchCostumeDetails();
    }
  }, [params.id]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {loading ? (
        <div className="container-custom mx-auto py-20 text-center">
          <p className="text-lg">กำลังโหลดข้อมูล...</p>
        </div>
      ) : error ? (
        <div className="container-custom mx-auto py-20 text-center">
          <p className="text-lg text-red-500">{error}</p>
          <a
            href="/costumes"
            className="inline-block mt-6 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md transition"
          >
            กลับไปยังรายการชุด
          </a>
        </div>
      ) : (
        <CostumeDetail costume={costume} />
      )}

      <Footer />
    </div>
  );
}
