'use client'

export default function MarqueeSection() {
  const items = [
    "WOMEN'S WELLNESS",
    'PERSONALIZED POSTNATAL RECOVERY',
    'SPA & WELLNESS',
    'RESORT-STYLE STAY'
  ]

  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="marquee-inner flex animate-scroll">
        <ul className="flex space-x-12">
          {[...items, ...items, ...items].map((item, index) => (
            <li key={index} className="flex items-center flex-shrink-0">
              <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap uppercase tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

