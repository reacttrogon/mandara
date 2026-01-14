"use client";

import React, { useState } from "react";
import { Baby, Clock, FileText, Calendar, Package, ArrowLeft } from "lucide-react";
import Image from "next/image";

const BookingForm = ({ selectedPackage, onChangePackage }) => {
  const [deliveryStatus, setDeliveryStatus] = useState("delivered");

  return (
    <section className="bg-cream py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans text-dark mb-3 font-light">
            Reserve Your Sanctuary
          </h1>
          <p className="text-dark/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Share the details of your journey so we may thoughtfully prepare your postnatal suite 
            with the appropriate clinical care and hospitality comforts.
          </p>
        </div>

        {/* Single Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 lg:p-8 border border-dark/5">
          
          {/* Selected Package Section */}
          {selectedPackage && (
            <div className="pb-5 md:pb-6 mb-5 md:mb-6 border-b border-dark/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl font-sans text-dark font-light">
                  Selected Package
                </h2>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 bg-cream/50 rounded-lg p-4">
                <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-sans text-xl md:text-2xl text-dark">
                      {selectedPackage.title}
                    </h3>
                    <span className="px-3 py-1 text-[10px] uppercase font-bold bg-gold text-dark whitespace-nowrap">
                      {selectedPackage.duration}
                    </span>
                  </div>
                  <p className="text-dark/70 text-sm font-sans leading-relaxed mb-3">
                    {selectedPackage.description}
                  </p>
                  {onChangePackage && (
                    <button
                      onClick={onChangePackage}
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-sans text-sm font-medium"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Change Package
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Baby Information Section */}
          <div className="pb-5 md:pb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Baby className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-sans text-dark font-light">
                Baby Information
              </h2>
            </div>
            <p className="text-dark/70 text-base font-sans mb-4 ml-[52px]">Tell us about your little one</p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-dark/60 mb-2 block font-sans">
                  Have you delivered your baby?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryStatus("delivered")}
                    className={`py-2.5 px-4 rounded-lg font-sans text-xs text-center transition-all font-bold ${
                      deliveryStatus === "delivered"
                        ? "bg-primary text-white border-2 border-primary"
                        : "bg-white text-dark/60 border border-dark/10"
                    }`}
                  >
                    Yes, Delivered
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryStatus("expecting")}
                    className={`py-2.5 px-4 rounded-lg font-sans text-xs text-center transition-all font-bold ${
                      deliveryStatus === "expecting"
                        ? "bg-primary text-white border-2 border-primary"
                        : "bg-white text-dark/60 border border-dark/10"
                    }`}
                  >
                    Expecting
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-dark/60 mb-2 block font-sans">
                  When did you deliver?
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="dd-mm-yyyy"
                    className="w-full bg-white px-0 py-3 outline-none transition-all font-sans text-base text-dark"
                  />
                  <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Stay Duration Section */}
          <div className="py-5 md:py-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-sans text-dark font-light">
                Stay Duration
              </h2>
            </div>
            <p className="text-dark/70 text-base font-sans mb-4 ml-[52px]">When would you like to stay with us?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-dark/60 mb-2 block font-sans">
                  Arrival Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="dd-mm-yyyy"
                    className="w-full bg-white px-0 py-3 outline-none transition-all font-sans text-base text-dark"
                  />
                  <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-dark/60 mb-2 block font-sans">
                  Departure Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    placeholder="dd-mm-yyyy"
                    className="w-full bg-white px-0 py-3 outline-none transition-all font-sans text-base text-dark"
                  />
                  <Calendar className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-dark/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Notes Section */}
          <div className="pt-5 md:pt-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-lg md:text-xl font-sans text-dark font-light">
                Additional Notes
              </h2>
            </div>
            <p className="text-dark/70 text-base font-sans mb-4 ml-[52px]">Share any special requirements</p>

            <div>
           
              <textarea 
                rows={4}
                placeholder="Type your notes here..."
                className="w-full bg-white px-0 py-3 outline-none transition-all font-sans text-base text-dark resize-none placeholder-dark/40 leading-relaxed"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 md:pt-2 mt-1">
            <div className="w-full bg-primary text-white py-4 px-12 rounded-full font-sans text-md text-center shadow-lg font-semibold">
              Continue to Booking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
