'use client'

import { useEffect, useRef } from 'react'

export default function CounterSection() {
  const counters = [
    { number: 400, label: 'Team member', icon: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop' },
    { number: 50, label: 'Expert Nurses', icon: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop' },
    { number: 100, label: 'Client review', icon: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=300&fit=crop' },
    { number: 40, label: 'Specialist', icon: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop' }
  ]

  const counterRefs = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target
          const target = parseInt(counter.dataset.target)
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0

          const updateCounter = () => {
            current += increment
            if (current < target) {
              counter.textContent = Math.floor(current) + '+'
              requestAnimationFrame(updateCounter)
            } else {
              counter.textContent = target + '+'
            }
          }
          updateCounter()
          observer.unobserve(counter)
        }
      })
    }, observerOptions)

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      counterRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">
                <img src={counter.icon} alt={counter.label} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full" />
              </div>
              <div className="mb-2">
                <span 
                  ref={(el) => (counterRefs.current[index] = el)}
                  data-target={counter.number}
                  className="text-4xl md:text-5xl font-bold text-primary"
                >
                  0+
                </span>
              </div>
              <span className="text-dark/70">{counter.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

