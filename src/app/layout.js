import { title } from "framer-motion/client";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metaData = {
  title: "Mandara Wellness Clinic",
  description:
    "Mandara Wellness Clinic is a premier postnatal care facility where medical excellence meets luxury hospitality. We provide new mothers and their babies with an unparalleled experience of comfort, care, and holistic recovery.",
  keywords: [
    "Postnatal care",
    "Wellness clinic",
    "Luxury postnatal recovery",
    "New mother care",
    "Holistic recovery clinic",
    "Mandara Wellness",
  ],
   openGraph: {
    title: "Mandara Wellness Clinic",
    description: "Mandara Wellness Clinic is a premier postnatal care facility where medical excellence meets luxury hospitality. We provide new mothers and their babies with an unparalleled experience of comfort, care, and holistic recovery.",
    url: "https://mandara-web.trogon.info/",
    siteName: "Mandara Wellness",
    images: [
      {
        url: "/assets/images/image1.webp", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} bg-[#051512]`}>
      <body>{children}</body>
    </html>
  );
}
