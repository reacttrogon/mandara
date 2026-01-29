"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CategoryItem({ category }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="relative h-[450px] rounded-2xl overflow-hidden group shadow-lg text-left cursor-pointer"
        >
            <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-3xl text-white mb-3">{category.title}</h4>
                <p className="text-white/80 font-light text-sm line-clamp-3 mb-4 leading-relaxed">
                    {category.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore <span className="text-xl">→</span>
                </div>
            </div>
        </motion.div>
    );
}
