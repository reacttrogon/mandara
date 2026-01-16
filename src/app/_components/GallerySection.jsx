"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { galleries } from "../_utils/data";

export default function GallerySection() {
  const [scrollDistance, setScrollDistance] = useState(0);
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const calculateScrollDistance = () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const distance = contentWidth - containerWidth;

      setScrollDistance(Math.max(0, distance + 40));
    };

    // Calculate after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(calculateScrollDistance, 100);
    window.addEventListener("resize", calculateScrollDistance);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", calculateScrollDistance);
    };
  }, [galleries.length]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section id="gallery" className="bg-dark text-white">
      {/* Heading */}
      <div className="container mx-auto px-4 md:px-10 py-12 md:py-20">
        <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/60 font-medium block mb-2.5">
          Visual Journey
        </span>

        <h2 className=" text-3xl md:text-4xl lg:text-5xl leading-tight">
          A glimpse into tranquility
        </h2>

        <p className="text-white/60 text-[14px] md:text-[15px] mt-3 max-w-md">
          Discover calming spaces designed for rest, renewal, and silence.
        </p>
      </div>

      {/* ---------- Horizontal Scroll Section ---------- */}
      <section ref={targetRef} className="relative h-[250vh]">
        <div
          ref={containerRef}
          className="sticky top-[80px] md:top-[96px] flex h-[calc(100vh-80px)] md:h-[calc(100vh-96px)] items-center overflow-hidden"
        >
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

          {/* Scrolling Row */}
          <motion.div
            ref={contentRef}
            style={{ x }}
            className="flex gap-8 md:gap-12 px-6 md:px-20"
          >
            {galleries?.map((image, index) => (
              <div
                key={index}
                className="group relative h-[60vh] md:h-[78vh] w-[42vh] md:w-[60vh] shrink-0 overflow-hidden rounded-3xl"
              >
                <Image
                  src={image}
                  loading="lazy"
                  fill
                  alt={image}
                  quality={90}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className=" bg-black/30 border border-white/10 rounded-full px-4 py-2 text-white/80 text-[16px] tracking-wide">
                    Mandara Wellness Retreat
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
}
