"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { navigation } from "../_utils/data";
import Link from "next/link";
import { montserrat } from "../_utils/font";
import { usePathname } from "next/navigation";

export default function Header({ isTransparent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  /* GSAP scope */
  const headerRef = useRef(null);

  // Helper function to check if a link is active
  const isActiveLink = (href) => {
    // For home link - only highlight when on home page
    if (href === "/#home") {
      return pathname === "/";
    }
    // // For hash links on home page - don't highlight them as active
    if (href.startsWith("/#")) {
      return false;
    }
    // For other pages
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isTransparent) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 50);
      }
    };

    // Initial check
    handleScroll();

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
    ? "text-dark hover:text-primary font-medium bagespace-nowrap"
    : "text-bage hover:text-primary font-medium bagespace-nowrap"
    }`;

  return (
    <nav
      ref={headerRef}
      className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-bage shadow-md" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
       {!isScrolled && !isMenuOpen && <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent z-10" />}
        <div
          className={`flex items-center justify-between ${!isMenuOpen ? "py-4" : "py-0"
            }`}
        >
          {/* Desktop Logo */}
          <Link href="/" className="hidden md:block anim-logo z-30">
            <Image
              src={
                isScrolled
                  ? "/assets/images/BR200379_MANDARA_PNG.png"
                  : "/assets/images/BR200379_MANDARA_PNG (1).png"
              }
              alt="Mandara Logo"
              width={150}
              height={54}
              priority
              className="h-10 md:h-14 lg:h-14 transition-all duration-300"
            />
          </Link> 

          {/* Mobile Logo (unchanged, no GSAP) */}
          {!isMenuOpen && (
            <Link href="/" className="md:hidden z-30">
              <Image
                src={
                  isScrolled
                    ? "/assets/images/BR200379_MANDARA_PNG.png"
                    : "/assets/images/BR200379_MANDARA_PNG (1).png"
                }
                alt="Mandara Logo"
                width={96}
                height={58}
                priority
                className="h-8 md:h-12 pl-4 transition-all duration-300 z-34"
              />
            </Link>
          )}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 z-30">
            {navigation.map((navigate, index) => {
              const isActive = isActiveLink(navigate?.href);
              const hasDropdown = navigate.dropdown && navigate.dropdown.length > 0;

              return (
                <li className="anim-link relative group whitespace-nowrap" key={index}>
                  <Link
                    href={navigate?.href}
                    className={`${navClass} ${isActive ? 'text-primary border-b-2 border-primary pb-1' : ''} flex items-center gap-1`}
                  >
                    {navigate.label}
                    {hasDropdown && (
                      <svg
                        className="w-4 h-4 transition-transform group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-bage shadow-xl rounded-lg overflow-hidden min-w-[240px] border border-gray-100">
                        {navigate.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-5 py-3 text-dark hover:bg-primary hover:text-bage transition-colors duration-200 text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Button */}
          {/* HiLITE Group Badge */}
          <div className={`anim-btn hidden md:flex flex-col items-end text-sm z-30 ${isScrolled ? "text-dark" : "text-bage"}`}>
            <span className={`${montserrat.className}`}>From <span className="font-extrabold tracking-tight ">HiLITE </span>Group</span>
          </div>

          {/* Mobile Menu Button */}
          {!isMenuOpen && (
            <button
              className={`md:hidden p-2 z-30 rounded ${isScrolled ? "text-dark" : "text-bage"
                }`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className={isScrolled ? "text-black" : "text-bage"} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (NO GSAP, untouched) */}
      {isMenuOpen && (
        <div className="md:hidden bg-bage shadow-lg w-full px-6 py-6 flex flex-col gap-5 text-dark z-30">
          <button
            className="self-end p-2 rounded bg-bage"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="text-black" />
          </button>

          {navigation.map((item, index) => {
            const isActive = isActiveLink(item.href);
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium hover:text-primary transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1 inline-block' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/bookings"
            className="rounded-full px-4 py-4 bg-primary text-bage bagespace-nowrap hover:bg-bage hover:text-primary transition-all duration-200 hover:border hover:border-primary font-medium text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Your Journey
          </Link>
        </div>
      )}
    </nav>
  );
}
