'use client'

export default function WhatWeOfferSection() {
  const offerings = [
    {
      title: "Personalized care",
      icon: "/assets/images/handshakee.png",
      position: "left",
    },
    {
      title: "24/7 newborn support",
      icon: "/assets/images/24-hours.png",
      position: "left",
    },
    {
      title: "Therapeutic treatments",
      icon: "/assets/images/physical-therapy.png",
      position: "left",
    },
    {
      title: "Holistic nutrition",
      icon: "/assets/images/healthy-food.png",
      position: "right",
    },
    {
      title: "Private luxury accommodations",
      icon: "/assets/images/house (3).png",
      position: "right",
    },
    {
      title: "Emotional and mental wellness",
      icon: "/assets/images/empathy.png",
      position: "right",
    },
  ];



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
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden flex-shrink-0">
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
              src="/assets/images/what-we-offer.webp"
              alt="What We Offer"
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/3 space-y-6">
            {offerings.filter((_, i) => i >= 3).map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden flex-shrink-0">
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

