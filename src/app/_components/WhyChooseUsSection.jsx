"use client";

import { motion } from "framer-motion";
import { reasons } from "../_utils/data";

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-24 bg-[#F9F6F0] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-[#1A1A1A] leading-tight text-3xl md:text-4xl lg:text-5xl"
            >
              Why discerning <br /> mothers choose us
            </motion.h2>
          </div>
        </div>

        {/* 
            BENTO GRID: 
            With 6 images, we make index 0 and index 5 "Wide" (col-span-2).
            Total units: 2 (Wide) + 1 + 1 + 1 + 1 + 2 (Wide) = 8 units.
            In a 4-column grid, this creates 2 perfectly full rows.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[320px]">
          
          {reasons.slice(0, 6).map((reason, index) => {
            // Pattern: First and Last images are wide for a balanced "S" shape
            const isWide = index === 0 || index === 5;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl bg-white 
                  ${isWide ? "md:col-span-2" : "col-span-1"}`}
              >
                {/* Image Component */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3
                      className={`font-serif text-white leading-tight transition-all
                      ${isWide ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}
                    >
                      {reason.title}
                    </h3>

                    {/* Animated Line */}
                    <div className="h-[1px] w-full bg-white/40 my-3 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    {/* Description */}
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 line-clamp-2">
                      {reason.description || "Experience the finest holistic care tailored specifically for your motherhood journey."}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}