'use client'
import { useState } from "react";
import { Calendar, Mail, Phone, User} from "lucide-react";
import Link from "next/link";

export default function PaymentForm() {

  const [check, setCheck] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto py-8 md:py-12 px-6 md:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-dark mb-4">
          Reserve Your Sanctuary
        </h1>
        <p className="text-lg text-dark/60">
          Enter your details to begin the journey of restoration.
        </p>
      </div>

      <form className="space-y-8">
        {/* Date Fields */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs uppercase tracking-wider text-dark/60 mb-3 font-medium">
              Arrival Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
              <input
                type="date"
                name="arrivalDate"
                className="w-full pl-8 pr-8 py-3 border-b-2 border-dark/20 bg-transparent focus:outline-none focus:border-primary text-dark placeholder:text-dark/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-dark/60 mb-3 font-medium">
              Departure Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
              <input
                type="date"
                name="departureDate"
                disabled={true}
                className="w-full pl-8 pr-8 py-3 border-b-2 border-dark/20 bg-transparent text-dark/60"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-wider text-dark/60 mb-3 font-medium">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
            <input
              type="text"
              name="name"
              className="w-full pl-8 py-3 border-b-2 border-dark/20 bg-transparent focus:outline-none focus:border-primary text-dark placeholder:text-dark/30"
              placeholder="Your full name"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs uppercase tracking-wider text-dark/60 mb-3 font-medium">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
              <input
                type="email"
                name="email"
                className="w-full pl-8 py-3 border-b-2 border-dark/20 bg-transparent focus:outline-none focus:border-primary text-dark placeholder:text-dark/30"
                placeholder="hello@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-dark/60 mb-3 font-medium">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/40" />
              <input
                type="tel"
                name="phone"
                className="w-full pl-8 py-3 border-b-2 border-dark/20 bg-transparent focus:outline-none focus:border-primary text-dark placeholder:text-dark/30"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="pt-8">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" name="termsAccepted" className="w-5 h-5 accent-primary " />
            {/* <div className="w-5 h-5">
                {check ?<CircleCheckBig className="text-primary "/> :<CircleCheckBig className="text-gray-400 "/>}
            </div> */}
            <span className="text-sm text-dark/70">
              I accept the{" "}
              <Link
                href="/terms-and-condition"
                className="underline text-primary hover:text-primary/80"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/terms-and-condition"
                className="underline text-primary hover:text-primary/80"
              >
                Privacy Policy
              </Link>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={!check}
            className={`w-full py-2.5 bg-primary text-white font-medium tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg text-lg  ${check?"cursor-pointer":"cursor-not-allowed bg-primary/60"}`}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}
