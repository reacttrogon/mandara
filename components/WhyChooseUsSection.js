'use client'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg',
      title: 'Culturally rooted, modern postpartum care'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg',
      title: '24/7 newborn care with real-time camera access'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg',
      title: 'Smart luxury rooms with baby & mother care zones'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg',
      title: 'Modern and Traditional spa and wellness suites'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg',
      title: 'Personalized recovery plans with daily guidance'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg',
      title: 'Tech-enabled app for total control & support'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg',
      title: 'Mother-baby memories curated beautifully'
    },
    {
      image: '/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg',
      title: 'Gourmet healing meals & snacks'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">Why Mandara?</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="#" className="px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
              View All
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-serif text-dark group-hover:text-primary transition-colors">
                <a href="#">{reason.title}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

