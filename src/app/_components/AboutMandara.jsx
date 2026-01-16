"use client";

import Image from "next/image";
import { aboutMandara } from "../_utils/data";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMandara() {
  const sectionRef = useRef(null);

  const { label, heading, lead, description, buttonText, image } =
    aboutMandara || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation only
      gsap.from("[data-animate='text']", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 md:py-24 bg-cream"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="mb-4" data-animate="text">
              <span className="text-sm uppercase tracking-wider text-primary mb-2 inline-block">
                {label}
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl mb-6 text-dark"
              data-animate="text"
            >
              {heading}
            </h2>

            <p className="text-dark/80 mb-4" data-animate="text">
              {lead}
            </p>

            <p className="text-dark/80 mb-10" data-animate="text">
              {description}
            </p>

            <a
              href="#about"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors mb-4 whitespace-nowrap"
              data-animate="text"
            >
              {buttonText}
            </a>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2">
            <Image
              src={image}
              alt={label}
              className="w-full rounded-lg shadow-lg"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
