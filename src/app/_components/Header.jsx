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
      : "text-white hover:text-primary"
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
              className="h-10 md:h-14 lg:h-16 transition-all duration-300"
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
                className="h-9 md:h-12 pl-4 transition-all duration-300"
              />
            </a>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 ">
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
              <a href="#packages" className={navClass}>
                Packages
              </a>
            </li>
            <li>
              <a href="#contact" className={navClass}>
                Contact Us
              </a>
            </li>
          </ul>

          <button
            className={`hidden md:inline-flex rounded-full px-4 py-2 bg-primary text-white whitespace-nowrap hover:bg-white hover:text-primary animate transition-all duration-200 ${
              isScrolled ? "hover:border hover:border-primary" : ""
            }`}
          >
            Book your stay
          </button>

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

          <button
            className={` rounded-full px-4 py-2 bg-primary text-white whitespace-nowrap hover:bg-white hover:text-primary animate transition-all duration-200 hover:border hover:border-primary${
              isScrolled ? "hover:border hover:border-primary" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Book your stay
          </button>
        </div>
      )}
    </nav>
  );
}
