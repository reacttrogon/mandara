"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { mandaraLife } from "../../../_utils/data";
import ReadMore from "../../../_components/ReadMore";

export default function LifeSection() {
    // Helper function to create URL-friendly IDs
    const createId = (title) => {
        return title.toLowerCase().replace(/['&]/g, '').replace(/\s+/g, '-');
    };

    return (
        <section className="bg-bage min-h-screen">
            {/* Hero Section with Background Image */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden mb-16 md:mb-24">
                <Image
                    src="/assets/gallery/banner-3.jpeg"
                    alt="Mandara Life Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-20">
                    <div className="max-w-4xl relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl  text-bage mb-6"
                        >
                            {mandaraLife.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-bage/90 font-light leading-relaxed mx-auto max-w-2xl"
                        >
                            {mandaraLife.description}
                        </motion.p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-7xl pb-20">

                {/* Simple Grip Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20 lg:gap-y-24">
                    {mandaraLife.sections.map((item, index) => {
                        const sectionId = createId(item.title);

                        return (
                            <motion.div
                                key={index}
                                id={sectionId}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: index % 2 * 0.1 }}
                                className="flex flex-col h-full scroll-mt-24"
                            >
                                {/* Image - Clean & Simple */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl mb-8 bg-black/5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4 opacity-60">
                                        <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                            0{index + 1}
                                        </span>
                                        <div className="h-px w-8 bg-primary" />
                                    </div>

                                    <h2 className="text-3xl text-dark mb-3">
                                        {item.title}
                                    </h2>

                                    <h3 className="text-lg text-primary font-medium italic mb-4">
                                        {item.headline}
                                    </h3>

                                    <ReadMore text={item.description} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
