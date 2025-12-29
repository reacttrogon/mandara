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
            Thoughtfully Designed <br />
            Postnatal Care Plans
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div
                className="relative h-80 md:h-96 overflow-hidden flex items-center justify-center text-center "
                style={{
                  backgroundImage: `url(${pkg.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 1,
                }}
              >
                <div className="absolute inset-0 bg-black/40 "></div>
                <div className="p-6 relative">
                  <ul className="mb-4 text-sm text-gray-100 flex justify-center">
                    <li className="flex items-center gap-2">
                      <span className="uppercase">Duration - {pkg.duration}</span>
                    </li>
                  </ul>
                  <h3 className="text-3xl font-serif mb-4 text-gray-100">
                    {pkg.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-gray-100 border border-white px-4 py-1 hover:text-primary/80 hover:bg-white transition-colors font-semibold rounded-sm"
                  >
                    View Details <i className="fas fa-arrow-up-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
