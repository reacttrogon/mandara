"use client";

import { motion } from "framer-motion";
import { audience } from "../_utils/data";

export default function WhoShouldJoinSection() {
    return (
        <section className="py-24 bg-dark text-white relative overflow-hidden">
            {/* Background texture or subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-stone-900 to-dark opacity-80 z-0" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block mb-4">
                            Exclusive Retreats
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
                            Who is Mandara for?
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            className="relative group h-[500px] rounded-sm overflow-hidden cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500" />

                            {/* Border Overlay */}
                            <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100" />

                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <motion.div
                                    className="transform transition-transform duration-500 group-hover:-translate-y-2"
                                >
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-serif text-white leading-snug mb-1">
                                            {item.title}
                                        </h3>
                                        <div className="h-[2px] w-0 bg-gold group-hover:w-12 transition-all duration-500" />
                                    </div>

                                    {/* Description that reveals on hover (optional if data exists, otherwise keep it clean) */}
                                    <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
                                        Experience refined wellness designed for your lifestyle.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
