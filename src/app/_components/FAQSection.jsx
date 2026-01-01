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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-24">
              <span className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase block mb-4">
                Common Questions
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                Everything you need to know
              </h2>
              <p className="text-stone-500 text-lg mb-8 leading-relaxed">
                Understanding your stay with us is the first step to peace of mind. Here are answers to our most frequent inquiries.
              </p>
              <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-stone-100">
                {/* Placeholder for an image or pattern */}
                <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] opacity-10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-serif text-2xl text-stone-400 italic">Still have questions?</p>
                    <a href="#contact" className="text-stone-800 font-bold underline mt-2 inline-block">Contact Support</a>
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
                  className={`border-b border-stone-200 ${activeIndex === index ? 'pb-6' : 'pb-4'}`}
                >
                  <button
                    className="w-full flex justify-between items-start py-4 text-left group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`text-xl font-serif pr-8 transition-colors duration-300 ${activeIndex === index ? "text-stone-900" : "text-stone-600 group-hover:text-stone-800"}`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 mt-1">
                      {activeIndex === index ? (
                        <Minus className="w-5 h-5 text-stone-900" />
                      ) : (
                        <Plus className="w-5 h-5 text-stone-400 group-hover:text-stone-900 transition-colors" />
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
                        <p className="text-stone-500 leading-relaxed max-w-2xl pt-2">
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
