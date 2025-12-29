"use client";

import { galleries } from "../_utils/data";

export default function GallerySection() {
  return (
    <section className="py-8 text-primary uppercase">
      <div className="container mx-auto px-4 text-center">
        <span className="text-sm uppercase tracking-wider mb-2 inline-block">
          Visual Journey
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
          Mandara Gallery
        </h2>
      </div>

      <div
        className="
          flex
          gap-5
          mt-6  
          overflow-hidden    
          w-full
          h-48
          sm:h-60
          md:h-72
          lg:h-80
          hide-scrollbar
        "
      >
        {galleries.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Gallery"
            className="
              object-cover
              rounded-md
              flex-shrink-0
              w-56
              sm:w-72
              md:w-80
              lg:w-96
              h-full
            "
          />
        ))}
      </div>
    </section>
  );
}
