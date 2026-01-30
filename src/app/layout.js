import "./globals.css";
import WhatsAppButton from "./_components/WhatsAppButton.jsx";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Mandara Women’s Wellness Center",
    template: "%s | Mandara Women’s Wellness Center",
  },
  description:
    "Mandara Women’s Wellness Center is a premier postnatal care facility where medical excellence meets luxury hospitality. Holistic recovery for new mothers and babies.",
  keywords: ["Postnatal care", "Wellness clinic", "Luxury postnatal recovery", "New mother care"],
  metadataBase: new URL("https://mandarawellness.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mandara Women’s Wellness Center",
    description: "Experience luxury postnatal recovery and holistic care for mothers and babies.",
    url: "https://mandarawellness.in/",
    siteName: "Mandara Wellness",
    images: [
      {
        url: "/assets/images/image1.webp",
        width: 1200,
        height: 630,
        alt: "Mandara Women’s Wellness Center - Luxury Postnatal Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className=" bg-[#051512] text-bage">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}