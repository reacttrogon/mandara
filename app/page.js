'use client'

import FontAwesome from '../components/FontAwesome'
import Header from '../components/Header'
import HeroSlider from '../components/HeroSlider'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import MarqueeSection from '../components/MarqueeSection'
import WhatWeOfferSection from '../components/WhatWeOfferSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import PackagesSection from '../components/PackagesSection'
import GallerySection from '../components/GallerySection'
import PricingSection from '../components/PricingSection'
import AppointmentSection from '../components/AppointmentSection'
import CounterSection from '../components/CounterSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Home() {
  return (
    <main className="pt-0">
      <FontAwesome />
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <MarqueeSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <PackagesSection />
      <GallerySection />
      <PricingSection />
      <AppointmentSection />
      <CounterSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </main>
  )
}
