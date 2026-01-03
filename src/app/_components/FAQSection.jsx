"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs, galleries } from "../_utils/data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-cream">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* LEFT PANEL */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-24 space-y-8">

              {/* Label */}
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase block">
                Common Questions
              </span>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark leading-tight">
                Everything you need to know
              </h2>

              {/* Description */}
              <p className="text-dark/60 text-lg leading-relaxed font-sans max-w-md">
                Understanding your stay with us is the first step to peace of mind.
                Here are answers to our most frequent inquiries.
              </p>

              {/* Image Grid (kept, looks premium) */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="h-40 rounded-2xl overflow-hidden shadow">
                  <img
                    src={galleries[1]}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="h-40 rounded-2xl overflow-hidden shadow">
                  <img
                    src={galleries[2]}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL – ACCORDION */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`border-b border-dark/10 ${activeIndex === index ? "pb-8" : "pb-6"
                    }`}
                >

                  {/* Question */}
                  <button
                    className="w-full flex justify-between items-start py-3 text-left group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span
                      className={`text-xl font-serif pr-8 transition-colors duration-300 ${activeIndex === index
                        ? "text-gold"
                        : "text-dark group-hover:text-gold/80"
                        }`}
                    >
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

                  {/* Answer */}
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

              {/* Decorative Bottom Image */}
              <div className="mt-10 h-56 rounded-3xl overflow-hidden shadow-md">
                <img
                  src={galleries[3]}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
