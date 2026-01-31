"use client";

import { Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import BrandText from "./BrandText";
import { footerSections } from "../_utils/data";

export default function Footer() {
  return (
    <footer
      className="text-bage/80  border-bage/10"
      style={{ backgroundColor: "#051512" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-2 py-12 md:py-14">

        <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_2fr] gap-16 border-b border-bage/10 pb-14">

          {/* Brand Column */}
          <div className="max-w-md">

            <Link href="/" className="inline-block mb-1">
              <img
                src="/assets/images/BR200379_MANDARA_PNG (1).png"
                alt="Mandara Logo"
                className="h-20 w-auto"
              />
            </Link>

            <BrandText />

            <p className="text-md text-bage/60 leading-relaxed mt-6 mb-10">
              A sanctuary for new beginnings, where luxury meets holistic postnatal care.
              Reconnect with yourself in our serene haven.
            </p>

            {/* Socials */}
            <div className="flex gap-3">

              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-full border border-bage/20 flex items-center justify-center
                             hover:bg-bage hover:text-dark transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}

            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-18">

            {footerSections.map((section, index) => (
              <div key={index}>

                <h4 className="text-bage text-xl tracking-wide mb-6 font-medium">
                  {section.title}
                </h4>

                <ul className="space-y-2 text-md text-bage/65">

                  {section.items.map((item, idx) => {

                    if (item.isText) {
                      return (
                        <li key={idx} className="pt-3 leading-relaxed whitespace-pre-line">
                          {item.label}
                        </li>
                      );
                    }

                    if (item.type === "a") {
                      return (
                        <li key={idx}>
                          <a
                            href={item.href}
                            className="hover:text-gold transition-colors"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }

                    return (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="hover:text-gold transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}

                </ul>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center uppercase mt-2 md:mt-8 text-bage/50 ">

          <p>© 2026 Mandara Women’s Wellness Center</p>
          <p>All rights reserved</p>

        </div>

      </div>
    </footer>
  );
}
