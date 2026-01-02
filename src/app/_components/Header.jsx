"use client";

import { useState, useEffect } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        <div
          className={`flex items-center justify-between ${
            !isMenuOpen ? "py-4" : "py-0"
          } `}
        >
          {/* Desktop Logo */}
          <a href="/" className="hidden md:block">
            <img
              src={
                isScrolled
                  ? "/assets/images/scroll-logo.png"
                  : "/assets/images/logo_transp_w.png"
              }
              alt="Mandara Logo"
              className="h-14"
            />
          </a>

          {/* Mobile Logo — hidden when menu is open */}
          {!isMenuOpen && (
            <a href="/" className="md:hidden">
              <img
                src={`${
                  isScrolled
                    ? "/assets/images/scroll-logo.png"
                    : "/assets/images/logo_transp_w.png"
                }`}
                alt="Mandara Logo"
                className="h-[45px] pl-4"
              />
            </a>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
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

          {/* Desktop CTA */}
          <a
            href="/booking-system"
            className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-primary text-white font-medium hover:-translate-y-0.5 hover:shadow-lg  transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              <span className="font-medium">Book Now</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              className={`md:hidden p-2 rounded ${
                isScrolled ? "text-dark" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="text-black" />
              ) : (
                <Menu
                  className={`${isScrolled ? "text-black" : "text-white"}`}
                />
              )}
            </button>
          )}
        </div>
      </div>

      {/* MOBILE OPEN MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-6 py-6 flex flex-col gap-5 text-dark">
          <button
            className="self-end p-2 rounded bg-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="text-black" />
          </button>

          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#amenities" onClick={() => setIsMenuOpen(false)}>
            Amenities
          </a>
          <a href="/packages" onClick={() => setIsMenuOpen(false)}>
            Packages
          </a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>

          <a
            href="/booking-system"
            className="inline-flex items-center gap-2 px-6 py-2 rounded bg-primary text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <CalendarCheck />
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
