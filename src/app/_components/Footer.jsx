"use client";
import { Facebook, Youtube, Instagram } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#22362C] text-white">
      {/* Top Section */}
      <div className="py-12 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Address */}
            <div>
              <div className="mb-6">
                <img
                  src="/assets/images/logo_transp_w.png"
                  alt="Mandara Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/70">
                G1003, NH 66, Kozhikode Bypass
                <br />
                Calicut, Kerala
              </p>
            </div>

            {/* Contact Us */}
            <div className="md:ml-12">
              <h3 className="text-xl font-semibold mb-6">Contact us</h3>
              <p className="text-white/70 mb-2">
                <a
                  href="tel:+917654389716"
                  className="hover:text-white transition-colors"
                >
                  +91 7654389716
                </a>
              </p>
              <p className="text-white/70">
                <a
                  href="mailto:wellness@mandara.com"
                  className="hover:text-white transition-colors"
                >
                  wellness@mandara.com
                </a>
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
              <p className="text-white/70 mb-6">
                Stay connected with Mandara Wellness Clinic through our social
                platforms
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Refund Policy
              </a>
            </div>
            <p className="text-white/70 text-center lg:text-right">
              Copyright 2025 by{" "}
              <a href="#" className="hover:text-white transition-colors">
                Mandara Wellness Center
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
