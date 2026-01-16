"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import BookingForm from "./BookingForm.jsx";
import { getPackages } from "../../../_api/packages/getPackages.js";
import PackageCardShimmer from "../_ui/PackageCardShimmer.jsx";

const MultiStepBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getPackages();
        setPackages(response);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching packages:", e);
      }
    };
    fetchData();
  }, []);

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
              <h1 className=" text-3xl md:text-4xl lg:text-5xl text-dark leading-tight mb-4">
                Select Your Wellness Journey
              </h1>
              <p className="text-dark/70  max-w-2xl mx-auto leading-relaxed">
                Choose the package that best suits your recovery needs
              </p>
            </div>

            {/* Package Cards Grid */}
            {loading ? (
              <PackageCardShimmer />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10">
                {packages.map((pkg, index) => {
                  const isSelected = selectedPackage?.title === pkg.title;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handlePackageSelect(pkg)}
                      className={`
                      relative rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300
                      border-[3px] 
                      ${
                        isSelected
                          ? "border-[#D4AF37] scale-[1.02] z-10"
                          : " hover:-translate-y-2 "
                      }
                    `}
                      style={{ backgroundColor: "#051512" }}
                    >
                      {/* Image Area */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={pkg?.images}
                          alt={pkg?.title}
                          className={`w-full h-full object-cover transition-transform duration-700 ${
                            isSelected ? "scale-105" : "hover:scale-110"
                          }`}
                        />
                        <span className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase font-bold bg-[#D4AF37] text-dark tracking-widest shadow-md">
                          {pkg?.duration_days} DAYS
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3
                          className={` text-[20px] md:text-[22px] mb-2 transition-colors duration-300 ${
                            isSelected ? "text-[#D4AF37]" : "text-white"
                          }`}
                        >
                          {pkg?.title}
                        </h3>

                        <p className="text-white/70 text-[14px] leading-relaxed mb-6 ">
                          {pkg?.description}
                        </p>

                        <div className="mt-auto">
                          <ul className="space-y-3 text-[14px] text-white/70 ">
                            {pkg.includes?.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check
                                  className={`w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-300 ${
                                    isSelected
                                      ? "text-[#D4AF37]"
                                      : "text-white/40"
                                  }`}
                                />
                                <span
                                  className={isSelected ? "text-white/90" : ""}
                                >
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Navigation Button */}
            <div className="flex justify-center gap-4 max-w-6xl mx-auto">
              <button
                onClick={handleNext}
                disabled={!selectedPackage}
                className={`px-6 py-3 rounded-full  text-md md:text-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedPackage
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg scale-105"
                    : "bg-dark/20 text-dark/40 cursor-not-allowed"
                }`}
              >
                Continue to Booking
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {currentStep === 2 && (
        <BookingForm
          selectedPackage={selectedPackage}
          onChangePackage={handleBack}
        />
      )}
    </>
  );
};

export default MultiStepBooking;
