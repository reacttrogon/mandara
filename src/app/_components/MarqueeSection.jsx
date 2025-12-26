'use client'
import {items} from "../_utils/data";

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="marquee-inner flex animate-scroll">
        <ul className="flex space-x-8 items-center">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <li key={index} className="flex items-center gap-4 flex-shrink-0">
              <span className="text-slider">
                <img src={item.icon} alt="icon" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              </span>
              <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl whitespace-nowrap">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

