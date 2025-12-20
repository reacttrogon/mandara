'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef(null)
  
  const slides = [
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "Redefining Postnatal Care with Compassion & Class",
      description: "Where New Beginnings Are Gently Nurtured",
      image: "WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg"
    },
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "Where New Beginnings Are Gently Nurtured",
      description: "World-Class Postnatal Care Blending Medical Excellence with Luxury Comfort",
      image: "WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg"
    },
    {
      subtitle: "Mandara – India's First Holistic Wellness Retreat for Women",
      title: "Where Care\n Meets Culture\n Healing Meets Home",
      description: "Mandara Wellness Clinic is a premier postnatal care facility where medical excellence meets luxury hospitality.",
      image: "WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg"
    }
  ]

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
    if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  // Mouse drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true)
    setTouchStart(e.clientX)
  }

  const onMouseMove = (e) => {
    if (!isDragging) return
    setTouchEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!isDragging) return
    
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance

      if (isLeftSwipe) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
      if (isRightSwipe) {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }
    
    setIsDragging(false)
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length, isDragging])

  return (
    <section id="home" className="relative min-h-screen">
      <div 
        ref={sliderRef}
        className="relative h-screen overflow-hidden cursor-grab active:cursor-grabbing"
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
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('/assets/images/${encodeURIComponent(slide.image)}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <span className="block text-sm md:text-base mb-4 opacity-90">{slide.subtitle}</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight whitespace-pre-line">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90">{slide.description}</p>
                <a href="tel:+919999999999" className="inline-block px-8 py-3 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  CALL NOW
                </a>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

