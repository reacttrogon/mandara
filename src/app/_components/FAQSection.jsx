"use client";

import Image from "next/image";
import Link from "next/link"
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
    <section className="py-20 md:py-24 bg-bage">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* --- LEFT PANEL --- */}
          <div className="w-full lg:w-5/12">
            <div className="sticky top-24 space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark leading-tight">
                Everything you need to know
              </h2>

              <p className="text-dark/60 text-lg leading-relaxed max-w-md">
                Understanding your stay with us is the first step to peace of
                mind. Here are answers to our most frequent inquiries.
              </p>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {/* Image 1 */}
                <div className="relative h-40 rounded-xl overflow-hidden shadow">
                  <Image
                    src={galleries?.[1]}
                    fill
                    alt="Mandara facility detail"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Image 2 */}
                <div className="relative h-40 rounded-xl overflow-hidden shadow">
                  <Image
                    src={galleries?.[2]}
                    fill
                    alt="Mandara facility detail"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT PANEL (ACCORDION) --- */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-2">
              {faqs.slice(0, 4).map((faq, index) => (
                <div
                  key={index}
                >
                  <button
                    className="w-full flex justify-between items-start py-6 text-left group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span
                      className={`text-md md:text-lg pr-8 transition-colors duration-300 font-normal ${activeIndex === index
                        ? "text-gold"
                        : "text-dark group-hover:text-gold/80"
                        }`}
                    >
                      {faq?.question}
                    </span>

                    <span className="flex-shrink-0 mt-1">
                      {activeIndex === index ? (
                        <Minus className="w-5 h-5 text-gold" />
                      ) : (
                        <Plus className="w-5 h-5 text-dark/40 group-hover:text-dark transition-colors" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-dark/70 leading-relaxed max-w-2xl pb-6 text-md md:text-lg">
                          {faq?.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              {/* View More Button */}
              <div className="pt-8 flex justify-center lg:justify-start mb-4">
                <Link
                  href="/faq"
                  className="inline-block px-8 py-3 border border-dark/20 rounded-full text-dark hover:bg-primary hover:text-bage hover:border-transparent transition-all duration-300 uppercase tracking-widest text-sm font-medium"
                >
                  View All FAQs
                </Link>
              </div>
              {/* Decorative Bottom Image */}
              <div className="relative mt-12 h-56 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={galleries?.[3]}
                  alt="Mandara peaceful atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}