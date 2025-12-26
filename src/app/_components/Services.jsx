import Image from "next/image";
import { services } from "../_utils/data";

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 border-8 border-[#FAF5F2] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h6 className="text-primary text-xl font-bold mb-4">
                {service.number}
              </h6>
              <div className="icon mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  height={40}
                  width={40}
                  className="w-16 h-16 object-contain bg-primary p-2 rounded-sm"
                />
              </div>
              <h4 className="text-2xl font-serif mb-4 text-dark">
                <a href="#" className="hover:text-primary transition-colors">
                  {service.title}
                </a>
              </h4>
              <p className="text-dark/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
