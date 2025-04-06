import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CostumeCategories from "./components/CostumeCategories";
import FeaturedCostumes from "./components/FeaturedCostumes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CostumeCategories />
        <FeaturedCostumes />
        <section className="py-16 japanese-pattern relative overflow-hidden">
          <div className="container-custom mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              เยี่ยมชมคาเฟ่และบาร์ของเรา
            </h2>
            <p className="max-w-2xl mx-auto text-foreground/80 mb-8">
              เพลิดเพลินกับชาญี่ปุ่นดั้งเดิม กาแฟ และเครื่องดื่มรีเฟรชต่างๆ
              ในคาเฟ่สไตล์ญี่ปุ่นแท้ๆ สถานที่ถ่ายรูปสวยๆ ในชุดที่คุณเช่า!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/tea-ceremony.png"
                  alt="พิธีชงชาแบบญี่ปุ่น"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      พิธีชงชา
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      สัมผัสประสบการณ์พิธีชงชาญี่ปุ่นแบบดั้งเดิมขณะสวมชุดกิโมโนหรือยูกาตะที่คุณเช่า
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/photo-area.png"
                  alt="มุมถ่ายภาพธีมญี่ปุ่น"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      มุมถ่ายภาพ
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      มุมถ่ายภาพมืออาชีพด้วยฉากหลังธีมญี่ปุ่นสำหรับภาพถ่ายที่น่าจดจำ
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/themed-drinks.png"
                  alt="เครื่องดื่มธีมญี่ปุ่น"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      เครื่องดื่มธีมพิเศษ
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      เพลิดเพลินกับเครื่องดื่มพิเศษที่ได้แรงบันดาลใจจากวัฒนธรรมญี่ปุ่นและอนิเมะ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
