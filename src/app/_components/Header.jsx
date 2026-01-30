"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { navigation } from "../_utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandText from "./BrandText";

export default function Header({ isTransparent }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const pathname = usePathname();
  const headerRef = useRef(null);

  // ================= ACTIVE SECTION =================

  useEffect(() => {
    const sections = ["home", "philosophy"];

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ================= ACTIVE LINK =================

  const isActiveLink = (href) => {
    if (href === "/#home") return pathname === "/" && activeSection === "home";
    if (href === "/#philosophy") return pathname === "/" && activeSection === "philosophy";
    if (!href.includes("#")) return pathname === href || pathname.startsWith(href + "/");
    return false;
  };

  // ================= SCROLL =================

  useEffect(() => {
    const handleScroll = () => {
      if (isTransparent) setIsScrolled(true);
      else setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparent]);

  // ================= GSAP =================

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "expo.out", duration: 0.7 } })
        .fromTo(".nav-container", { y: -80 }, { y: 0 })
        .fromTo(".anim-logo", { opacity: 0, x: -20 }, { opacity: 1, x: 0 }, "-=0.5")
        .fromTo(".anim-link", { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.08 }, "-=0.5")
        .fromTo(".anim-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.4");
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // ================= STYLES =================

  const navClass = `transition-colors font-medium whitespace-nowrap ${
    isScrolled
      ? "text-dark hover:text-primary"
      : "text-bage hover:text-primary"
  }`;

  // ============================================================

  return (
    <nav
      ref={headerRef}
      className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bage shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">


        <div className="flex items-center justify-between py-3 md:py-4">

          {/* LOGO */}
          <Link href="/" className="anim-logo z-30">
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
              className="h-8 md:h-10 xl:h-14 w-auto transition-all duration-300"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6 z-30">

            {navigation.map((navigate, index) => {

              const isActive = isActiveLink(navigate.href);
              const hasDropdown = navigate.dropdown?.length;

              return (
                <li key={index} className="anim-link relative group">

                  <div className="flex items-center gap-1">

                    <Link
                      href={navigate.href}
                      className={`${navClass} ${
                        isActive && "text-primary border-b-2 border-primary pb-1"
                      }`}
                    >
                      {navigate.label}
                    </Link>

                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                          isScrolled ? "text-dark" : "text-bage"
                        }`}
                      />
                    )}

                  </div>

                  {hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-bage shadow-xl rounded-lg overflow-hidden min-w-[220px] border border-gray-100">
                        {navigate.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-3 text-dark hover:bg-primary hover:text-bage transition text-sm"
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

          {/* BRAND DESKTOP */}
          <div className={`hidden lg:flex anim-btn z-30 ${
            isScrolled ? "text-dark" : "text-bage"
          }`}>
            <BrandText />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`lg:hidden z-30 ${
              isScrolled ? "text-dark" : "text-bage"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-bage z-40 px-6 py-6 flex flex-col gap-5">

          <button
            className="self-end text-dark"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>

          {navigation.map((item, index) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium ${
                  isActive ? "text-primary" : "text-dark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/bookings"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full px-4 py-4 bg-primary text-bage hover:bg-bage hover:text-primary border border-primary transition text-center font-medium"
          >
            Start Your Journey
          </Link>

        </div>
      )}

    </nav>
  );
}
