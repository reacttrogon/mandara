"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reasons } from "../_utils/data";

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] text-dark/60 uppercase block mb-4"
            >
              The Mandara Difference
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-dark leading-none"
            >
              Why discerning <br />mothers choose us
            </motion.h2>
          </div>
          <div className="hidden md:block">
            <a href="#" className="group inline-flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-full hover:bg-gold transition-all duration-300">
              <span className="font-bold uppercase tracking-widest text-xs">View All Reasons</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">
          {reasons.slice(0, 7).map((reason, index) => {
            const isLarge = index === 0; // Only first one is 2 cols width
            const isTall = index === 5; // one tall item

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-none overflow-hidden bg-white ${isLarge ? "lg:col-span-2" : ""
                  } ${isTall ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`font-serif text-white mb-3 leading-tight ${isLarge ? "text-4xl" : "text-2xl"}`}>
                      {reason.title}
                    </h3>
                    <div className="h-[1px] w-full bg-white/30 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Experience the finest care with our dedicated team of experts.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card */}
          <motion.div
            className="lg:col-span-1 bg-cream border border-dark/10 p-8 flex flex-col justify-between group cursor-pointer hover:bg-gold transition-colors duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ArrowUpRight className="text-dark w-12 h-12 self-end transition-transform duration-500 group-hover:rotate-45 group-hover:text-white" />

            <div>
              <h3 className="text-dark font-serif text-3xl mb-2 group-hover:text-white">Start Your <br />Journey</h3>
              <p className="text-dark/60 text-sm font-sans group-hover:text-white/80">Book your consultation today.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

