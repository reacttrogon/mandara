"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SubCategoryItem({ subCategory }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg text-left cursor-pointer"
        >
            <Image
                src={subCategory.image}
                alt={subCategory.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 w-full">
                <h4 className="text-2xl md:text-3xl text-bage mb-2">{subCategory.title}</h4>
                {subCategory.description && (
                    <p className="text-bage/80 font-light text-sm line-clamp-2 mb-4">{subCategory.description}</p>
                )}
                <div className="mt-auto flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    Select <span className="text-xl">→</span>
                </div>
            </div>
        </motion.div>
    );
}
