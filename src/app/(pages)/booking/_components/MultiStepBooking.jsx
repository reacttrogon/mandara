"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { packages } from "../../../_utils/data";
import BookingForm from "./BookingForm.jsx";

const MultiStepBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleNext = () => {
    if (selectedPackage) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };


  return (
    <>
      {currentStep === 1 && (
        <section className="min-h-screen bg-cream py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center mb-10 md:mb-14">
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-primary font-semibold block mb-2.5">
                Postnatal Recovery
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark leading-tight mb-4">
                Select Your Wellness Journey
              </h1>
              <p className="text-dark/70 font-sans max-w-2xl mx-auto leading-relaxed">
                Choose the package that best suits your recovery needs
              </p>
            </div>

            {/* Package Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handlePackageSelect(pkg)}
                  className={`border-2 rounded-lg overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ${
                    selectedPackage?.title === pkg.title
                      ? "border-gold"
                      : "border-white/10 hover:border-primary/40"
                  }`}
                  style={{ backgroundColor: "#051512" }}
                >
                  {/* Image */}
                  <div className="relative h-64">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase font-bold bg-gold text-dark tracking-widest">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-[20px] md:text-[22px] mb-2 text-white">
                      {pkg.title}
                    </h3>

                    <p className="text-white/70 text-[14px] leading-relaxed mb-6 font-sans">
                      {pkg.description}
                    </p>

                    <ul className="space-y-2 text-[14px] text-white/70 font-sans">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Doctor Consultation
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        Ayurvedic Treatments
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 max-w-6xl mx-auto">
              <button
                onClick={handleNext}
                disabled={!selectedPackage}
                className={`px-8 py-4 rounded-full font-sans text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 ${
                  selectedPackage
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg"
                    : "bg-dark/20 text-dark/40 cursor-not-allowed"
                }`}
              >
                Continue to Booking
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {currentStep === 2 && (
        <BookingForm selectedPackage={selectedPackage} onChangePackage={handleBack} />
      )}
    </>
  );
};

export default MultiStepBooking;

