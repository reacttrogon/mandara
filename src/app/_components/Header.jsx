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

  const navClass = `transition-colors ${
    isScrolled
      ? "text-dark hover:text-primary font-medium whitespace-nowrap"
      : "text-bage hover:text-primary font-medium whitespace-nowrap"
  }`;

  // ============================================================

  return (
    <nav
      ref={headerRef}
      className={`nav-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bage shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 relative">

        {/* TOP GRADIENT OVERLAY */}
        {!isScrolled && !isMenuOpen && (
          <div className="absolute inset-x-0 top-0 h-28 xl:h-36 bg-gradient-to-b from-black/40 via-black/15 to-transparent z-10 hidden xl:block" />
        )}

        <div className="flex items-center justify-between py-4">

          {/* LOGO DESKTOP */}
          <Link href="/" className="hidden xl:block anim-logo z-30">
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
              className="h-12 xl:h-14 w-auto transition-all duration-300"
            />
          </Link>

          {/* LOGO MOBILE */}
          {!isMenuOpen && (
            <Link href="/" className="xl:hidden z-30">
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
                className="h-8 md:h-10 w-auto transition-all duration-300"
              />
            </Link>
          )}

          {/* DESKTOP MENU */}
          <ul className="hidden xl:flex items-center gap-8 z-30">

            {navigation.map((navigate, index) => {

              const isActive = isActiveLink(navigate.href);
              const hasDropdown = navigate.dropdown?.length;

              return (
                <li key={index} className="anim-link relative group whitespace-nowrap">

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

          {/* BRAND DESKTOP */}
          <div className={`anim-btn hidden xl:flex z-30 ${isScrolled ? "text-dark" : "text-bage"}`}>
            <BrandText />
          </div>

          {/* MOBILE RIGHT SIDE */}
          {!isMenuOpen && (
            <div className="xl:hidden flex items-center gap-3 z-30">

              <div className={`${isScrolled ? "text-dark" : "text-bage"}`}>
                <BrandText />
              </div>

              <button
                className={`${isScrolled ? "text-dark" : "text-bage"}`}
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>

            </div>
          )}

        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="xl:hidden bg-bage shadow-lg w-full px-6 py-6 flex flex-col gap-5 text-dark z-30">

          <button className="self-end" onClick={() => setIsMenuOpen(false)}>
            <X />
          </button>

          {navigation.map((item, index) => {
            const isActive = isActiveLink(item.href);

            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium hover:text-primary transition-colors ${
                  isActive && "text-primary border-b-2 border-primary pb-1 inline-block"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/bookings"
            onClick={() => setIsMenuOpen(false)}
            className="rounded-full px-4 py-4 bg-primary text-bage hover:bg-bage hover:text-primary transition-all duration-200 hover:border hover:border-primary font-medium text-center"
          >
            Start Your Journey
          </Link>

        </div>
      )}

    </nav>
  );
}
