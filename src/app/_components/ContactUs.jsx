import Image from "next/image";
import EnquiryForm from "./EnquiryForm";

export default function ContactUs() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-bage overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-7xl mx-auto shadow-2xl overflow-hidden flex flex-col lg:flex-row rounded-lg">
          {/* Image Side - Fully Immersive */}
          <div className="lg:w-5/12 relative min-h-[500px] lg:min-h-full">
            <Image
              src="/assets/gallery/contact.webp"
              alt="Luxury Room"
              loading="lazy"
              width={500}
              height={600}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-6 md:p-16 lg:p-20 bg-bage">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}

