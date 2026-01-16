import Image from "next/image";
import { aboutMandara } from "../_utils/data";

export default function AboutMandara() {

  const { label, heading, lead, description, buttonText , image } = aboutMandara || {};

  return (
    <section id="about" className="py-12 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-primary mb-2 inline-block">
                {label}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-6 text-dark ">
              {heading}
            </h2>
            <p className="text-dark/80 mb-4">{lead}</p>
            <p className="text-dark/80 mb-10">{description}</p>
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors mb-4 whitespace-nowrap"
            >
              {buttonText}
            </a>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2">
            <Image
              src={image}
              alt={label}
              className="w-full rounded-lg shadow-lg"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
