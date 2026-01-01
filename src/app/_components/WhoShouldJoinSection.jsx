"use client";

import { motion } from "framer-motion";
import { audience } from "../_utils/data";

export default function WhoShouldJoinSection() {
    return (
        <section className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xs font-bold tracking-[0.25em] text-stone-400 uppercase block mb-4"
                    >
                        Exclusively For You
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-800 leading-tight"
                    >
                        Who is Mandara for?
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[600px] md:h-[500px] lg:h-[600px]">
                    {audience.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group h-full rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent transition-opacity duration-300" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                                <motion.div
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    className="transition-transform duration-500"
                                >
                                    <img
                                        src="/assets/mandara/favicon.png"
                                        alt="icon"
                                        className="w-8 h-8 mb-4 opacity-80 brightness-0 invert"
                                    />
                                    <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
                                        {item.title}
                                    </h3>
                                    <div className="h-px w-12 bg-white/50 mt-6 group-hover:w-full transition-all duration-500 ease-out" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
