"use client";

import { Facebook, Youtube, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-bage/80 pt-12 md:pt-24  border-t border-bage/10"
      style={{ backgroundColor: "#051512" }}
    >
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10 md:gap-16 lg:gap-32  md:pb-5 border-b border-bage/10">

          {/* Brand Column */}
          <div className="max-w-sm">
            <a href="/" className="block mb-6">
              <img
                src="/assets/images/BR200379_MANDARA_PNG (1).png"
                alt="Mandara Logo"
                className="h-24 w-auto opacity-100"
              />
            </a>
            <div className="flex flex-col items-start leading-none mb-10 text-bage/80">
              <span className="text-[10px] uppercase tracking-widest opacity-70">From</span>
              <span className="text-lg font-sans font-medium"><span className="font-bold">HiLITE</span> Group</span>
            </div>
            <p className="text-md text-bage/60 mb-10 leading-relaxed  font-light">
              A sanctuary for new beginnings, where luxury meets holistic postnatal care. Reconnect with yourself in our serene haven.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-bage/20 flex items-center justify-center hover:bg-bage hover:text-dark transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-bage/20 flex items-center justify-center hover:bg-bage hover:text-dark transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-bage/20 flex items-center justify-center hover:bg-bage hover:text-dark transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
            <div>
              <h4 className="text-bage  text-2xl mb-8">Contact</h4>
              <ul className="space-y-4  text-sm tracking-wide text-bage/70">
                <li>
                  <a href="tel:+917654389716" className="hover:text-gold transition-colors block">
                    +91 765 438 9716
                  </a>
                </li>
                <li>
                  <a href="mailto:wellness@mandara.com" className="hover:text-gold transition-colors block">
                    wellness@mandara.com
                  </a>
                </li>
                <li className="pt-4 leading-relaxed ">
                  Mandara Women's Wellness,<br />
                  Athanikkal, Kerala 673314
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-bage  text-2xl mb-8">Explore</h4>
              <ul className="space-y-4  text-sm tracking-wide text-bage/70">
                <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#packages" className="hover:text-gold transition-colors">Packages</a></li>
                <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
                <li>
                  <a
                    href="#gallery"
                    onClick={(e) => {
                      e.preventDefault();
                      const gallerySection = document.getElementById('gallery');
                      if (gallerySection) {
                        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="hover:text-gold transition-colors"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-bage  text-2xl mb-8">Legal</h4>
              <ul className="space-y-4  text-sm tracking-wide text-bage/70">
                <li><Link href="/terms-and-condition" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-and-condition" className="hover:text-gold transition-colors">Terms and Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center py-6 opacity-70 uppercase text-sm ">
          <p>&copy; 2026 Mandara Wellness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
