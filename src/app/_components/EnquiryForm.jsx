"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    status: "General Inquiry",
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
    <div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-light text-dark">
        Start Your Journey Today
      </h2>

      <p className="text-dark/80 mb-10 leading-relaxed">
        Fill in your details and our team will curate your experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Full Name */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-widest text-dark/60 block">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-dark/20 px-0 py-3 outline-none 
                       focus:border-primary transition-all text-dark placeholder:text-dark/40 text-base"
            required
          />
        </div>

        {/* Phone + Enquiry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-dark/60 block">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="+91 00000 00000"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b-2 border-dark/20 px-0 py-3 outline-none 
                         focus:border-primary transition-all text-dark placeholder:text-dark/40 text-base"
              required
            />
          </div>

          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-widest text-dark/60 block">
              Enquiry Type
            </label>

            <div className="relative">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full bg-transparent border-b-2 border-dark/20 px-0 py-3 outline-none 
                           focus:border-primary transition-all text-dark text-base appearance-none cursor-pointer"
              >
                <option className="text-dark">General Enquiry</option>
                <option className="text-dark">Booking Request</option>
              </select>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-dark/40">
                ▼
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <label className="text-xs font-bold uppercase tracking-widest text-dark/60 block">
            Message / Requests
          </label>
          <textarea
            name="address"
            rows="3"
            placeholder="Tell us about your needs or any special requests"
            value={form.address}
            onChange={handleChange}
            className="w-full bg-transparent border-b-2 border-dark/20 px-0 py-3 outline-none 
                       focus:border-primary transition-all resize-none text-dark placeholder:text-dark/40 
                       text-base leading-relaxed"
            required
          />
        </div>

        {/* Button */}
        <div className="pt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full md:w-auto px-12 py-4 bg-primary text-bage font-bold uppercase tracking-widest 
                       text-xs hover:bg-primary/90 transition-colors duration-500 shadow-lg rounded-full"
          >
            Confirm Request
          </motion.button>
        </div>

      </form>
    </div>
  );
}
