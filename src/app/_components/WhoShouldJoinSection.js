'use client'

export default function WhoShouldJoinSection() {
    const audience = [
        {
            image: "/assets/images/mother.webp",
            title: "A new mother seeking premium postnatal recovery"
        },
        {
            image: "/assets/images/pregnant.webp",
            title: "An expecting mother preparing for childbirth"
        },
        {
            image: "/assets/images/women.webp",
            title: "A woman in need of focused rest and hormonal balance"
        },
        {
            image: "/assets/images/coup.png",
            title: "A couple seeking peaceful, supported bonding time"
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-dark">
                        Is Mandara for You?
                    </h2>
                    <p className="text-dark/70 text-lg">Absolutely if you're:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audience.map((item, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <img
                                    src="/assets/images/favicon.png"
                                    alt="icon"
                                    className="w-8 h-8 mb-3 opacity-80"
                                />
                                <h4 className="text-lg font-semibold leading-tight">
                                    {item.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
