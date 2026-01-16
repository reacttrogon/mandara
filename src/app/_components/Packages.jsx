"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { getPackages } from "../_api/packages/getPackages";

export default function Packages() {
  const [packages, SetPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPackages();
        SetPackages(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="packages" className="py-10 md:py-16 bg-dark text-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-gold font-semibold block mb-2.5">
            Postnatal Recovery
          </span>

          <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-tight">
            Curated Wellness Journeys
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {packages?.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-gold/40 
              transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64">
                <img
                  src={pkg?.images}
                  alt={pkg?.title}
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase font-bold bg-gold text-dark tracking-widest">
                  {pkg?.duration_days} DAYS
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className=" text-[20px] md:text-[22px] mb-2">
                  {pkg?.title}
                </h3>

                <p className="text-white/70 text-[14px] leading-relaxed mb-6">
                  {pkg?.description}
                </p>

                {pkg?.includes?.map((item, i) => {
                  return (
                    <ul className="space-y-2 text-[14px] text-white/70" key={i}>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald" />
                        {item}
                      </li>
                    </ul>
                  );
                })}

                {/* Push button to bottom */}
                <div className="mt-auto pt-6">
                  <button className="w-full py-3 border bg-white text-dark border-white/20 hover:bg-primary hover:text-white transition-all duration-300 text-[11px] tracking-[0.15em] uppercase flex items-center justify-center gap-2">
                    View Package
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
