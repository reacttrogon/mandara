"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { reasons } from "../_utils/data";

export default function WhyChooseUsSection() {
  return (
    <section className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-xl">

            {/* Label */}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-dark/60 uppercase block mb-3"
            >
              The Mandara Difference
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-dark leading-tight text-3xl md:text-4xl lg:text-5xl"
            >
              Why discerning <br />mothers choose us
            </motion.h2>
          </div>

          {/* View All Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-full hover:bg-gold transition-all duration-300"
            >
              <span className="font-bold uppercase tracking-widest text-xs">
                View All Reasons
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[350px]">

          {reasons.slice(0, 7).map((reason, index) => {
            const isLarge = index === 0;
            const isTall = index === 5;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden bg-white 
                  ${isLarge ? "lg:col-span-2" : ""} 
                  ${isTall ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                    {/* Reason Title */}
                    <h3
                      className={`font-serif text-white mb-3 leading-tight 
                      ${isLarge ? "text-[30px] md:text-[34px]" : "text-[20px] md:text-[22px]"}`}
                    >
                      {reason.title}
                    </h3>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-white/30 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Description */}
                    <p className="text-white/80 text-[13.5px] md:text-[14.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      Experience the finest care with our dedicated team of experts.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CTA Card (Fixed Contrast) */}
          <motion.div
            className="lg:col-span-1 bg-cream border border-dark/10 p-8 flex flex-col justify-between group cursor-pointer hover:bg-gold transition-colors duration-500"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ArrowUpRight className="text-dark w-12 h-12 self-end transition-transform duration-500 group-hover:rotate-45" />

            <div>
              <h3 className="text-dark font-serif text-[26px] md:text-[30px] mb-2">
                Start Your <br />Journey
              </h3>

              <p className="text-dark/60 text-[14px] font-sans">
                Book your consultation today.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
