import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiClock, FiMapPin, FiInfo, FiUsers } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative japanese-pattern py-16 overflow-hidden">
          <div className="container-custom mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              เกี่ยวกับ Moso-Yodia
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              ประสบการณ์การเช่าชุดญี่ปุ่นที่ไม่เหมือนใครในบรรยากาศคาเฟ่และบาร์ที่อบอุ่น
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-background">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about-story.png"
                  alt="ภายในคาเฟ่ Moso-Yodia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <FiInfo className="text-primary" />
                  เรื่องราวของเรา
                </h2>
                <p className="text-foreground/80 mb-4">
                  Moso-Yodia ก่อตั้งขึ้นในปี 2018
                  โดยทีมผู้หลงใหลในวัฒนธรรมญี่ปุ่นที่ต้องการสร้างพื้นที่ที่ผู้คนสามารถสัมผัสประสบการณ์ชุดญี่ปุ่นแบบดั้งเดิมในบรรยากาศที่ผ่อนคลายและทันสมัย
                </p>
                <p className="text-foreground/80 mb-4">
                  ชื่อ &ldquo;Moso-Yodia&rdquo; มาจากการผสมผสานคำในภาษาญี่ปุ่น
                  &ldquo;妄想&rdquo; (mōsō) ซึ่งหมายถึง &ldquo;จินตนาการ&rdquo;
                  หรือ &ldquo;ความฝัน&rdquo; และ &ldquo;淀屋&rdquo; (yodiya)
                  ซึ่งเป็นการอ้างอิงถึงพ่อค้ากิโมโนในประวัติศาสตร์
                  พันธกิจของเราคือการทำให้วัฒนธรรมชุดญี่ปุ่นเข้าถึงได้สำหรับทุกคนในรูปแบบที่สนุกและเป็นออริจินัล
                </p>
                <p className="text-foreground/80">
                  จากร้านเช่าเล็กๆ
                  ได้พัฒนามาเป็นสถานที่ที่ผู้คนชื่นชอบซึ่งผสมผสานบริการเช่าชุดกับคาเฟ่และบาร์
                  สร้างประสบการณ์ทางวัฒนธรรมญี่ปุ่นที่ครบครันสำหรับผู้มาเยือน
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cafe & Bar */}
        <section className="py-16 bg-light-muted">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">คาเฟ่และบาร์ของเรา</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                เพลิดเพลินกับเครื่องดื่มและขนมสไตล์ญี่ปุ่นในขณะที่สัมผัสวัฒนธรรมชุดแบบดั้งเดิม
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/japanese-sweets.png"
                  alt="ขนมญี่ปุ่นแบบดั้งเดิม"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      <span className="text-primary">和菓子</span> ขนมญี่ปุ่น
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      สัมผัสประสบการณ์วากาชิ (ขนมญี่ปุ่นแบบดั้งเดิม) แท้ๆ
                      เสิร์ฟพร้อมชาเขียวมัทฉะ ที่เตรียมตามวิธีการดั้งเดิม
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/dirty-popcorn.png"
                  alt="เครื่องดื่มธีมญี่ปุ่น"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      <span className="text-primary">お酒</span>{" "}
                      เครื่องดื่มธีมพิเศษ
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      บาร์ของเรามีทั้งเครื่องดื่มแอลกอฮอล์และไม่มีแอลกอฮอล์สไตล์ญี่ปุ่น
                      ตั้งแต่สาเกและอุเมะชุไปจนถึงค็อกเทลธีมอนิเมะสร้างสรรค์
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg shadow-md overflow-hidden relative h-80">
                <Image
                  src="/images/photo-area.png"
                  alt="พื้นที่ถ่ายภาพ"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-0">
                  <div className="bg-gradient-to-b from-black/100 to-transparent pt-4 pb-8 px-6 w-full">
                    <h3 className="text-xl font-bold text-white ml-6">
                      <span className="text-primary">写真</span> พื้นที่ถ่ายภาพ
                    </h3>
                  </div>
                  <div className="bg-gradient-to-t from-black/100 to-transparent pt-8 pb-4 px-6 w-full">
                    <p className="text-white/90 ml-6">
                      มุมถ่ายภาพสไตล์ญี่ปุ่นหลายจุดทั่วคาเฟ่ของเราให้ฉากหลังที่สมบูรณ์แบบสำหรับภาพถ่ายที่น่าจดจำในชุดที่คุณเช่า
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-cafe.png"
                alt="ภายในคาเฟ่ Moso-Yodia"
                fill
                sizes="(max-width: 1024px) 100vw, 100vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="py-16 bg-background">
          <div className="container-custom mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">มาเยี่ยมเรา</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                เรารอต้อนรับคุณที่ Moso-Yodia
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-light-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiMapPin className="text-primary" />
                  สถานที่และการติดต่อ
                </h3>

                <div className="space-y-4 mb-6">
                  <p className="flex items-start">
                    <span className="font-medium mr-2">ที่อยู่:</span>
                    <span className="text-foreground/80">
                      1-2-3 ชิบูย่า, ชิบูย่า-คุ
                      <br />
                      โตเกียว, ญี่ปุ่น 150-0002
                    </span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">โทรศัพท์:</span>
                    <span className="text-foreground/80">+81 3-1234-5678</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-medium mr-2">อีเมล:</span>
                    <span className="text-foreground/80">
                      info@mosoyodia.com
                    </span>
                  </p>
                </div>

                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4168.706214242373!2d100.61498427486573!3d14.275017082531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27758502d7465%3A0x2519a9c7b3612e53!2sMoso%20Yodia%20Cafe%20%26%20Bar!5e1!3m2!1sen!2sth!4v1743889714842!5m2!1sen!2sth"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="bg-light-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FiClock className="text-primary" />
                  เวลาทำการ
                </h3>

                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-medium mb-2">วันจันทร์ - วันศุกร์</h4>
                    <div className="flex justify-between text-foreground/80 border-b border-border pb-2">
                      <span>บริการเช่าชุด</span>
                      <span>11:00 น. - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between text-foreground/80 border-b border-border py-2">
                      <span>คาเฟ่</span>
                      <span>11:00 น. - 21:00 น.</span>
                    </div>
                    <div className="flex justify-between text-foreground/80 pt-2">
                      <span>บาร์</span>
                      <span>17:00 น. - 22:00 น.</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">วันเสาร์ - วันอาทิตย์</h4>
                    <div className="flex justify-between text-foreground/80 border-b border-border pb-2">
                      <span>บริการเช่าชุด</span>
                      <span>10:00 น. - 20:00 น.</span>
                    </div>
                    <div className="flex justify-between text-foreground/80 border-b border-border py-2">
                      <span>คาเฟ่</span>
                      <span>10:00 น. - 21:00 น.</span>
                    </div>
                    <div className="flex justify-between text-foreground/80 pt-2">
                      <span>บาร์</span>
                      <span>16:00 น. - 23:00 น.</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-foreground/60 italic">
                  * การเช่าชุดครั้งสุดท้ายรับได้ก่อนเวลาปิด 2 ชั่วโมง
                  แนะนำให้จองล่วงหน้าสำหรับวันหยุดสุดสัปดาห์และวันหยุดนักขัตฤกษ์
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 japanese-pattern relative overflow-hidden">
          <div className="container-custom mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">ทีมของเรา</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                พบกับคนที่หลงใหลเบื้องหลัง Moso-Yodia
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-8">
                <FiUsers size={28} className="text-primary" />
                <h3 className="text-2xl font-bold">
                  ทีมผู้เชี่ยวชาญด้านชุดญี่ปุ่น
                </h3>
              </div>

              <p className="text-foreground/80 mb-4">
                ทีมของเราประกอบด้วยผู้เชี่ยวชาญการสวมใส่กิโมโนที่ได้รับการรับรอง
                นักคอสเพลย์
                และผู้เชี่ยวชาญด้านวัฒนธรรมญี่ปุ่นที่หลงใหลในการแบ่งปันประสบการณ์ชุดญี่ปุ่นแท้ๆ
                กับผู้มาเยือน
              </p>
              <p className="text-foreground/80 mb-4">
                สมาชิกทุกคนในทีมผ่านการฝึกอบรมอย่างเข้มข้นเกี่ยวกับประวัติศาสตร์ชุดญี่ปุ่น
                เทคนิคการสวมใส่ที่ถูกต้อง และการบริการลูกค้า
                เพื่อให้มั่นใจว่าคุณจะได้รับประสบการณ์ที่สนุกและได้ความรู้
              </p>
              <p className="text-foreground/80">
                เราภูมิใจในการสร้างบรรยากาศที่อบอุ่นสำหรับทุกคน
                ไม่ว่าคุณจะเป็นผู้มาเยือนครั้งแรกหรือลูกค้าประจำ
                ทีมงานหลายภาษาของเราพร้อมช่วยเหลือคุณทั้งในภาษาอังกฤษ ญี่ปุ่น
                และภาษาอื่นๆ อีกหลายภาษา
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
