"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const slides = [
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "Luxury Postnatal Care",
      description: "",
      image: "/assets/images/image1.jpeg",
    },
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "Redefining Postnatal Care with Compassion & Class",
      description: "",
      image: "/assets/images/image2.jpeg",
    },
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "The Perfect Base For You",
      description: "",
      image: "/assets/images/image3.jpeg",
    },
  ];

  const minSwipeDistance = 50;

  // Touch gestures
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    if (distance < -minSwipeDistance) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  // Mouse drag
  const onMouseDown = (e) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;

    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;

      if (distance > minSwipeDistance) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }

      if (distance < -minSwipeDistance) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      }
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, slides.length]);

  return (
    <section id="home" className="relative min-h-screen select-none">
      <div
        ref={sliderRef}
        className="relative h-screen overflow-hidden cursor-grab active:cursor-grabbing"
        draggable={false}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 h-full flex items-center justify-center">
              <motion.div
                className="text-center text-white px-4 max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="block text-sm md:text-base mb-4 opacity-90">
                  {slide.subtitle}
                </span>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl mb-8 opacity-90">
                  {slide.description}
                </p>

                <a
                  href="#about"
                  className="inline-block px-8 py-3 border text-white rounded font-semibold hover:bg-gray-100 hover:text-primary transition"
                >
                  Start Now
                </a>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
