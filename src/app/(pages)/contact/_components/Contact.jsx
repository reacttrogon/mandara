import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[75vh] w-full flex items-center justify-center">
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
        <div className="relative z-20 text-center text-bage px-6 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-medium mb-4 ">
            Get in Touch
          </h1>
          <p className="text-white/80 text-lg">
            We’re here to support your wellness journey with care and comfort.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-bage px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left Card */}
          <div>
            <p className="mb-8 text-black/70 leading-relaxed">
              A sanctuary for new beginnings, where luxury meets holistic
              postnatal care. Reconnect with yourself in our serene haven.
            </p>

            <div className="space-y-4 text-black">
              <div className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5" />
                <a
                  href="tel:+917654389716"
                  className="hover:text-primary transition"
                >
                  +91 765 438 9716
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5" />
                <a
                  href="mailto:wellness@mandara.com"
                  className="hover:text-primary transition"
                >
                  wellness@mandara.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 mt-1" />
                <p className="leading-relaxed hover:text-primary transition">
                  G1003, NH 66, Kozhikode Bypass <br />
                  Calicut, Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-[420px] w-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18121.23184063282!2d75.85209349995468!3d11.132565572191874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6513f0fb1d021%3A0x476b9558ddb813da!2sMandara%20Women&#39;s%20Wellness!5e0!3m2!1sen!2sin!4v1769509154080!5m2!1sen!2sin"
              loading="lazy"
              height={420}
              width={520}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
