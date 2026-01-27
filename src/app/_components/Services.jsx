"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services, galleries } from "../_utils/data";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const serviceImages = [galleries[0], galleries[4], galleries[2]];

  return (
    <section className="py-8 md:py-16 bg-bage overflow-hidden relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">

          {/* Increased */}
          <h2 className=" text-dark text-3xl md:text-4xl lg:text-5xl leading-tight">
            Wellness Services
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Services List */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`group relative py-6 cursor-pointer transition-all duration-500 
                ${activeService === index
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                  }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="flex items-center justify-between mb-2">
                  {/* Increased */}
                  <span
                    className={`text-[20px] md:text-[22px]  transition-colors duration-300 
                    ${activeService === index ? "text-gold" : "text-dark/40"}`}
                  >
                    {service.number}
                  </span>

                  <ArrowUpRight
                    className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 
                    ${activeService === index
                        ? "text-gold rotate-45"
                        : "text-dark/40 group-hover:text-dark"
                      }`}
                  />
                </div>

                {/* Increased */}
                <h3
                  className={`text-[26px] md:text-[34px]  mb-2 transition-colors duration-300 
                  ${activeService === index ? "text-dark" : "text-dark/80"}`}
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
                  {/* Slightly larger body */}
                  <p className="text-dark/70 leading-relaxed max-w-md pb-1.5 text-[15.5px] md:text-[16px] ">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Image Preview */}
          <div className="hidden lg:block w-full lg:w-1/2 relative h-[520px]">
            <div className="sticky top-16 w-full h-full overflow-hidden shadow-2xl">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0.8, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={serviceImages[activeService]}
                    alt="Service Preview"
                    fill
                    className="object-cover  "
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="bg-white/10 backdrop-blur-md p-5 border border-white/20 text-white">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-full">
                      <img
                        src={services[activeService].icon}
                        alt="Icon"
                        className="w-7 h-7 object-contain brightness-0 invert"
                      />
                    </div>

                    <div>
                      {/* Slight increase */}
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
                        Featured Service
                      </p>

                      {/* Increased */}
                      <p className=" text-[22px] text-white">
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
