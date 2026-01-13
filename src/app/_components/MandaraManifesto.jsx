"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MandaraManifesto = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-animate]", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
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
      ref={sectionRef}
      className="relative bg-[#0f1c16] text-[#f5f3ee] py-24 px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Section label */}
        <p
          data-animate
          className="mb-8 text-sm uppercase tracking-[0.3em] text-[#cbbf9a]"
        >
          Our Philosophy
        </p>

        {/* Opening line */}
        <h2
          data-animate
          className="mb-8 font-serif text-3xl leading-snug md:text-4xl"
        >
          Healing does not announce itself.
        </h2>

        {/* Body text */}
        <div className="space-y-6 text-base leading-relaxed text-[#e7e4dc] md:text-lg">
          <p data-animate>
            It begins in unseen layers, where nourishment returns, where
            steadiness is rebuilt, where the roots remember how to hold.
          </p>

          <p data-animate>
            Like the Mandara flower, renewal in a woman’s life begins quietly.
          </p>

          {/* Sanskrit verse */}
          <p
            data-animate
            className="my-10 font-serif text-lg tracking-wide text-[#d8cfae]"
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

          <p data-animate>
            Through thoughtful wellness planning, culturally rooted healing
            practices, and modern clinical insight, we create an environment
            where women are seen, supported, and restored, without haste,
            without compromise.
          </p>
        </div>

        {/* Closing statement */}
        <div className="mt-14 space-y-2">
          <p data-animate className="font-serif text-xl">
            Mandara is not a pause in life.
          </p>
          <p
            data-animate
            className="font-serif text-2xl text-[#cbbf9a]"
          >
            It is the ground from which life moves forward again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MandaraManifesto;
