'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-off-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img 
                src={encodeURI("/assets/images/WhatsApp Image 2025-12-20 at 12.47.20 PM.jpeg")}
                alt="About Image 1"
                className="w-full rounded-lg"
              />
              <img 
                src={encodeURI("/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg")}
                alt="About Image 2"
                className="absolute -bottom-4 -right-4 w-1/3 rounded-lg border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="text-center md:text-left mb-6">
              <span className="text-sm uppercase tracking-wider text-primary mb-4 inline-block">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">Welcome to Mandara</h2>
            </div>
            
            <div className="space-y-4 text-dark/80 leading-relaxed">
              <p>
                Mandara is India's first culturally blended, AI-enabled women's wellness retreat, thoughtfully created to support mothers after childbirth.
              </p>
              <p>
                A sanctuary designed for women, focused on care, comfort, and transformation. Women's wellness | Personalized Postnatal Recovery | Baby Care Support | Spa & Wellness | Resort-Style Stay
              </p>
              <p>
                Mandara is an environment, designed to support your transition into motherhood with elegance, clinical wellness, and warmth.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="#about" className="inline-block px-8 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

