"use client";

import { motion } from "framer-motion";

export default function AmenitiesSection() {
    const amenities = [
        {
            icon: "fa-bell-concierge",
            title: "Concierge Team",
            description: "24/7 dedicated support"
        },
        {
            icon: "fa-leaf-heart",
            title: "Expert Therapy",
            description: "Ayurvedic & Modern"
        },
        {
            icon: "fa-spa",
            title: "Yoga & Pilates",
            description: "Restorative Movement"
        },
        {
            icon: "fa-user-gear",
            title: "Wellness Heads",
            description: "On-site Leadership"
        },
        {
            icon: "fa-stethoscope",
            title: "Medical Experts",
            description: "Doctors & Pediatricians"
        }
    ];

    return (
        <section className="py-24 bg-cream">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase block mb-4">
                            Premium Facilities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-dark mb-6">
                            A Premium Ecosystem of Care
                        </h2>
                        <p className="text-dark/60 text-lg leading-relaxed font-sans">
                            We integrate medical expertise with holistic wellness, ensuring every detail is looked after.
                        </p>
                    </div>
                    <div>
                        <a href="#" className="inline-block px-8 py-4 border border-dark/20 rounded-full text-dark hover:bg-dark hover:text-white transition-all duration-300 uppercase text-xs font-bold tracking-widest">
                            View All Features
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-dark/10 border border-dark/10 overflow-hidden rounded-none">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 md:p-12 flex flex-col items-center text-center group hover:bg-gold/10 transition-colors duration-500"
                        >
                            <div className="w-16 h-16 mb-6 rounded-full bg-cream flex items-center justify-center text-dark/40 group-hover:text-gold group-hover:scale-110 transition-all duration-500">
                                <i className={`fa-thin ${amenity.icon} text-3xl`}></i>
                            </div>
                            <h3 className="font-serif text-lg text-dark mb-2">{amenity.title}</h3>
                            <p className="text-sm text-dark/60 font-sans">{amenity.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
