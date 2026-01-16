import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutMandara() {
  return (
    <section id="about" className="py-12 md:py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <div className="mb-4">
              <span className="text-sm uppercase tracking-wider text-primary mb-2 inline-block">
                About Mandara
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-6 text-dark ">
              A Sanctuary for New Mothers
            </h2>
            <p className="text-dark/80 mb-4">
              Where new beginnings are nurtured with world-class care, comfort,
              and compassion.
            </p>
            <p className="text-dark/80 mb-10">
              Mandara Wellness Clinic is a premier postnatal care facility where
              medical excellence meets luxury hospitality. We provide new
              mothers and their babies with an unparalleled experience of
              comfort, care, and holistic recovery.
            </p>
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors mb-4 whitespace-nowrap"
            >
              More About Mandara
            </a>
          </div>

          <div className="w-full md:w-7/12 order-1 md:order-2">
            <Image
              src={"/assets/images/couple-abt.webp"}
              alt={"Couple About"}
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
