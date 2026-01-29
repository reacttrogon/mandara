"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PackageItem({ pkg, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
            {/* Image with Badge */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                />
                {/* Gold Duration Badge */}
                <div className="absolute top-4 right-4 bg-secondary text-dark text-xs font-bold px-4 py-2 uppercase tracking-wider shadow-sm">
                    {pkg.duration}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-2xl text-dark mb-3">{pkg.title}</h3>

                {/* Description */}
                <p className="text-sm text-dark/70 mb-6 leading-relaxed">
                    {pkg.description}
                </p>

                {/* Green Button */}
                <button className="w-full mt-auto py-3.5 bg-primary text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                    VIEW PACKAGE <span className="text-base">→</span>
                </button>
            </div>
        </motion.div>
    );
}
