"use client";

import Header from "./_components/Header";
import HeroSlider from "./_components/HeroSlider";
import AboutMandara from "./_components/AboutMandara";
import Services from "./_components/Services";
import MarqueeSection from "./_components/MarqueeSection.jsx";
import WhatWeOfferSection from "./_components/WhatWeOfferSection.jsx";
import WhyChooseUsSection from "./_components/WhyChooseUsSection.jsx";
import Packages from "./_components/Packages.jsx";
import GallerySection from "./_components/GallerySection.jsx";
import FAQSection from "./_components/FAQSection.jsx";
import AmenitiesSection from "./_components/AmenitiesSection";
import WhoShouldJoinSection from "./_components/WhoShouldJoinSection.jsx";
import Footer from "./_components/Footer.jsx";
import WhatsAppFloat from "./_components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="pt-0">
      <Header />
      <HeroSlider />
      <AboutMandara />
      <Services />
      <MarqueeSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <Packages />
      <GallerySection />
      <FAQSection />
      <AmenitiesSection />
      <WhoShouldJoinSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
