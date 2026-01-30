"use client";

import { Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import BrandText from "./BrandText";
import { footerSections } from "../_utils/data";

export default function Footer() {
  return (
    <footer
      className="text-bage/80 pt-12 md:pt-24 border-t border-bage/10"
      style={{ backgroundColor: "#051512" }}
    >
      <div className="container mx-auto px-4 md:px-12 xl:px-12">

        <div className="flex flex-col xl:flex-row justify-between gap-10 md:gap-16 xl:gap-32 md:pb-5 border-b border-bage/10">

          {/* Brand Column */}
          <div className="max-w-sm">

            <a href="/" className="block mb-2">
              <img
                src="/assets/images/BR200379_MANDARA_PNG (1).png"
                alt="Mandara Logo"
                className="h-24 w-auto opacity-100"
              />
            </a>

            <BrandText />

            <p className="text-md text-bage/60 mb-10 leading-relaxed font-light mt-4">
              A sanctuary for new beginnings, where luxury meets holistic postnatal care. Reconnect with yourself in our serene haven.
            </p>

            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-bage/20 flex items-center justify-center hover:bg-bage hover:text-dark transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 xl:gap-20 w-full xl:w-auto">

            {footerSections.map((section, index) => (
              <div key={index}>

                <h4 className="text-bage text-2xl mb-8">
                  {section.title}
                </h4>

                <ul className="space-y-4 text-sm tracking-wide text-bage/70">

                  {section.items.map((item, idx) => {

                    // Plain text (address)
                    if (item.isText) {
                      return (
                        <li key={idx} className="pt-4 leading-relaxed whitespace-pre-line">
                          {item.label}
                        </li>
                      );
                    }

                    // Normal anchor (tel, mail)
                    if (item.type === "a") {
                      return (
                        <li key={idx}>
                          <a
                            href={item.href}
                            className="hover:text-gold transition-colors block"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }

                    // Next Link
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

        {/* Copyright */}
        <div className="flex flex-col justify-center items-center py-6 opacity-70 uppercase text-sm">
          <p>&copy; 2026 Mandara Women’s Wellness Center.</p>
          <p> All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
