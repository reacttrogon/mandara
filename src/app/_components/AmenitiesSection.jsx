import Image from "next/image";
import { motion } from "framer-motion";
import { amenities } from "../_utils/data";

export default function AmenitiesSection() {

  return (
    <section className="py-14 md:py-10 bg-cream">
      <div className="container mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] text-gold uppercase block mb-3">
              Premium Facilities
            </span>

            <h2 className=" text-dark text-3xl md:text-4xl lg:text-5xl leading-tight mb-3">
              A Premium Ecosystem of Care
            </h2>

            <p className="text-dark/60 text-[18px] leading-relaxed ">
              We integrate medical expertise with holistic wellness, ensuring
              every detail is looked after.
            </p>
          </div>

          {/* <a
            href="#"
            className="inline-block px-8 py-4 border border-dark/20 rounded-full text-dark hover:bg-dark hover:text-white transition-all duration-300 uppercase text-[11px] tracking-[0.15em] font-bold"
          >
            View All Features
          </a> */}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative group rounded-2xl overflow-hidden shadow-sm h-[200px] w-full"
            >
              {/* Background Image */}
              <Image
                src={item?.image}
                alt={item?.title}
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className=" text-white text-lg mb-1 font-medium">{item?.title}</h3>
                <p className="text-white/80 text-sm">{item?.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}