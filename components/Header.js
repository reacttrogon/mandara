'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="logo">
            <a href="/" className="flex items-center">
              <img 
                src="/assets/images/logo.png" 
                alt="Mandara Logo" 
                className="h-[40px]"
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-dark hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-dark hover:text-primary transition-colors">About</a>
            <a href="#amenities" className="text-dark hover:text-primary transition-colors">Amenities</a>
            <a href="#contact" className="text-dark hover:text-primary transition-colors">Contact</a>
            <a href="#book" className="text-dark hover:text-primary transition-colors">Book Now</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              GET IN TOUCH
            </a>
          </div>
          
          <button 
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-dark hover:text-primary">Home</a>
              <a href="#about" className="text-dark hover:text-primary">About</a>
              <a href="#amenities" className="text-dark hover:text-primary">Amenities</a>
              <a href="#contact" className="text-dark hover:text-primary">Contact</a>
              <a href="#book" className="text-dark hover:text-primary">Book Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

