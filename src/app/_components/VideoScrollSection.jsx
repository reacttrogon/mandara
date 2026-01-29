"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hasPlayedRef = useRef(false);

  // configuration to control initial dimensions
  const config = {
    desktop: { width: "50vw", height: "25vw" },
    tablet: { width: "40vw", height: "22.5vw" },
    mobile: { width: "90vw", height: "50.6vw" },
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (video) video.pause();

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1024px)": function () {
          setupScrollAnimation(config.desktop.width, config.desktop.height);
        },
        // Tablet
        "(min-width: 768px) and (max-width: 1023px)": function () {
          setupScrollAnimation(config.tablet.width, config.tablet.height);
        },
        // Mobile
        "(max-width: 767px)": function () {
          gsap.set(containerRef.current, {
            width: config.mobile.width,
            height: config.mobile.height,
            borderRadius: "1rem",
          });
        },
      });

      function setupScrollAnimation(initialWidth, initialHeight) {
        // Set initial state
        gsap.set(containerRef.current, {
          width: initialWidth,
          height: initialHeight,
          borderRadius: "1.5rem",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=550%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            onUpdate: (self) => {
              if (self.progress >0.20 && !hasPlayedRef.current) {
                video?.play();
                hasPlayedRef.current = true;
              }
              if (self.progress < 0.19 && hasPlayedRef.current) {
                video?.pause();
                hasPlayedRef.current = false;
              }
            },
          },
        });

        tl.to(containerRef.current, {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 md:h-screen w-full py-4 bg-bage"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div
          ref={containerRef}
          className="relative overflow-hidden [will-change:width,height,border-radius]"
        >
          <video
            ref={videoRef}
            loop
            autoPlay
            playsInline
            disablePictureInPicture
            preload="auto"
            className="block h-full w-full object-cover"
          >
            <source src="/assets/video/vid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
