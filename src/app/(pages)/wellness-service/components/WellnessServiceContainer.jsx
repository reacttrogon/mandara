import Image from "next/image";
import { wellnessServices } from "../../../_utils/data";
import ServicesCard from "./ServicesCard";

const WellnessServiceContainer = () => {
  const { title, description, services, image } = wellnessServices || {};

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4 sm:px-10 md:px-28">
          <h1 className=" text-bage mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="font-light leading-relaxed text-bage max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full bg-bage text-dark">
        <div className="w-full mx-auto md:px-25">
          <ServicesCard services={services} />
        </div>
      </div>
    </>
  );
};

export default WellnessServiceContainer;
