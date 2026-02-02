"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { audience } from "../_utils/data";

export default function WhoShouldJoinSection() {
  return (
    <section className="py-14 md:py-10 bg-bage text-dark relative overflow-hidden">

      <div className="container mx-auto px-4 md:px-10 relative z-10">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-light leading-tight whitespace-nowrap">
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
              className="relative group aspect-[3/4] rounded-sm overflow-hidden cursor-pointer"
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                loading="lazy"
                className="absolute inset-0 object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Subtle Border */}
              <div className="absolute inset-4 border border-bage/20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100" />

              {/* Content pinned to bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">

                <div className="transition-all duration-500">

                  <div className="mb-3">

                    <h3 className="text-xl md:text-2xl font-light text-bage leading-snug">
                      {item.title}
                    </h3>

                    <div className="h-[2px] w-0 bg-gold group-hover:w-12 transition-all duration-500 mt-2" />

                  </div>

                  <p className="text-sm text-bage/80 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-700">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
