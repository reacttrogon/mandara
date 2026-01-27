"use client";

import { useForm } from "react-hook-form";
import { Baby, Clock, FileText, Package, ArrowLeft } from "lucide-react";
import Image from "next/image";
import {booking} from "../../../_api/booking/booking";

const BookingForm = ({ selectedPackage = [], onChangePackage }) => {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      is_delivered: 1,
      cottage_package_id: selectedPackage.id,
      date_to: "",
    },
  });
  const deliveryStatus = watch("is_delivered");

  const onSubmit = async (data) => {
    const response = await booking(data);
    console.log(response)
    // reset();
  };

  return (
    <section className="bg-bage py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  text-dark mb-3 font-light">
            Reserve Your Sanctuary
          </h1>
          <p className="text-dark/80  max-w-2xl mx-auto leading-relaxed">
            Share the details of your journey so we may thoughtfully prepare
            your postnatal suite with the appropriate clinical care and
            hospitality comforts.
          </p>
        </div>

        {/* Single Form Container */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-2xl shadow-xl p-5 md:p-6 lg:p-8 border border-dark/5">
            {/* Selected Package Section */}
            {selectedPackage && (
              <div className="pb-5 md:pb-6 mb-5 md:mb-6 ">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg md:text-xl  text-dark font-light">
                    Selected Package
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 bg-bage/50 rounded-lg p-4">
                  <div className="relative w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={selectedPackage?.images}
                      alt={selectedPackage?.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className=" text-xl md:text-2xl text-dark">
                        {selectedPackage?.title}
                      </h3>
                      <span className="px-3 py-1 text-[10px] uppercase font-bold bg-gold text-dark whitespace-nowrap">
                        {selectedPackage?.duration_days} DAYS
                      </span>
                    </div>
                    <p className="text-dark/70 text-sm  leading-relaxed mb-3">
                      {selectedPackage?.description}
                    </p>
                    {onChangePackage && (
                      <button
                        onClick={onChangePackage}
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors  text-sm font-medium"
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
              <div className="flex items-center gap-3 ">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Baby className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl  text-dark font-light">
                  Baby Information
                </h2>
              </div>
              <p className="text-dark/70 text-base  mb-4 ml-[52px]">
                Tell us about your little one
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-md font-medium text-dark/60  block  mb-2">
                    Have you delivered your baby?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setValue("is_delivered", 1);
                      }}
                      className={`py-2.5 px-4 rounded-full  text-md text-center font-bold ${
                        deliveryStatus === 1
                          ? "bg-primary text-white border-2 border-primary"
                          : "bg-white text-dark/60 border border-dark/10"
                      }`}
                    >
                      Yes, Delivered
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setValue("is_delivered", 0);
                      }}
                      className={`py-2.5 px-4 rounded-full  text-md text-center  font-bold ${
                        deliveryStatus === 0
                          ? "bg-primary text-white border-2 border-primary"
                          : "bg-white text-dark/60 border border-dark/10"
                      }`}
                    >
                      Expecting
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    className={`block  text-md font-medium  ${
                      errors.delivery_date
                        ? " text-red-500 font-semibold"
                        : "text-dark/60"
                    }`}
                  >
                    {deliveryStatus === 0
                      ? "When did you expect?"
                      : "When did you deliver?"}
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      {...register("delivery_date", { required: true })}
                      className="w-full bg-white px-0 py-3 outline-none transition-all  text-base text-dark"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stay Duration Section */}
            <div className="py-5 md:py-6">
              <div className="flex items-center gap-3 ">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl  text-dark font-medium">
                  Stay Duration
                </h2>
              </div>
              <p className="text-dark/70 text-base  mb-4 ml-[52px]">
                When would you like to stay with us?
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`${
                      errors.date_from
                        ? "text-red-500 font-semibold"
                        : "text-md font-medium text-dark/60 mb-2 block "
                    }`}
                  >
                    Arrival Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      {...register("date_from", { required: true })}
                      className="w-full bg-white px-0 py-3 outline-none transition-all  text-base text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-md font-medium text-dark/60 mb-2 block ">
                    Departure Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      placeholder="dd-mm-yyyy"
                      disabled={true}
                      {...register("date_to")}
                      className="w-full bg-white px-0 py-3 outline-none transition-all  text-base text-dark"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Notes Section */}
            <div className="pt-5 md:pt-6">
              <div className="flex items-center gap-3 ">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-lg md:text-xl  text-dark font-medium">
                  Additional Notes
                </h2>
              </div>
              <p className="text-dark/70 text-base  mb-4 ml-[52px]">
                Share any special requirements
              </p>

              <div>
                <textarea
                  rows={4}
                  placeholder="Type your notes here..."
                  {...register("additional_note")}
                  className="w-full bg-white px-0 py-3 outline-none transition-all  text-base text-dark resize-none placeholder-dark/40 leading-relaxed"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className=" md:pt-2 ">
              <button
                className="w-full bg-primary text-white py-4 px-12 rounded-full text-md md:text-lg text-center shadow-lg font-medium cursor-pointer"
                type="submit"
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
