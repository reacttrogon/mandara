import ImageCard from "./ImagesCard";

const images = [
  { id: 1, src: "/assets/images/g1.jpg", alt: "Gallery 1", span: 2 },
  { id: 2, src: "/assets/images/g2.jpg", alt: "Gallery 2", span: 1 },
  { id: 3, src: "/assets/images/g3.jpg", alt: "Gallery 3", span: 2 },
  { id: 4, src: "/assets/images/g4.jpg", alt: "Gallery 4", span: 1 },
  { id: 5, src: "/assets/images/g5.jpg", alt: "Gallery 5", span: 3 },
];

const ImagesCardContainer = () => {
  return (
    <section className="bg-bage py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-12 text-center">
          Images Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6">

          {images.map(img => (
            <ImageCard
              key={img.id}
              src={img.src}
              alt={img.alt}
              span={img.span}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default ImagesCardContainer;
