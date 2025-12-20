'use client'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      icon: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop',
      title: 'Diet Plans',
      description: 'Personalized pregnancy diet plans designed to support maternal health, fetal growth, and overall well-being throughout every trimester.'
    },
    {
      number: '02',
      icon: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=400&fit=crop',
      title: 'Nutrition',
      description: 'Expert nutritional guidance focusing on essential vitamins, minerals, and balanced meals to ensure a healthy pregnancy journey.'
    },
    {
      number: '03',
      icon: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop',
      title: 'Yoga',
      description: 'Safe and gentle prenatal yoga practices to improve flexibility, reduce stress, and prepare the body and mind for childbirth.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <span className="text-4xl font-serif text-primary/30 mb-4 block">{service.number}</span>
              <div className="mb-6 flex justify-center">
                <img src={service.icon} alt={service.title} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full" />
              </div>
              <h4 className="text-xl font-serif mb-4 text-dark">
                <a href="#" className="hover:text-primary transition-colors">{service.title}</a>
              </h4>
              <p className="text-dark/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

