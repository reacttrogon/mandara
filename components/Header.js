"use client";

import { useState, useEffect } from "react";

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

  const ctaClass = `px-6 py-2 rounded transition-colors ${
    isScrolled
      ? "bg-primary text-white hover:bg-primary/90"
      : "text-white border border-white hover:bg-off-white"
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          {/* Logo - Left */}
          <div className="logo">
            <a href="/" className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Mandara Logo"
                className="h-[40px]"
              />
            </a>
          </div>

          {/* Navigation + CTA - Right */}
          <div className="ml-auto flex items-center gap-10">
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={navClass}>
                Home
              </a>
              <a href="#about" className={navClass}>
                About
              </a>
              <a href="#amenities" className={navClass}>
                Amenities
              </a>
              <a href="#contact" className={navClass}>
                Contact
              </a>
              <a href="#book" className={navClass}>
                Book Now
              </a>
            </nav>

            <div className="hidden md:block">
              <a href="#contact" className={ctaClass}>
                GET IN TOUCH
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`ml-4 md:hidden transition-colors ${
              isScrolled ? "text-dark" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#home" className={navClass}>
                Home
              </a>
              <a href="#about" className={navClass}>
                About
              </a>
              <a href="#amenities" className={navClass}>
                Amenities
              </a>
              <a href="#contact" className={navClass}>
                Contact
              </a>
              <a href="#book" className={navClass}>
                Book Now
              </a>

              <a href="#contact" className={ctaClass}>
                GET IN TOUCH
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
