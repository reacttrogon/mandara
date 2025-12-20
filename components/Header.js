'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
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
            <a href="#home" className={`transition-colors ${
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
            }`}>Home</a>
            <a href="#about" className={`transition-colors ${
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
            }`}>About</a>
            <a href="#amenities" className={`transition-colors ${
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
            }`}>Amenities</a>
            <a href="#contact" className={`transition-colors ${
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
            }`}>Contact</a>
            <a href="#book" className={`transition-colors ${
              isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
            }`}>Book Now</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className={`px-6 py-2 rounded transition-colors ${
              isScrolled 
                ? 'bg-primary text-white hover:bg-primary/90' 
                : 'bg-white text-primary hover:bg-off-white'
            }`}>
              GET IN TOUCH
            </a>
          </div>
          
          <button 
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-dark' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            isScrolled ? 'border-gray-200' : 'border-white/20'
          }`}>
            <nav className="flex flex-col space-y-4">
              <a href="#home" className={`transition-colors ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
              }`}>Home</a>
              <a href="#about" className={`transition-colors ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
              }`}>About</a>
              <a href="#amenities" className={`transition-colors ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
              }`}>Amenities</a>
              <a href="#contact" className={`transition-colors ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
              }`}>Contact</a>
              <a href="#book" className={`transition-colors ${
                isScrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-off-white'
              }`}>Book Now</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

