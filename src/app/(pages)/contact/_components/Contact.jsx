import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import EnquiryForm from "../../../_components/EnquiryForm";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Background Image */}
        <Image
          src="/assets/images/contactus.jpeg"
          alt="Mandara Wellness"
          fill
          className="object-cover"
          priority
        />

        {/* Hero Content */}
        <div className="relative z-20 text-center text-bage px-6 max-w-2xl translate-y-[-20px]">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 ">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg">
            We’re here to support your wellness journey.
          </p>
        </div>
      </div>

      <section className="bg-bage px-4 md:px-6 py-20">
        <div className="max-w-6xl mx-auto relative z-30">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-5">

            {/* Left Side - Contact Info (High Contrast) */}
            <div className="md:col-span-2 bg-primary text-white p-10 flex flex-col justify-center gap-10 relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
                <p className="text-white/80 leading-relaxed mb-10 text-sm">
                  A sanctuary for new beginnings, where luxury meets holistic
                  postnatal care. Reconnect with yourself in our serene haven.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 mt-1 text-secondary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Phone</p>
                      <a href="tel:+917654389716" className="text-lg hover:text-secondary transition">
                        +91 765 438 9716
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 mt-1 text-secondary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Email</p>
                      <a href="mailto:wellness@mandara.com" className="text-lg hover:text-secondary transition">
                        wellness@mandara.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 mt-1 text-secondary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Location</p>
                      <p className="text-lg leading-tight">
                        Mandara Women's Wellness,<br />
                        Athanikkal, Kerala 673314
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials or extra elements could go here */}
            </div>

            {/* Right Side - Enquiry Form */}
            <div className="md:col-span-3 bg-bage p-8 md:p-12">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-bage px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg h-[350px] border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18121.23184063282!2d75.85209349995468!3d11.132565572191874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6513f0fb1d021%3A0x476b9558ddb813da!2sMandara%20Women&#39;s%20Wellness!5e0!3m2!1sen!2sin!4v1769509154080!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0"
            title="Mandara Wellness Location"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
