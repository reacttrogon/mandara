import ImageCard from "./ImagesCard";
import { galleries } from "../../../_utils/data";
import Image from "next/image";

const getColumnSpan = (index) => {
  const wideIndexes = [2, 4, 10, 12]; // Alternating positions
  return wideIndexes.includes(index) ? 2 : 1;
};

const ImagesCardContainer = () => {
  return (
    <section className="bg-bage ">
       <div className="relative h-[60vh] w-full flex items-center justify-center">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />
      
              {/* Background Image */}
              <Image
                src="/assets/images/galleryTopImage.webp"
                alt="Mandara Wellness"
                fill
                className="object-cover"
                priority
              />
      
              {/* Hero Content */}
              <div className="relative z-20 text-center text-bage px-6 max-w-2xl translate-y-[-20px]">
                <h1 className="text-4xl md:text-6xl font-medium mb-4 ">
                  Gallery
                </h1>
                <p className="text-bage/80 text-lg">
                  A glimpse into tranquility — Discover calming spaces designed for rest, renewal, and silence.
                </p>
              </div>
            </div>

      <div className="max-w-7xl mx-auto px-6 py-10 ">
        {/* Grid with alternating wide images - no bagespace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ gridAutoFlow: 'dense' }}>

          {galleries.map((image, index) => (
            <ImageCard
              key={index}
              src={image}
              alt={`Mandara Gallery ${index + 1}`}
              colSpan={getColumnSpan(index)}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ImagesCardContainer;
