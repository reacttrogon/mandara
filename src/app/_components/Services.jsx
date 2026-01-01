"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, galleries } from "../_utils/data";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  // Map services to images from the gallery for demo purposes
  // In a real app, you'd add 'image' to the service object in data.js
  const serviceImages = [
    galleries[0], // Diet Plans
    galleries[4], // Nutrition
    galleries[2], // Yoga
  ];

  return (
    <section className="py-24 bg-[#FAF5F2] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <span className="text-sm font-medium tracking-widest text-stone-500 uppercase block mb-3">
            Holistic Care
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-stone-800">
            Wellness Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Services List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative border-t border-stone-300 py-10 cursor-pointer transition-colors duration-300 ${activeService === index ? "border-stone-800" : "hover:border-stone-400"
                  }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xl font-serif transition-colors duration-300 ${activeService === index ? "text-stone-800" : "text-stone-400"
                    }`}>
                    {service.number}
                  </span>
                  <ArrowUpRight
                    className={`w-6 h-6 transition-transform duration-500 ${activeService === index ? "text-stone-800 rotate-45" : "text-stone-400 group-hover:text-stone-600"
                      }`}
                  />
                </div>

                <h3 className={`text-3xl md:text-4xl font-serif mb-4 transition-colors duration-300 ${activeService === index ? "text-stone-800" : "text-stone-500 group-hover:text-stone-700"
                  }`}>
                  {service.title}
                </h3>

                <motion.div
                  initial={false}
                  animate={{
                    height: activeService === index ? "auto" : 0,
                    opacity: activeService === index ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-stone-600 leading-relaxed max-w-md pb-2">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
            <div className="border-t border-stone-300" />
          </div>

          {/* Image Preview - Sticky on Desktop */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-[600px]">
            <div className="sticky top-24 w-full h-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeService}
                  src={serviceImages[activeService] || serviceImages[0]}
                  alt="Service Preview"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-stone-100 rounded-full">
                      <img
                        src={services[activeService].icon}
                        alt="Icon"
                        className="w-6 h-6 object-contain opacity-80"
                      />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-stone-500 mb-1">Featured Service</p>
                      <p className="font-serif text-lg text-stone-800">{services[activeService].title}</p>
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
