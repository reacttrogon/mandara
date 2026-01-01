"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Menu } from "lucide-react";

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

  const navClass = `transition-colors ${
    isScrolled
      ? "text-dark hover:text-primary"
      : "text-white hover:text-off-white"
  }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="logo-wrapper">
            <a href="/" className="logo">
              <img
                src="/assets/images/logo.png"
                alt="Mandara Logo"
                className="h-[50px] logo-img fill-primary"
              />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-dark" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <Menu className="text-black" />
          </button>

          {/* Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:gap-8 w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 mt-4 md:mt-0">
              <li>
                <a href="#home" className={navClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className={navClass}>
                  About
                </a>
              </li>
              <li>
                <a href="#amenities" className={navClass}>
                  Amenities
                </a>
              </li>
              <li>
                <a href="/packages" className={navClass}>
                  Packages
                </a>
              </li>
              <li>
                <a href="/contact" className={navClass}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Button */}
          <div className="">
            <a
              href="/booking-system"
              className={`inline-flex items-center gap-2 px-6 py-2 rounded transition-colors ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-primary text-white hover:bg-white hover:text-primary"
              }`}
            >
              <CalendarCheck />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
