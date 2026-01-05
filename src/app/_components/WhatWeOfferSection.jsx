"use client";

import { motion } from "framer-motion";
import { offerings } from "../_utils/data";

export default function WhatWeOfferSection() {
  return (
    <section id="amenities" className="py-14 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#BFA095] font-semibold block mb-2.5">
            Holistic Experience
          </span>

          {/* Heading — slightly increased */}
          <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl leading-tight">
            Mandara Amenities
          </h2>

          <p className="text-dark/60 mt-3 text-[14px] md:text-[15px]">
            Where wellness, comfort, and heartfelt care come together.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left — Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-6 bg-[#D8C5BA]/20 blur-2xl rounded-full" />

              <motion.img
                src="/assets/images/what-we-offer.webp"
                alt="Mandara"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[400px]"
              />
            </div>
          </div>

          {/* Right — Amenities */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E9DDD7]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F5EBE6] flex items-center justify-center mb-4">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-7 h-7 object-contain"
                  />
                </div>

                <h3 className="font-serif text-[18px] md:text-[20px] text-[#4A403A] mb-1.5">
                  {item.title}
                </h3>

                <p className="text-[13.5px] md:text-[14.5px] text-[#6E635C] leading-relaxed">
                  {item.description || "Experience refined wellness designed for your comfort and peace of mind."}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
