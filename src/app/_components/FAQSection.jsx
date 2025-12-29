"use client";

import { useState } from "react";
import { faqs } from "../_utils/data";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* LEFT */}
          <div className="w-full lg:w-5/12">
            <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block font-medium">
              Popular Questions
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-6 text-dark uppercase">
              Frequently Asked Questions
            </h2>

            <p className="text-dark/70 mb-6 leading-relaxed font-light">
              The experience elementum sesue in the miss aucantion alesun in
              sapien fermen the miss caleustion in the sapien.
            </p>

            <a
              href="#"
              className="inline-block px-8 py-3 bg-primary text-white rounded font-medium hover:bg-primary/90 transition-colors"
            >
              All Questions
            </a>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-7/12">
            <ul className="space-y-4">
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div
                    className="acc-btn p-4 cursor-pointer bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-dark font-semibold">
                      {faq.question}
                    </span>

                    <i
                      className={`fas fa-chevron-${
                        activeIndex === index ? "up" : "down"
                      } text-primary`}
                    ></i>
                  </div>

                  <div
                    className={`acc-content transition-all duration-300 ${
                      activeIndex === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <div className="p-4 bg-gray-50">
                      <p className="text-dark/70 leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
