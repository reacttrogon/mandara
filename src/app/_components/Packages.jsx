"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";
import { packages } from "../_utils/data";

export default function PackagesSection() {
  return (
    <section className="py-12 md:py-24 bg-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.25em] text-gold uppercase block mb-6"
          >
            Postnatal Recovery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif mb-8 text-white leading-tight"
          >
            Curated Wellness <br /> <span className="text-white/20 italic">Journeys</span>
          </motion.h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col h-full bg-white/5 border border-white/10 overflow-hidden hover:border-gold/50 transition-colors duration-500"
            >
              {/* Image Header */}
              <div className="h-80 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10" />
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-6 right-6 z-20">
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-gold text-dark text-[10px] font-bold uppercase tracking-widest ">
                    <Star className="w-3 h-3 fill-dark" />
                    {pkg.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex flex-col flex-grow relative z-20 -mt-10">
                {/* Card Bg Fill for content */}
                <div className="absolute inset-0 bg-dark clip-path-slant-top transform -skew-y-3 origin-top-left z-[-1]" />

                <h3 className="font-serif mb-4 text-white group-hover:text-gold transition-colors duration-300">
                  {pkg.title}
                </h3>
                <div className="w-12 h-[2px] bg-white/20 mb-6" />
                <p className="text-white/60 text-sm mb-8 leading-relaxed font-sans">
                  {pkg.description}
                </p>

                <div className="mt-auto">
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-white/50">
                      <Check className="w-4 h-4 text-emerald" /> <span>Doctor Consultation</span>
                    </li>
                    <li className="flex items-center gap-3 text-sm text-white/50">
                      <Check className="w-4 h-4 text-emerald" /> <span>Ayurvedic Treatments</span>
                    </li>
                  </ul>
                  <button className="w-full py-4 border border-white/20 hover:bg-white hover:text-dark text-white uppercase text-xs font-bold tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
                    <span>View Package</span>
                    <ArrowRight className="w-4 h-4" />
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
