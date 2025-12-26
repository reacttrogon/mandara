'use client'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      icon: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop',
      title: 'Diet Plans',
      number: "01",
      icon: "/assets/images/nutrition-plan.png",
      title: "Diet Plans",
      description: "Personalized pregnancy diet plans designed to support maternal health, fetal growth, and overall well-being throughout every trimester."
    },
    {
      number: "02",
      icon: "/assets/images/diet.png",
      title: "Nutrition",
      description: "Expert nutritional guidance focusing on essential vitamins, minerals, and balanced meals to ensure a healthy pregnancy journey."
    },
    {
      number: "03",
      icon: "/assets/images/lotus.png",
      title: "Yoga",
      description: "Safe and gentle prenatal yoga practices to improve flexibility, reduce stress, and prepare the body and mind for childbirth."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h6 className="text-primary text-xl font-bold mb-4">{service.number}</h6>
              <div className="icon mb-6">
                <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
              </div>
              <h4 className="text-2xl font-serif mb-4 text-dark">
                <a href="#" className="hover:text-primary transition-colors">{service.title}</a>
              </h4>
              <p className="text-dark/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
