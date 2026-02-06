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
              A sanctuary for restoration, designed around women and their rhythms.
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

            {/* App Store Links */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-bage/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-bage/60 leading-none">Download on the</span>
                  <span className="text-sm font-medium text-bage leading-tight">App Store</span>
                </div>
              </div>

              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-bage/20"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="flex flex-col">
                  <span className="text-[10px] text-bage/60 leading-none">Get it on</span>
                  <span className="text-sm font-medium text-bage leading-tight">Google Play</span>
                </div>
              </div>
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
        <div className="flex flex-col items-center uppercase mt-2 md:mt-8 text-bage/50 text-sm">

          <p>© 2026 Mandara Women’s Wellness</p>
          <p>All rights reserved</p>

        </div>

      </div>
    </footer>
  );
}
