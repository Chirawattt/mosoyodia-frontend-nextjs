import { Geist, Geist_Mono, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-ibm-plex-sans-thai",
  display: "swap",
});

export const metadata = {
  title: "Moso-Yodia ร้านให้เช่าชุดคาเฟ่และบาร์",
  description: "ร้านให้เช่าชุดญี่ปุ่นในบรรยากาศคาเฟ่และบาร์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexSansThai.variable} antialiased font-ibm-plex`}
      >
        {children}
      </body>
    </html>
  );
}
