"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SubCategoryItem from "./SubCategoryItem";

export default function SubCategorySelection({ category }) {
    if (!category || !category.subCategories) return null;

    return (
        <div className="w-full">
            {/* Header with Back */}
            <div className="flex flex-col items-center text-center mb-16 relative">
                <Link
                    href="/bookings"
                    className="absolute left-0 top-0 flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline text-sm font-bold uppercase tracking-widest">Back</span>
                </Link>

                <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark mb-6 mt-12 md:mt-0">
                    {category.title}
                </h2>
                <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-3xl mb-8">
                    {category.description}
                </p>
                <div className="w-24 h-1 bg-primary mx-auto mb-10" />
                <h3 className="text-2xl md:text-3xl text-dark/90 italic">
                    {category.question}
                </h3>
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full">
                {category.subCategories.map((sub) => (
                    <Link href={`/bookings/${category.id}/${sub.id}`} key={sub.id} className="block w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px]">
                        <SubCategoryItem subCategory={sub} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
