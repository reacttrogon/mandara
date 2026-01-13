"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MandaraManifesto = () => {
  const sectionRef = useRef(null);

  // Latin-only detection (safe to split)
  const isLatinText = (text) => /^[\x00-\x7F]*$/.test(text);

  const splitToLetters = (el) => {
    const text = el.textContent;

    // ❌ Do NOT split Sanskrit / Hindi
    if (!isLatinText(text)) {
      el.style.opacity = "1";
      return;
    }

    el.textContent = "";

    const letters = [];
    const chars = Array.from(text); // correct for punctuation & spaces

    chars.forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0.2"; // dim initially
      el.appendChild(span);
      letters.push(span);
    });

    // 🔑 Scroll → exact letter index
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * letters.length);

        letters.forEach((letter, i) => {
          letter.style.opacity = i <= index ? "1" : "0.2";
        });
      },
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-animate]").forEach(splitToLetters);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0f1c16] text-[#f5f3ee] py-24 px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p data-animate className="mb-8 text-sm uppercase tracking-[0.3em] text-[#cbbf9a]">
          Our Philosophy
        </p>

        <h2 data-animate className="mb-8 font-serif text-3xl leading-snug md:text-4xl">
          Healing does not announce itself.
        </h2>

        <div className="space-y-6 text-base leading-relaxed md:text-lg">
          <p data-animate>
            It begins in unseen layers, where nourishment returns, where
            steadiness is rebuilt, where the roots remember how to hold.
          </p>

          <p data-animate>
            Like the Mandara flower, renewal in a woman’s life begins quietly.
          </p>

          {/* Sanskrit — untouched */}
          <p data-animate className="my-10 font-serif text-lg tracking-wide text-[#d8cfae]">
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

        <div className="mt-14 space-y-2">
          <p data-animate className="font-serif text-xl">
            Mandara is not a pause in life.
          </p>
          <p data-animate className="font-serif text-2xl text-[#cbbf9a]">
            It is the ground from which life moves forward again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MandaraManifesto;
