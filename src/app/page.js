"use client";

import Header from "./_components/Header.jsx";
import HeroSlider from "./_components/HeroSlider.jsx";
import AboutMandara from "./_components/AboutMandara";
import Services from "./_components/Services";
import WhatWeOfferSection from "./_components/WhatWeOfferSection.jsx";
import WhyChooseUsSection from "./_components/WhyChooseUsSection.jsx";
import GallerySection from "./_components/GallerySection.jsx";
import FAQSection from "./_components/FAQSection.jsx";
import AmenitiesSection from "./_components/AmenitiesSection.jsx";
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
      <Philosophy/>
      <VideoScrollSection />
      <Services />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <GallerySection />
      <FAQSection />
      <AmenitiesSection />
      <WhoShouldJoinSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
