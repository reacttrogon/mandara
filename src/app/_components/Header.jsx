"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { navigation } from "../_utils/data";
import Link from "next/link";

export default function Header({ isTransaparent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* GSAP scope */
  const headerRef = useRef(null);

  useEffect(() => {
    if (isTransaparent) setIsScrolled(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    /* GSAP animation (DESKTOP ONLY) */
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.out", duration: 0.7 },
      });

      tl.fromTo(".nav-container", { y: -80 }, { y: 0 })
        .fromTo(
          ".anim-logo",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0 },
          "-=0.5",
        )
        .fromTo(
          ".anim-link",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.08 },
          "-=0.5",
        )
        .fromTo(
          ".anim-btn",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: "back.out(1.8)" },
          "-=0.4",
        );
    }, headerRef);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert();
    };
  }, []);

  const navClass = `transition-colors ${isScrolled
    ? "text-dark hover:text-primary font-medium whitespace-nowrap"
    : "text-white hover:text-primary font-medium whitespace-nowrap"
    }`;

  return (
    <nav
      ref={headerRef}
      className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-bage shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between ${!isMenuOpen ? "py-4" : "py-0"
            }`}
        >
          {/* Desktop Logo */}
          <a href="/" className="hidden md:block anim-logo">
            <Image
              src={
                isScrolled
                  ? "/assets/images/logo_green.png"
                  : "/assets/images/logo_updated.png"
              }
              alt="Mandara Logo"
              width={150}
              height={54}
              priority
              className="h-10 md:h-14 lg:h-16 transition-all duration-300"
            />
          </a>

          {/* Mobile Logo (unchanged, no GSAP) */}
          {!isMenuOpen && (
            <a href="/" className="md:hidden">
              <Image
                src={
                  isScrolled
                    ? "/assets/images/logo_green.png"
                    : "/assets/images/logo_transp_w.png"
                }
                alt="Mandara Logo"
                width={96}
                height={58}
                priority
                className="h-9 md:h-12 pl-4 transition-all duration-300"
              />
            </a>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navigation.map((navigate, index) => {
              return (
                <li className="anim-link" key={index}>
                  <Link href={navigate?.href} className={navClass}>
                    {navigate.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Button */}
          <Link
            href="/booking"
            className={`anim-btn hidden md:inline-flex rounded-full px-4 py-2 bg-primary text-white whitespace-nowrap hover:bg-white hover:text-primary transition-all duration-200 ${isScrolled ? "hover:border hover:border-primary" : ""
              }`}
          >
            Book your stay
          </Link>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              className={`md:hidden p-2 rounded ${isScrolled ? "text-dark" : "text-white"
                }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className={isScrolled ? "text-black" : "text-white"} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (NO GSAP, untouched) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg w-full px-6 py-6 flex flex-col gap-5 text-dark">
          <button
            className="self-end p-2 rounded bg-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="text-black" />
          </button>

          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className="rounded-full px-4 py-4 bg-primary text-white whitespace-nowrap hover:bg-white hover:text-primary transition-all duration-200 hover:border hover:border-primary font-medium text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book your stay
          </Link>
        </div>
      )}
    </nav>
  );
}
