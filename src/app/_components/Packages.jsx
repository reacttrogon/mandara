"use client";
import { packages } from "../_utils/data";

export default function PackagesSection() {
  return (
    <section className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">
            Our Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark  ">
            Thoughtfully Designed <br />Postnatal Care Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <ul className="mb-4 text-sm text-dark/70">
                  <li className="flex items-center gap-2">
                    <i className="fas fa-clock text-primary"></i>
                    <span>Duration: {pkg.duration}</span>
                  </li>
                </ul>
                <h3 className="text-2xl font-serif mb-4 text-dark">
                  {pkg.title}
                </h3>
                <p className="text-dark/70 mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  View Details <i className="fas fa-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
