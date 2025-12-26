'use client'

export default function AmenitiesSection() {
    const amenities = [
        {
            icon: "fa-bell-concierge",
            title: "Hospitality & Concierge Team",
            description: "Dedicated professionals ensuring personalized comfort."
        },
        {
            icon: "fa-leaf-heart",
            title: "Ayurvedic & Modern Therapists",
            description: "A blend of traditional healing and modern therapy."
        },
        {
            icon: "fa-spa",
            title: "Yoga & Pilates Coaches",
            description: "Expert-guided sessions focused on postnatal strength."
        },
        {
            icon: "fa-user-gear",
            title: "Wellness & Operations Heads",
            description: "On-site leadership ensuring quality standards."
        },
        {
            icon: "fa-stethoscope",
            title: "Gynecologist & Pediatric Support",
            description: "Access to trusted medical professionals for mother and baby."
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-[#f5f1ed]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-4/12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">
                            A Premium Ecosystem of Care
                        </h2>
                        <p className="text-dark/70 mb-6 leading-relaxed">
                            At Mandara, we integrate medical expertise, holistic wellness.
                        </p>
                        <a href="#" className="inline-block px-8 py-3 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                            All Amenities
                        </a>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="w-full lg:w-8/12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="icon mb-4">
                                        <i className={`fa-thin ${amenity.icon} text-4xl text-primary`}></i>
                                    </div>
                                    <h5 className="text-lg font-serif mb-3 text-dark">{amenity.title}</h5>
                                    <p className="text-dark/70 text-sm leading-relaxed">
                                        {amenity.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
