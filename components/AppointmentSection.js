'use client'

import { useState } from 'react'

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="book" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">Book Now</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">
            Begin Your Wellness Journey
          </h2>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto">
            A sanctuary thoughtfully created to support mothers after childbirth <br className="hidden md:block" />
            blending clinical wellness, comfort, and warmth in an elegant retreat setting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-dark font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-dark font-medium">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-dark font-medium">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-dark font-medium">Preferred Location</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="india">India</option>
                  <option value="international">International</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-2 text-dark font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"
                placeholder="Tell us about your postnatal care or wellness needs"
              ></textarea>
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-primary text-white rounded hover:bg-primary/90 transition-colors font-semibold">
              Book Now
            </button>
          </form>
          
          <div className="hidden md:block">
            <img 
              src="/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg" 
              alt="Mandara Women's Wellness Retreat"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

