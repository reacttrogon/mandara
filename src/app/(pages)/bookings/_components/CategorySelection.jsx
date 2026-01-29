"use client";

import Link from "next/link";
import { wellnessFlow } from "../../../_utils/wellnessPackages";
import CategoryItem from "./CategoryItem";

export default function CategorySelection() {
    return (
        <div className="flex flex-col items-center">
            <div className="text-center max-w-3xl mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark mb-6">Begin Your Journey</h2>
                <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed mb-8">
                    Choose the wellness path that resonates with your current life stage.
                </p>
                <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full mb-16">
                {wellnessFlow.map((category) => (
                    <Link href={`/bookings/${category.id}`} key={category.id} className="block w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] min-w-[300px]">
                        <CategoryItem category={category} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
