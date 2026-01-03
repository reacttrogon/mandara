"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, galleries } from "../_utils/data";

export default function Services() {
  const activeIndex = 0; // Default active
  const [activeService, setActiveService] = useState(0);

  // Map services to images from the gallery for demo purposes
  const serviceImages = [
    galleries[0], // Diet Plans
    galleries[4], // Nutrition
    galleries[2], // Yoga
  ];

  return (
    <section className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="mb-12 md:mb-24 text-center md:text-left">
          <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase block mb-4">
            Holistic Care
          </span>
          <h2 className="font-serif text-dark">
            Wellness Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Services List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative border-t border-dark/10 py-12 cursor-pointer transition-all duration-500 ${activeService === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xl font-serif transition-colors duration-300 ${activeService === index ? "text-gold" : "text-dark/40"
                      }`}
                  >
                    {service.number}
                  </span>
                  <ArrowUpRight
                    className={`w-6 h-6 transition-transform duration-500 ${activeService === index
                      ? "text-gold rotate-45"
                      : "text-dark/40 group-hover:text-dark"
                      }`}
                  />
                </div>

                <h3
                  className={`text-3xl md:text-4xl font-serif mb-4 transition-colors duration-300 ${activeService === index ? "text-dark" : "text-dark/80"
                    }`}
                >
                  {service.title}
                </h3>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeService === index ? "auto" : 0,
                    opacity: activeService === index ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-dark/70 leading-relaxed max-w-md pb-2 font-sans">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
            <div className="border-t border-dark/10" />
          </div>

          {/* Image Preview - Sticky on Desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-[700px]">
            <div className="sticky top-24 w-full h-full rounded-none overflow-hidden shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeService}
                  src={serviceImages[activeService] || serviceImages[0]}
                  alt="Service Preview"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="bg-white/10 backdrop-blur-md p-8 border border-white/20 text-white">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/20 rounded-full">
                      <img
                        src={services[activeService].icon}
                        alt="Icon"
                        className="w-8 h-8 object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2">
                        Featured Service
                      </p>
                      <p className="font-serif text-2xl text-white">
                        {services[activeService].title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
