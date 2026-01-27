import ImageCard from "./ImagesCard";
import { galleries } from "../../../_utils/data";

// Define which images should be wide (span 2 columns)
// Pattern creates alternating wide images: right, then left, then right, etc.
const getColumnSpan = (index) => {
  // Alternating pattern for visual balance
  // Row 1: [img][img][WIDE] (indexes 0,1,2-3)
  // Row 2: [WIDE][img][img] (indexes 4-5,6,7)
  // Row 3: [img][img][WIDE] (indexes 8,9,10-11)
  // Row 4: [WIDE][img][img] (indexes 12-13,14,15)

  const wideIndexes = [2, 4, 10, 12]; // Alternating positions
  return wideIndexes.includes(index) ? 2 : 1;
};

const ImagesCardContainer = () => {
  return (
    <section className="bg-bage py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Gallery
          </h1>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto">
            A glimpse into tranquility — Discover calming spaces designed for rest, renewal, and silence.
          </p>
        </div>

        {/* Grid with alternating wide images - no whitespace */}
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
