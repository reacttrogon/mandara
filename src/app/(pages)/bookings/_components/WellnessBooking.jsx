"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { wellnessFlow } from "../../../_utils/wellnessPackages";
import { useRouter } from "next/navigation";

export default function WellnessBooking() {
    const [selectedMain, setSelectedMain] = useState(null);
    const [selectedSub, setSelectedSub] = useState(null);
    const scrollRef = useRef(null);
    const router = useRouter();

    const handleMainSelect = (category) => {
        // Prepare state separation for transition
        setSelectedMain(category);
        setSelectedSub(null);
        // Smooth scroll
        setTimeout(() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    const handleSubSelect = (sub) => {
        setSelectedSub(sub);
        setTimeout(() => {
            scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    const handleBack = () => {
        if (selectedSub) {
            setSelectedSub(null);
        } else {
            setSelectedMain(null);
        }
    };

    // Determine what to display based on selection state
    const currentPackages = selectedSub
        ? selectedSub.packages
        : selectedMain?.packages;

    const isPackageView = !!currentPackages;
    const isSubCategoryView = selectedMain && selectedMain.subCategories && !selectedSub;
    const isMainView = !selectedMain;

    const activeTitle = selectedSub ? selectedSub.title : selectedMain?.title;
    const activeDescription = selectedSub ? selectedSub.description : selectedMain?.description;

    return (
        <section className="bg-bage min-h-screen">

            {/* HERO SECTION */}
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
                    <h1 className="text-4xl md:text-6xl lg:text-7xl  text-white tracking-wide mb-4">
                        Book Your Wellness Stay
                    </h1>
                </div>
            </div>

            <div ref={scrollRef} className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">

                <AnimatePresence mode="wait">

                    {/* VIEW 1: MAIN SELECTION */}
                    {isMainView && (
                        <motion.div
                            key="main-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center"
                        >
                            <div className="text-center max-w-3xl mb-16">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl  text-dark mb-6">Begin Your Journey</h2>
                                <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed mb-8">
                                    Choose the wellness path that resonates with your current life stage.
                                </p>
                                <div className="w-24 h-1 bg-primary mx-auto" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                                {wellnessFlow.map((category) => (
                                    <motion.button
                                        key={category.id}
                                        whileHover={{ y: -10 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleMainSelect(category)}
                                        className="relative h-[450px] rounded-2xl overflow-hidden group shadow-lg text-left"
                                    >
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <h4 className="text-3xl  text-white mb-3">{category.title}</h4>
                                            <p className="text-white/80 font-light text-sm line-clamp-3 mb-4 leading-relaxed">
                                                {category.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                                                Explore <span className="text-xl">→</span>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* VIEW 2: SUB-CATEGORY SELECTION */}
                    {isSubCategoryView && (
                        <motion.div
                            key="sub-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full"
                        >
                            {/* Header with Back */}
                            <div className="flex flex-col items-center text-center mb-16 relative">
                                <button
                                    onClick={handleBack}
                                    className="absolute left-0 top-0 flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span className="hidden md:inline text-sm font-bold uppercase tracking-widest">Back</span>
                                </button>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl  text-dark mb-6 mt-12 md:mt-0">
                                    {selectedMain.title}
                                </h2>
                                <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-3xl mb-8">
                                    {selectedMain.description}
                                </p>
                                <div className="w-24 h-1 bg-primary mx-auto mb-10" />
                                <h3 className="text-2xl md:text-3xl  text-dark/90 italic">
                                    {selectedMain.question}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center">
                                {/* Centering logic for grid: if 2 items, centered. */}
                                {selectedMain.subCategories.map((sub) => (
                                    <motion.button
                                        key={sub.id}
                                        whileHover={{ y: -10 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleSubSelect(sub)}
                                        className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg text-left"
                                    >
                                        <Image
                                            src={sub.image}
                                            alt={sub.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <h4 className="text-2xl  text-white mb-2">{sub.title}</h4>
                                            {sub.description && (
                                                <p className="text-white/80 font-light text-sm line-clamp-2 mb-4">{sub.description}</p>
                                            )}
                                            <div className="mt-auto flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                                Select <span className="text-xl">→</span>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* VIEW 3: PACKAGES */}
                    {isPackageView && (
                        <motion.div
                            key="packages-view"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Header with Back Button */}
                            <div className="flex flex-col items-center justify-between mb-12 gap-6 relative">
                                <div className="w-full flex justify-between items-start md:items-center">
                                    <button
                                        onClick={handleBack}
                                        className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                                    >
                                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
                                    </button>
                                </div>

                                <div className="text-center max-w-4xl">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl  text-dark mb-4">
                                        {activeTitle} Packages
                                    </h2>
                                    {activeDescription && (
                                        <p className="text-dark/60 font-light leading-relaxed">
                                            {activeDescription}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {currentPackages.map((pkg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
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
                                            <div className="absolute top-4 right-4 bg-secondary text-dark text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-sm">
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            {/* Title */}
                                            <h3 className="text-2xl  text-dark mb-3">{pkg.title}</h3>

                                            {/* Description */}
                                            <p className="text-sm text-dark/70 mb-6 leading-relaxed">
                                                {pkg.description}
                                            </p>

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
