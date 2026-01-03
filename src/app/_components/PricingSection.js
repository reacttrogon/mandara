'use client'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const pricingPlans = [
    {
      title: 'Standard Care',
      price: '₹1,75,000',
      features: [
        'Luxury suite with nursery area',
        '24/7 nurse care & Neo Cam access',
        '3 nutritious meals + snacks daily'
      ]
    },
    {
      title: '7–14 Days Stay',
      price: '₹75,000',
      features: [
        'Personalized postnatal recovery support',
        'Mother & newborn wellness monitoring',
        'Comfort-focused stay experience'
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-end">
          <div className="w-full md:w-1/3">
            <img
              src="/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg"
              alt="Pricing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-2/3">
            <div className="mb-12">
              <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">Our Pricing</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">Postnatal Care Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <h4 className="text-2xl font-serif mb-4 text-dark">{plan.title}</h4>
                    <h2 className="text-4xl font-bold text-primary">{plan.price}</h2>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-1" />
                        <span className="text-dark/70">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="block w-full text-center px-6 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                    Enquire Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

