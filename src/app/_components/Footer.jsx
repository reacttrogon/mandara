"use client";

import { Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 pb-16 border-b border-stone-800">

          {/* Brand Column */}
          <div className="max-w-sm">
            <img
              src="/assets/images/logo_transp_w.png"
              alt="Mandara Logo"
              className="h-20 w-auto mb-8 opacity-90"
            />
            <p className="text-lg text-stone-400 mb-8 leading-relaxed">
              A sanctuary for new beginnings, where luxury meets holistic postnatal care.
            </p>
            <div className="flex gap-4">
              {/* Socials */}
              <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
            <div>
              <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+917654389716" className="hover:text-white transition-colors block">
                    +91 765 438 9716
                  </a>
                </li>
                <li>
                  <a href="mailto:wellness@mandara.com" className="hover:text-white transition-colors block">
                    wellness@mandara.com
                  </a>
                </li>
                <li className="text-stone-500 pt-2">
                  G1003, NH 66, Kozhikode Bypass<br />
                  Calicut, Kerala
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
                <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-xl mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-stone-500">
          <p>&copy; 2025 Mandara Wellness Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
