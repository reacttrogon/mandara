"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { wellnessCategories, wellnessPackages } from "../../../_utils/wellnessPackages";
import { useRouter } from "next/navigation";

export default function WellnessBooking() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const scrollRef = useRef(null);
    const router = useRouter();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // Smooth scroll to content
        setTimeout(() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    const handleBack = () => {
        setSelectedCategory(null);
    }

    return (
        <section className="bg-bage min-h-screen">

            {/* 1. TOP IMAGE (Hero) */}
            <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
                <Image
                    src="/assets/gallery/banner-2.jpeg"
                    alt="Wellness Journey"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide mb-4">
                        Book Your Wellness Stay
                    </h1>
                </div>
            </div>

            <div ref={scrollRef} className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">

                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        /* STEP 1: CATEGORY SELECTION */
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-center max-w-3xl mb-16">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark mb-6">Seeking Wellness</h2>
                                <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed mb-8">
                                    Mandara offers restorative wellness stays for women, thoughtfully designed to support the body, mind, and the changing rhythms of life. Whether you are seeking renewed balance, gentle strengthening, or mindful care, your stay is shaped around where you are in this moment.
                                </p>
                                <div className="w-24 h-1 bg-primary mx-auto mb-10" />
                                <h3 className="text-2xl md:text-3xl font-serif text-dark/90 italic">
                                    What kind of wellness support are you seeking?
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {wellnessCategories.map((cat, index) => (
                                    <motion.button
                                        key={cat.id}
                                        whileHover={{ y: -10 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleCategorySelect(cat.title)}
                                        className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg text-left"
                                    >
                                        <Image
                                            src={cat.image}
                                            alt={cat.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <h4 className="text-2xl font-serif text-white mb-2">{cat.title}</h4>
                                            <p className="text-white/80 font-light text-base line-clamp-2">{cat.description}</p>
                                            <div className="mt-4 flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                                Select <span className="text-xl">→</span>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        /* STEP 2: PACKAGE LISTING */
                        <motion.div
                            key="packages"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header with Back Button */}
                            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span className="text-sm font-bold uppercase tracking-widest">Back to Categories</span>
                                </button>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark text-center">
                                    {selectedCategory} Packages
                                </h2>
                                <div className="w-32 hidden md:block"></div> {/* Spacer for centering */}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {wellnessPackages[selectedCategory]?.map((pkg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {/* Image with Badge */}
                                        <div className="relative h-56 w-full overflow-hidden">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.title}
                                                fill
                                                className="object-cover"
                                            />
                                            {/* Gold Duration Badge */}
                                            <div className="absolute top-4 right-4 bg-secondary text-dark text-xs font-bold px-4 py-2 uppercase tracking-wider">
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Title */}
                                            <h3 className="text-2xl font-serif text-dark mb-3">{pkg.title}</h3>

                                            {/* Description */}
                                            <p className="text-sm text-dark/70 mb-6 leading-relaxed">
                                                {pkg.description}
                                            </p>

                                            {/* Features with Checkmarks - Only if available */}
                                            {pkg.features && pkg.features.length > 0 && (
                                                <ul className="space-y-2 mb-6 flex-grow">
                                                    {pkg.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-dark/80">
                                                            <span className="text-dark mt-0.5">✓</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Green Button */}
                                            <button className="w-full mt-auto py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                                                VIEW PACKAGE <span className="text-base">→</span>
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
