'use client'

import { motion } from 'framer-motion'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      image: '/assets/images/app.png',
      title: 'Tech-enabled app for total control & support'
    },
    {
      image: '/assets/images/abut-2.png',
      title: 'Modern and Traditional spa and wellness suites'
    },
    {
      image: '/assets/images/tri.webp',
      title: 'Culturally rooted, modern postpartum care'
    },
    {
      image: '/assets/images/baby-sleep.png',
      title: '24/7 newborn care with real-time camera access'
    },
    {
      image: '/assets/images/bedroom.png',
      title: 'Smart luxury rooms with baby & mother care zones'
    },
    {
      image: '/assets/images/wellness.png',
      title: 'Personalized recovery plans with daily guidance'
    },
    {
      image: '/assets/images/Screenshot 2025-12-23 at 5.01.06 PM.png',
      title: 'Mother-baby memories curated beautifully'
    },
    {
      image: '/assets/images/eat.webp',
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
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="overflow-hidden rounded-lg mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </motion.div>
              <motion.h3
                className="text-lg font-serif text-dark group-hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <a href="#">{reason.title}</a>
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

