"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    status: "Delivered",
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
    <section id="contact" className="py-24 bg-[#E7E5E4] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
            <img
              src="/assets/images/image3.jpeg"
              alt="Luxury Room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-900/40" />
            <div className="absolute inset-0 p-12 flex flex-col justify-between text-white">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl mb-4">Start your journey today</h3>
                <p className="text-white/80">Experience the ultimate postnatal care.</p>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <p>+91 765 438 9716</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-lg">✉️</span>
                  </div>
                  <p>wellness@mandara.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl font-serif text-stone-800 mb-2">Book Your Stay</h2>
            <p className="text-stone-500 mb-8">Fill in your details and our team will contact you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-stone-700">Full Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. Sarah Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-stone-700">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91..."
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-stone-700">Arrival Date</label>
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-stone-700">Inquiry Type</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Booking Request</option>
                  <option>Schedule a Tour</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-stone-700">Message / Address</label>
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Any specific requests or your location..."
                  value={form.address}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 rounded-lg outline-none focus:border-stone-800 focus:ring-1 focus:ring-stone-800 transition-all resize-none"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-stone-900 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl"
              >
                Send Request
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
