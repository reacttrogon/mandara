"use client";

import Image from "next/image";
import { aboutMandara } from "../_utils/data";
import ReadMore from "./ReadMore";

const AboutMandara = () => {
  const { heading, descriptions, image } = aboutMandara || {};

  return (
    <section className="bg-bage overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">

            <h2 className="text-3xl sm:text-4xl md:text-6xl text-dark mb-6">
              {heading}
            </h2>

            <div className="max-w-lg">
              <ReadMore
                text={descriptions.join("\n\n")}
                maxLines={8}
                textClassName="text-base text-dark/60 leading-relaxed"
              />
            </div>

          </div>

          {/* Right image (4:3 ratio) */}
          <div className="w-full md:w-[40%]">

            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-xl">

              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
                priority
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMandara;
