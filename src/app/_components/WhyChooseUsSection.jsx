"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reasons } from "../_utils/data";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase block mb-3"
            >
              The Mandara Difference
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-tight"
            >
              Why discerning mothers choose Mandara
            </motion.h2>
          </div>
          <div className="mt-8 md:mt-0 hidden md:block">
            <a href="#" className="flex items-center gap-2 px-6 py-3 border border-stone-200 rounded-full hover:bg-stone-50 transition-colors group">
              <span className="text-stone-800 font-medium">View All Reasons</span>
              <ArrowUpRight className="w-4 h-4 text-stone-800 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {reasons.slice(0, 7).map((reason, index) => {
            // Make specific items span 2 columns or 2 rows for the "Bento" look
            // e.g., Item 0 (first) spans 2 cols, Item 4 spans 2 rows
            const isLarge = index === 0 || index === 3;
            const isTall = index === 4;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-3xl overflow-hidden bg-stone-100 ${isLarge ? "lg:col-span-2" : ""
                  } ${isTall ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className={`font-serif text-white mb-2 leading-tight ${isLarge ? "text-3xl" : "text-xl"}`}>
                    {reason.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-white/30 group-hover:bg-white group-hover:w-full transition-all duration-500 mt-4 origin-left" />
                </div>
              </motion.div>
            );
          })}
          <motion.div
            className="lg:col-span-1 bg-stone-900 rounded-3xl p-8 flex flex-col justify-center items-center text-center group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
              <ArrowUpRight className="text-white w-8 h-8" />
            </div>
            <h3 className="text-white font-serif text-xl">Discover More Benefits</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

