"use client";
import Image from "next/image";
import { motion } from "framer-motion"
import ReadMore from "../../../_components/ReadMore";

const ServicesCard = ({ services }) => {
    // Helper function to create URL-friendly IDs
    const createId = (title) => {
        return title.toLowerCase().replace(/['&]/g, '').replace(/\s+/g, '-');
    };

    return (
        <div className="w-full flex flex-col gap-12 md:gap-16 lg:gap-20 py-6 md:py-16 bg-bage text-dark overflow-hidden">
            {services?.map((service, index) => {
                const isEven = index % 2 === 0;
                const sectionId = createId(service?.title);

                return (
                    <motion.div
                        key={index}
                        id={sectionId}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center gap-6 md:gap-10 lg:gap-16 max-w-7xl mx-auto px-4 md:px-6 scroll-mt-24`}
                    >
                        {/* Content Section */}
                        <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl  text-dark tracking-tight break-words">
                                {service?.title}
                            </h3>
                            <p className="text-lg text-primary font-medium italic leading-relaxed break-words">
                                {service?.headline}
                            </p>
                            <div className="w-16 md:w-20 h-[1px] bg-primary/20 mx-auto lg:mx-0 my-3 md:my-4 lg:my-6" />
                            <ReadMore text={service?.description} />
                        </div>

                        {/* Image Section */}
                        <motion.div
                            className="flex-1 w-full max-w-md lg:max-w-none relative group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative aspect-[3/2] md:aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                                <Image
                                    src={service?.image}
                                    alt={service?.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Decorative offset border */}
                            <div className={`absolute -bottom-4 -right-4 w-full h-full border border-primary/30 -z-10 rounded-sm hidden lg:block ${!isEven ? "-left-4 right-auto" : ""
                                }`} />
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default ServicesCard;
