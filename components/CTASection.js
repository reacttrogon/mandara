'use client'

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="w-full md:w-1/2">
            <img 
              src="/assets/images/WhatsApp Image 2025-12-20 at 12.47.21 PM.jpeg" 
              alt="Mandara"
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-semibold mb-2 text-dark">Need help? Call us Today</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">+201- 555-0124</h2>
            <a href="#contact" className="inline-block px-8 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors font-semibold">
              Get an appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

