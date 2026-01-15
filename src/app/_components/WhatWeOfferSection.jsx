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
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="absolute -inset-6 bg-[#D8C5BA]/20 blur-2xl rounded-full" />

              <motion.img
                src="/assets/images/bath.png"
                alt="Mandara"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px] md:h-[600px]"
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
                style={{
                  backgroundImage: `url(${item?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
                className="group relative rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-[#E9DDD7] overflow-hidden min-h-[200px] flex flex-col justify-end"
              >
                {/* Initial subtle blur overlay */}
                <div className="absolute inset-0 bg-black/10 " />
                
                {/* Dark Overlay for text readability - appears on hover with smooth animation */}
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
                
                {/* Content Container - positioned at bottom */}
                <div className="relative z-10 flex flex-col">
                  {/* Description - initially hidden, slides up on hover */}
                  <div className="transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out mb-3">
                    <p className="text-[13.5px] md:text-[14.5px] text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {item?.description}
                    </p>
                  </div>

                  {/* Heading - Always visible at bottom */}
                  <h3 className="font-serif text-[18px] md:text-[20px] text-white">
                    {item?.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
