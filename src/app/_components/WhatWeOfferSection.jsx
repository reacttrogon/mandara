"use client";

import { motion } from "framer-motion";
import { offerings } from "../_utils/data";

export default function WhatWeOfferSection() {
  return (
    <section className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-sm uppercase tracking-widest text-[#BFA095] mb-4 inline-block font-semibold">
            Holistic Experience
          </span>
          <h2 className="font-serif text-dark">
            Mandara Amenities
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Image */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 border border-[#DBC1B6]/30 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 border border-[#DBC1B6]/30 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <img
                src="/assets/images/what-we-offer.webp"
                alt="Center"
                className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="lg:hidden mb-12 flex justify-center">
            <img
              src="/assets/images/what-we-offer.webp"
              alt="Center"
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          </div>

          {/* Grid Layout that floats around center on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 relative z-10">
            {/* Lefter Col */}
            <div className="space-y-12 lg:space-y-24 flex flex-col justify-center">
              {offerings.slice(0, 3).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 lg:flex-row-reverse text-left lg:text-right group"
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-[#4A403A] group-hover:text-[#A67C52] transition-colors">{item.title}</h3>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Middle Col (Spacer for Desktop) */}
            <div className="hidden lg:block" />

            {/* Righter Col */}
            <div className="space-y-12 lg:space-y-24 flex flex-col justify-center">
              {offerings.slice(3, 6).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 text-left group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-[#4A403A] group-hover:text-[#A67C52] transition-colors">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

