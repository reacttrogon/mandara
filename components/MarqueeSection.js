'use client'

export default function MarqueeSection() {
  const items = [
    { icon: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop', text: "Women's wellness" },
    { icon: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300&h=300&fit=crop', text: 'Personalized Postnatal Recovery' },
    { icon: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop', text: 'Spa & Wellness' },
    { icon: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=300&fit=crop', text: 'Resort-Style Stay' }
  ]

  return (
    <section className="py-8 bg-primary overflow-hidden">
      <div className="marquee-inner flex animate-scroll">
        <ul className="flex space-x-12">
          {[...items, ...items, ...items].map((item, index) => (
            <li key={index} className="flex items-center space-x-4 flex-shrink-0">
              <img src={item.icon} alt={item.text} className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full" />
              <span className="text-white font-medium whitespace-nowrap">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

