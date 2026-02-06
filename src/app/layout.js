import "./globals.css";
import WhatsAppButton from "./_components/WhatsAppButton.jsx";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default: "Mandara Women's Wellness",
    template: "%s | Mandara Women's Wellness",
  },
  description:
    "Mandara Women's Wellness is a premier postnatal care facility where medical excellence meets luxury hospitality. Holistic recovery for new mothers and babies.",
  keywords: ["Postnatal care", "Wellness clinic", "Luxury postnatal recovery", "New mother care"],
  metadataBase: new URL("https://mandarawellness.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mandara Women's Wellness",
    description: "Experience luxury postnatal recovery and holistic care for mothers and babies.",
    url: "https://mandarawellness.in/",
    siteName: "Mandara Wellness",
    images: [
      {
        url: "/assets/images/image1.webp",
        width: 1200,
        height: 630,
        alt: "Mandara Women's Wellness - Luxury Postnatal Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts - Playfair Display & Montserrat */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#051512] text-bage">
        {children}
        <WhatsAppButton />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}