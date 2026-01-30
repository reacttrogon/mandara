"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
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

        tl.to(
          charSpans,
          {
            opacity: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "none",
          },
          ">",
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-bage text-dark py-10 px-6" id="philosophy"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 data-animate className="mb-10 text-2xl leading-snug md:text-4xl">
          Healing unfolds gently.
        </h2>

        <div className="space-y-8 text-base leading-relaxed md:text-lg">
          <p data-animate>
            Healing unfolds gently, in quiet layers where nourishment returns,
            steadiness is rebuilt, and inner strength grows again. Like the
            Mandara flower, renewal in a woman’s life begins softly, guided by
            time, care, and balance.
          </p>

          <p
            data-animate
            className="my-10 text-2xl tracking-wide text-secondary md:text-3xl"
          >
            सा विश्वायुः सा विश्वकर्मा सा विश्वधायाः
          </p>

          <p data-animate>
            She is the bearer of life, the force of creation, the one who
            sustains continuity.
          </p>

          <p data-animate>This belief lies at the heart of Mandara.</p>

          <p data-animate>
            <strong>The Roots – Care:</strong> Care at Mandara is deep, steady,
            and often unseen. Clinical expertise, modern wellness insight, and
            attentive support create a strong foundation for healing.
          </p>

          <p data-animate>
            <strong>The Stem – Support:</strong> Support provides stability
            through transitions. Personalised guidance and reassurance help
            women feel held, confident, and at ease.
          </p>

          <p data-animate>
            <strong>The Leaves – Nature:</strong> Nature surrounds and nourishes
            recovery. Green spaces, natural light, and calm environments allow
            healing to unfold naturally.
          </p>

          <p data-animate>
            <strong>The Petals – Womanhood:</strong> At the centre is the woman.
            Every experience is shaped around her physical, emotional, and
            mental wellbeing.
          </p>

          <p data-animate>
            <strong>The Bloom – Renewal:</strong> When care, support, and
            environment come together, renewal happens. Strength returns,
            clarity deepens, and life moves forward.
          </p>

          <p data-animate>
            <strong>The Space – Celestial Calm:</strong> Inspired by the meaning
            of Mandara, this is a protected space, removed from urgency and
            noise, where healing is given time and respect.
          </p>
        </div>

        <div className="mt-16 space-y-3">
          <p data-animate className="text-lg md:text-xl">
            Mandara believes:
          </p>

          <p data-animate className="text-xl text-secondary md:text-2xl">
            Women deserve to begin every new chapter with care, balance, and
            dignity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
