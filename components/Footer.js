'use client'

export default function Footer() {
  return (
    <footer className="bg-[#508066] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-8 flex justify-center">
            <img 
              src="/assets/images/logo.png" 
              alt="Mandara Logo" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#amenities" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#book" className="text-white/70 hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-3">
                <i className="fas fa-location-dot text-primary mt-1"></i>
                <span>66 Broklyant, New York India</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-primary mt-1"></i>
                <a href="tel:0123456789101" className="hover:text-white transition-colors">012 345 678 9101</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-primary mt-1"></i>
                <a href="mailto:contact@mandara.com" className="hover:text-white transition-colors">contact@mandara.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex gap-2 mb-6">
              <input 
                type="email" 
                placeholder="Your mail address"
                className="flex-1 px-4 py-2 rounded text-dark focus:outline-none focus:ring-2 focus:ring-[#19341A]"
              />
              <button className="px-6 py-2 bg-[#19341A] text-white rounded hover:bg-[#19341A]/90 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-primary transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70">©️ Mandara 2025 | All Rights Reserved</p>
          <ul className="flex gap-6">
            <li><a href="#" className="text-white/70 hover:text-white transition-colors">Terms & Condition</a></li>
            <li><a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

