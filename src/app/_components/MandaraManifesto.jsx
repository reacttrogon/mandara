"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MandaraManifesto = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const splitTextIntoGraphemes = (text) => {
      if (typeof Intl.Segmenter !== "undefined") {
        const segmenter = new Intl.Segmenter("hi", { granularity: "grapheme" });
        return Array.from(segmenter.segment(text), (s) => s.segment);
      }
      return [...text];
    };

    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray("[data-animate]");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          // Adjusted end to give more scroll space for all letters to finish
          start: "top 70%", 
          end: "bottom 70%",
          scrub: 1, 
        },
      });

      elements.forEach((el) => {
        const originalText = el.innerText;
        const graphemes = splitTextIntoGraphemes(originalText);
        
        el.innerText = ""; 
        el.setAttribute("aria-label", originalText);

        const charSpans = graphemes.map((char) => {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline"; 
          span.style.opacity = "0.15"; 
          el.appendChild(span);
          return span;
        });

        tl.to(charSpans, {
          opacity: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "none",
        }, ">"); 
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#0f1c16] text-[#f5f3ee] py-24 px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Slightly smaller tracking and text size */}
        <p data-animate className="mb-6 text-[10px] uppercase tracking-[0.4em] text-[#cbbf9a]">
          Our Philosophy
        </p>

        {/* Heading reduced from 5xl to 4xl */}
        <h2 data-animate className="mb-10 font-serif text-2xl leading-snug md:text-4xl">
          Healing does not announce itself.
        </h2>

        {/* Body text reduced from 2xl to lg/xl */}
        <div className="space-y-8 text-base leading-relaxed md:text-lg">
          <p data-animate>
            It begins in unseen layers, where nourishment returns, where
            steadiness is rebuilt, where the roots remember how to hold.
          </p>

          <p data-animate>
            Like the Mandara flower, renewal in a woman’s life begins quietly.
          </p>

          {/* Hindi text reduced from 4xl to 3xl */}
          <p
            data-animate
            className="my-10 font-serif text-2xl tracking-wide text-[#d8cfae] md:text-3xl"
          >
            सा विश्वायुः सा विश्वकर्मा सा विश्वधायाः
          </p>

          <p data-animate>
            She is the bearer of life, the force of creation, the one who
            sustains what continues.
          </p>

          <p data-animate>
            Across transitions and demands, she must first be replenished,
            before she rises, before she gives, before she returns.
          </p>

          <p data-animate>Mandara honours these intervals.</p>

          <p data-animate>
            A sanctuary of calm luxury, where ancient understanding meets
            intelligent technology, and care is guided by intuition, accuracy,
            and respect.
          </p>
        </div>

        {/* Footer text reduced accordingly */}
        <div className="mt-16 space-y-3">
          <p data-animate className="font-serif text-lg md:text-xl">
            Mandara is not a pause in life.
          </p>
          <p data-animate className="font-serif text-xl text-[#cbbf9a] md:text-2xl">
            It is the ground from which life moves forward again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MandaraManifesto;