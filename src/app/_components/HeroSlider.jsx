"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { slides } from "../_utils/data";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-dark"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentSlide === 0}
            quality={80}
          />

          <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block mb-6 text-sm md:text-base font-bold tracking-[0.2em] text-white/90 uppercase border-b border-white/30 pb-2">
            {slides[currentSlide].subtitle}
          </span>

          <h1 className="font-serif text-white mb-8 leading-tight drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>

          <a
            href="#about"
            className="inline-block px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300 transform hover:scale-105"
          >
            Discover More
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative h-12 w-2 flex flex-col items-center justify-end overflow-hidden focus:outline-none"
          >
            <div
              className={`w-0.5 bg-white/30 transition-all duration-500 rounded-full ${
                index === currentSlide ? "h-12 bg-white" : "h-8"
              }`}
            />
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
