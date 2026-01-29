"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs, galleries } from "../../_utils/data";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";

export default function FAQPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // Filter FAQs to show mainly the ones not on the homepage (first 4 are on home)
    // "also show the remaining faq data only" -> slice(4) to end
    const remainingFaqs = faqs.slice(4);

    return (
        <>
            <Header isTransparent={true} />
            <main className="bg-bage min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-10 max-w-7xl">

                    <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

                        {/* --- LEFT PANEL: Sticky Header & Images --- */}
                        <div className="w-full lg:w-5/12">
                            <div className="sticky top-32 space-y-8">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
                                    Frequently Asked Questions
                                </h1>

                                <p className="text-dark/60 text-lg leading-relaxed max-w-md">
                                    Find detailed answers about your stay, specific therapies, and what to expect at Mandara.
                                </p>


                                {/* Contact CTA */}
                                <div className="pt-8">
                                    <p className="text-dark/60 mb-4 text-sm font-medium uppercase tracking-wider">Still have questions?</p>
                                    <a
                                        href="/contact"
                                        className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all uppercase tracking-widest text-sm font-bold shadow-lg"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT PANEL: Remaining FAQs --- */}
                        <div className="w-full lg:w-7/12">
                            <div className="space-y-2">
                                {remainingFaqs.map((faq, index) => (
                                    <div key={index} className="border-b border-dark/5 last:border-0">
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
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
