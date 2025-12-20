'use client'

import { useState } from 'react'

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const images = [
    '/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg',
    '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg',
    '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg'
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">Visual Experience</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">Immersive Gallery</h2>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            >
              <i className="fas fa-arrow-left"></i>
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

