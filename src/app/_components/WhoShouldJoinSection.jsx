"use client";

import { motion } from "framer-motion";
import { audience } from "../_utils/data";

export default function WhoShouldJoinSection() {
  return (
    <section className="py-14 md:py-20 bg-dark text-white relative overflow-hidden">

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/70 opacity-90 z-0" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-gold uppercase block mb-3">
            Exclusive Retreats
          </span>

          <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-tight">
            Who is Mandara for?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {audience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              className="relative group h-[480px] rounded-sm overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Subtle Border */}
              <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.div className="transition-transform duration-500 group-hover:-translate-y-2">

                  <div className="mb-4">
                    <h3 className="text-2xl  leading-snug mb-1">
                      {item.title}
                    </h3>

                    <div className="h-[2px] w-0 bg-gold group-hover:w-12 transition-all duration-500" />
                  </div>

                  <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                    Experience refined wellness designed for your lifestyle.
                  </p>

                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
