'use client'

export default function WhatWeOfferSection() {
  const offerings = [
    { title: 'Personalized care', icon: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop', position: 'left' },
    { title: '24/7 newborn support', icon: 'https://images.unsplash.com/photo-1515488042361-ee00e0d4a8d0?w=400&h=400&fit=crop', position: 'left' },
    { title: 'Therapeutic treatments', icon: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop', position: 'left' },
    { title: 'Holistic nutrition', icon: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop', position: 'right' },
    { title: 'Private luxury accommodations', icon: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop', position: 'right' },
    { title: 'Emotional and mental wellness', icon: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop', position: 'right' }
  ]

  return (
    <section id="amenities" className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">WHAT WE OFFER</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">World-Class Amenities</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 space-y-6">
            {offerings.filter((_, i) => i < 3).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-1 text-right">
                  <h4 className="text-lg font-semibold text-dark">{item.title}</h4>
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://source.unsplash.com/400x400/?${encodeURIComponent(item.title)}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM (1).jpeg" 
              alt="What We Offer"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div className="w-full md:w-1/3 space-y-6">
            {offerings.filter((_, i) => i >= 3).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden flex-shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://source.unsplash.com/400x400/?${encodeURIComponent(item.title)}`
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-dark">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

