"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { aboutMandara } from "../../../_utils/data";

export default function AboutSection() {
    return (
        <section className="bg-bage min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden mb-16 md:mb-24">
                <Image
                    src="/assets/gallery/about.jpeg"
                    alt="About Mandara"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl  text-white mb-6"
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>

            {/* Main Content - Text Focused */}
            <div className="container mx-auto px-6 max-w-4xl pb-24">

                {/* Introduction Text Only */}
                <div className="flex flex-col items-center text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl  text-dark mb-8 leading-tight"
                    >
                        {aboutMandara.heading}
                    </motion.h2>

                    <div className="space-y-6 text-dark/70 text-base leading-relaxed font-light md:text-center text-justify">
                        {aboutMandara.descriptions.map((desc, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {desc}
                            </motion.p>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
