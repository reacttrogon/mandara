"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    status: "General Inquiry",
    date: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-7xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Image Side - Fully Immersive */}
          <div className="lg:w-5/12 relative min-h-[500px] lg:min-h-full">
            <img
              src="/assets/images/image3.jpeg"
              alt="Luxury Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-dark/40" />
            <div className="absolute inset-0 p-12 flex flex-col justify-between text-white z-10">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase block mb-4">
                  Get in Touch
                </span>
                <h3 className="font-serif text-4xl leading-tight mb-4">Start your journey today</h3>
                <p className="text-white/80 font-sans text-lg">Experience ultimate postnatal care and rejuvenation.</p>
              </div>

            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-10 md:p-16 lg:p-20 bg-cream">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark mb-3">Book Your Sanctuary</h2>
            <p className="text-dark/60 mb-10 font-sans">Fill in your details and our team will curate your experience.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/50">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Sarah Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-dark/20 px-0 py-3 outline-none focus:border-gold transition-all placeholder-dark/30 font-serif text-lg"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/50">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91..."
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-dark/20 px-0 py-3 outline-none focus:border-gold transition-all placeholder-dark/30 font-serif text-lg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/50">Arrival Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-dark/20 px-0 py-3 outline-none focus:border-gold transition-all text-dark font-serif text-lg"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/50">Inquiry Type</label>
                <div className="relative">
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-dark/20 px-0 py-3 outline-none focus:border-gold transition-all text-dark font-serif text-lg appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Booking Request</option>
                    <option>Schedule a Tour</option>
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-dark/40">
                    ▼
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-widest text-dark/50">Message / Requests</label>
                <textarea
                  name="address"
                  rows="2"
                  placeholder="How can we help make your stay perfect?"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-dark/20 px-0 py-3 outline-none focus:border-gold transition-all resize-none placeholder-dark/30 font-serif text-lg"
                  required
                />
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors duration-500 shadow-lg"
                >
                  Confirm Request
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
