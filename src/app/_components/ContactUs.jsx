"use client";

import { useState } from "react";

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
    <div className="flex flex-col items-center justify-center p-4">
        <h2 className="text-xl md:text-5xl font-serif">BOOK NOW </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-8"
      >

        {/* Full Name */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 outline-none rounded-md focus:border-[#508066]"
            required
          />
        </div>

        {/* Contact Number */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 outline-none rounded-md focus:border-[#508066]"
            required
          />
        </div>

        <div className="flex gap-5">
          {/* Delivery Status */}
          <div className="mb-6 flex-1">
            <label className="block mb-2 font-medium">
              Delivery Status <span className="text-red-500">*</span>
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 outline-none rounded-md focus:border-[#508066]"
            >
              <option>Delivered</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>

          {/* Arrival Date */}
          <div className="mb-6 flex-1">
            <label className="block mb-2 font-medium">
              Arrival Date <span className="text-red-500">*</span>
            </label>
            <input
              name="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 outline-none rounded-md focus:border-[#508066]"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="mb-8">
          <label className="block mb-2 font-medium">
            Hospital / Pickup Address <span className="text-red-500">*</span>
          </label>
          <textarea
            name="address"
            rows="3"
            placeholder="Enter hospital or pickup location"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 outline-none rounded-md focus:border-[#508066]"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3 text-white font-medium rounded-md"
          style={{ backgroundColor: "#508066" }}
        >
          Submit Details
        </button>
      </form>
    </div>
  );
}
