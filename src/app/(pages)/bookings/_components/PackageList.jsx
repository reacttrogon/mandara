"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PackageItem from "./PackageItem";

export default function PackageList({ packages, title, description, backLink }) {

    return (
        <div className="w-full">
            {/* Header with Back Button */}
            <div className="flex flex-col items-center text-center mb-16 relative">
                <Link
                    href={backLink || "/bookings"}
                    className="absolute left-0 top-0 flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:inline text-sm font-bold uppercase tracking-widest">Back</span>
                </Link>

                {/* Mobile Back Button (Top Left of Content) if needed, but absolute works fine if container relative. 
                    However, on mobile, absolute left-0 top-0 might be above text if mt-0. 
                    SubCategorySelection uses mt-12 md:mt-0 to clear space on mobile.
                */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark mb-6 mt-12 md:mt-0">
                    {title}
                </h2>
                {description && (
                    <p className="text-base md:text-lg text-dark/70 font-light leading-relaxed max-w-3xl mx-auto mb-8">
                        {description}
                    </p>
                )}
                <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="flex flex-wrap justify-center gap-6 w-full">
                {packages.map((pkg, index) => (
                    <div key={index} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[280px]">
                        <PackageItem pkg={pkg} index={index} />
                    </div>
                ))}
            </div>
        </div>
    );
}
