"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { galleries } from "../_utils/data";

export default function GallerySection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-dark">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-4 md:left-10 z-10 p-5 mix-blend-difference text-white">
          <h2 className="font-serif text-white/90 mb-4">
            Visual<br />Journey
          </h2>
          <p className="text-sm uppercase tracking-widest text-white/70 max-w-xs">
            Immerse yourself in the tranquility of Mandara.
          </p>
        </div>

        <motion.div style={{ x }} className="flex gap-10 px-4 md:px-20">
          {galleries.map((image, index) => (
            <div
              key={index}
              className="group relative h-[60vh] md:h-[80vh] w-[40vh] md:w-[60vh] shrink-0 overflow-hidden rounded-md bg-stone-800"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
