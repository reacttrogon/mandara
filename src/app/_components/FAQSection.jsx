"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../_utils/data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Content with Image Fill */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-24">
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase block mb-4">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6 leading-tight">
                Everything you need to know
              </h2>
              <p className="text-dark/60 text-lg mb-8 leading-relaxed font-sans">
                Understanding your stay with us is the first step to peace of mind. Here are answers to our most frequent inquiries.
              </p>

              {/* Image Card */}
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src="/assets/images/couple-abt.webp"
                  alt="Couple Relaxing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white bg-white/10 backdrop-blur-md p-6 border border-white/20">
                    <p className="font-serif text-2xl italic mb-2">Still have questions?</p>
                    <a href="#contact" className="text-sm font-bold uppercase tracking-widest hover:text-gold transition-colors inline-block border-b border-white hover:border-gold pb-1">Contact Support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`border-b border-dark/10 ${activeIndex === index ? 'pb-8' : 'pb-6'}`}
                >
                  <button
                    className="w-full flex justify-between items-start py-2 text-left group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`text-xl font-serif pr-8 transition-colors duration-300 ${activeIndex === index ? "text-gold" : "text-dark group-hover:text-gold/80"}`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      {activeIndex === index ? (
                        <Minus className="w-5 h-5 text-gold" />
                      ) : (
                        <Plus className="w-5 h-5 text-dark/40 group-hover:text-dark transition-colors" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-dark/70 leading-relaxed max-w-2xl pt-4 font-sans">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
