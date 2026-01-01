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
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
                            A Premium Ecosystem of Care
                        </h2>
                        <p className="text-stone-500 text-lg">
                            We integrate medical expertise with holistic wellness, ensuring every detail is looked after.
                        </p>
                    </div>
                    <div>
                        <a href="#" className="px-8 py-4 border border-stone-200 rounded-full text-stone-900 hover:bg-stone-50 transition-colors uppercase text-sm font-bold tracking-widest">
                            View All Features
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-stone-100 border border-stone-100 overflow-hidden rounded-2xl">
                    {amenities.map((amenity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 md:p-12 flex flex-col items-center text-center group hover:bg-stone-50 transition-colors"
                        >
                            <div className="w-16 h-16 mb-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 group-hover:text-stone-800 group-hover:scale-110 transition-all duration-300">
                                <i className={`fa-thin ${amenity.icon} text-3xl`}></i>
                            </div>
                            <h3 className="font-serif text-lg text-stone-900 mb-2">{amenity.title}</h3>
                            <p className="text-sm text-stone-500">{amenity.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
