"use client";

import Image from "next/image";
import Header from "../_components/Header.jsx";
import ContactUs from "../_components/ContactUs.jsx";
import Footer from "../_components/Footer.jsx";

export default function BookingPage() {
  return (
    <main className="pt-0">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src="/assets/images/Gemini_Generated_Image_65l03u65l03u65l0.png"
          alt="Mandara Wellness Center"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-dark/50" />

      </section>

      {/* Contact Us Section */}
      <ContactUs />


      {/* Footer */}
      <Footer />
    </main>
  );
}
