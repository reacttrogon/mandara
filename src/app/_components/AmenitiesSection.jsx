"use client";

import { motion } from "framer-motion";
import { galleries } from "../_utils/data";

export default function AmenitiesSection() {

  const amenities = [
    {
      image: galleries[0],
      title: "Concierge Team",
      description: "24/7 dedicated support",
    },
    {
      image: galleries[1],
      title: "Expert Therapy",
      description: "Ayurvedic & Modern",
    },
    {
      image: galleries[2],
      title: "Yoga & Pilates",
      description: "Restorative Movement",
    },
    {
      image: galleries[3],
      title: "Wellness Heads",
      description: "On-site Leadership",
    },
    {
      image: galleries[4],
      title: "Medical Experts",
      description: "Doctors & Pediatricians",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-gold uppercase block mb-3">
              Premium Facilities
            </span>

            <h2 className="font-serif text-dark text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
              A Premium Ecosystem of Care
            </h2>

            <p className="text-dark/60 text-[15px] leading-relaxed font-sans">
              We integrate medical expertise with holistic wellness, ensuring every detail is looked after.
            </p>
          </div>

          <a
            href="#"
            className="inline-block px-8 py-4 border border-dark/20 rounded-full text-dark hover:bg-dark hover:text-white transition-all duration-300 uppercase text-[11px] tracking-[0.15em] font-bold"
          >
            View All Features
          </a>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group rounded-3xl overflow-hidden shadow-sm"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-white text-lg mb-1">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
