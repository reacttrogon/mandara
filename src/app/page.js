"use client";

import Header from "./_components/Header.jsx";
import HeroSlider from "./_components/HeroSlider.jsx";
import AboutMandara from "./_components/AboutMandara";
import GallerySection from "./_components/GallerySection.jsx";
import FAQSection from "./_components/FAQSection.jsx";
import WhoShouldJoinSection from "./_components/WhoShouldJoinSection.jsx";
import ContactUs from "./_components/ContactUs.jsx";
import Footer from "./_components/Footer.jsx";
import Philosophy from "./_components/Philosophy.jsx";
import VideoScrollSection from "./_components/VideoScrollSection.jsx";


export default function Home() {
  return (
    <main className="pt-0">
      <Header />
      <HeroSlider />
      <AboutMandara />
      <Philosophy />
      <VideoScrollSection />
      <GallerySection />
      <FAQSection />
      <WhoShouldJoinSection />
      <ContactUs />
      <Footer />

    </main>
  );
}
