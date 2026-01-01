"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { packages } from "../_utils/data";

export default function PackagesSection() {
  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.25em] text-stone-400 uppercase block mb-4"
          >
            Postnatal Recovery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-white"
          >
            Curated Wellness <br /> <span className="text-stone-500 italic">Journeys</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col h-full bg-stone-800/50 border border-stone-800 rounded-3xl overflow-hidden hover:border-stone-600 transition-colors duration-500"
            >
              {/* Image Header */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-stone-900/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-bold uppercase tracking-wider rounded-full">
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-3xl font-serif mb-2 text-white">
                  {pkg.title}
                </h3>
                <p className="text-stone-400 text-sm mb-8 leading-relaxed">
                  {pkg.description}
                </p>

                <div className="mt-auto border-t border-stone-800 pt-6">
                  <button className="w-full flex items-center justify-between text-sm font-medium uppercase tracking-wider text-stone-300 group-hover:text-white transition-colors">
                    <span>View Inclusions</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
