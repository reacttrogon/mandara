"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutMandara } from "../_utils/data";
import ReadMore from "./ReadMore";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMandara() {
  const sectionRef = useRef(null);
  const imageRefs = useRef([]);

  const { heading, descriptions, image } = aboutMandara || {};

  const stackImages = [
    image,
    "/assets/gallery/abouttt.png",
    "/assets/gallery/modern.png",
  ];

  const targetAngles = [5, -2, 0];

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, stackImages.length);

    const ctx = gsap.context(() => {
      /* ----------------------------
         Text animation
      ----------------------------- */
      gsap.from("[data-animate='text']", {
        opacity: 1,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });


      ScrollTrigger.matchMedia({

        /* ===== Desktop + Tablet ===== */
        "(min-width: 768px)": () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=100%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
            },
          });

          imageRefs.current.forEach((img, index) => {
            tl.fromTo(
              img,
              {
                yPercent: 50,
                rotate: targetAngles[index] - 10,
              },
              {
                yPercent: 0,
                rotate: targetAngles[index],
                ease: "power2.out",
              },
              index === 0 ? "0" : "-=0.3"
            );
          });
        },


      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bage overflow-hidden" id="about">
      <div className="min-h-screen flex items-center justify-center container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

          {/* Left content */}
          <div className="w-full md:w-1/2 z-10">
            <h2 data-animate="text" className="text-4xl md:text-6xl text-dark mb-8">
              {heading}
            </h2>

            <div data-animate="text" className="max-w-lg">
              <ReadMore
                text={descriptions.join("\n\n")}
                maxLines={8}
                textClassName="text-base text-dark/60 leading-relaxed"
              />
            </div>

          </div>

          {/* Right stacked images */}
          <div className="w-full md:w-[40%] h-[320px] sm:h-[360px] md:h-[500px] relative">
            <div className="relative w-full h-full">
              {stackImages.map((src, index) => (
                <div
                  key={index}
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="absolute inset-0 w-full h-full rounded-md overflow-hidden shadow-2xl"
                  style={{ zIndex: index + 10 }}
                >
                  <Image
                    src={src}
                    alt={`Mandara Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
