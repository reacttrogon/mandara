"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PackageItem from "./PackageItem";

export default function PackageList({ packages, title, description, backLink }) {

    return (
        <div className="w-full">
            {/* Header with Back Button */}
            <div className="flex flex-col items-center justify-between mb-12 gap-6 relative">
                <div className="w-full flex justify-between items-start md:items-center">
                    <Link
                        href={backLink || "/bookings"}
                        className="flex items-center gap-2 text-dark/60 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
                    </Link>
                </div>

                <div className="text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark mb-4">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-dark/60 font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>
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
