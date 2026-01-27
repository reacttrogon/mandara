import Image from "next/image";

const ImageCard = ({ src, alt, colSpan = 1 }) => {
  const colSpanClass = colSpan === 2 ? "sm:col-span-2" : "col-span-1";

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg h-[280px] md:h-[320px] ${colSpanClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, 25vw"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default ImageCard;
