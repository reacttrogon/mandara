"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${isScrolled ? "text-stone-800 hover:text-[#9A8478]" : "text-white hover:text-white/80"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="relative z-50">
              <img
                src={isScrolled ? "/assets/images/logo.png" : "/assets/images/logo_transp_w.png"}
                alt="Mandara Logo"
                className="h-10 md:h-12 w-auto object-contain transition-all duration-300"
              />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10">
              <li><a href="#home" className={navClass}>Home</a></li>
              <li><a href="#about" className={navClass}>About</a></li>
              <li><a href="#amenities" className={navClass}>Amenities</a></li>
              <li><a href="/packages" className={navClass}>Packages</a></li>
              <li><a href="#contact" className={navClass}>Contact</a></li>
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
              <a
                href="/booking-system"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${isScrolled
                    ? "bg-stone-900 text-white hover:bg-[#9A8478]"
                    : "bg-white text-stone-900 hover:bg-stone-100"
                  }`}
              >
                <CalendarCheck className="w-4 h-4" />
                Book Stay
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`md:hidden z-50 p-2 ${isScrolled ? "text-stone-900" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-stone-900" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-8 text-center bg-white w-full">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">About</a></li>
              <li><a href="#amenities" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Amenities</a></li>
              <li><a href="/packages" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Packages</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif text-stone-900">Contact</a></li>
              <li>
                <a
                  href="/booking-system"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white rounded-full text-sm font-bold tracking-widest uppercase mt-4"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Stay
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
