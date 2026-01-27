import Image from "next/image";

const spanClasses = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
};

const ImageCard = ({ src, alt, span = 1 }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${spanClasses[span]}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-bottom transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      {/* Optional overlay (for future use) */}
      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ImageCard;
