"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
    {
        title: "Women’s Wellness",
        headline:
            "Holistic care to restore balance, clarity, and everyday wellbeing.",
        description:
            "Women’s wellness at Mandara is designed for women who wish to care for themselves with intention and awareness, rather than urgency. It supports long-term wellbeing through preventive, restorative, and deeply personalised care. Each wellness journey begins with a personal consultation and unfolds at a natural pace, supporting physical rhythms, emotional steadiness, and mental clarity. Mandara values rest as much as action, offering a sanctuary where wellbeing is nurtured with care and consistency.",
        image: "/assets/mandara/women.webp",
    },
    {
        title: "Prenatal Wellness",
        headline:
            "Supportive care through pregnancy, focused on comfort, calm, and confidence.",
        description:
            "Pregnancy is a period of profound change, requiring care that is both protective and nurturing. Mandara’s prenatal wellness supports expectant mothers with reassurance, comfort-focused care, and mindful attention to both mother and baby. The approach prioritises safety and emotional grounding, helping women prepare calmly for childbirth and the journey ahead.",
        image: "/assets/mandara/pregnant.webp",
    },
    {
        title: "Postnatal Wellness",
        headline: "Gentle recovery for mothers, with integrated baby care support.",
        description:
            "The phase following childbirth calls for patience, restoration, and compassionate care. Mandara’s postnatal wellness recognises that recovery is a personal process, not a fixed timeline. Care includes physical recovery, emotional support, rest, and dedicated baby care assistance, allowing mothers time to heal, bond, and regain strength without pressure.",
        image: "/assets/mandara/mother.webp",
    },
    {
        title: "Menopausal Wellness",
        headline: "Guided support through physical and emotional transitions.",
        description:
            "Menopause is approached at Mandara as a phase of recalibration rather than decline. Wellness care supports balance, comfort, and clarity through changing physical and emotional needs. Women are offered steady support to navigate this transition with dignity, confidence, and calm.",
        image: "/assets/images/image2.webp",
    },
    {
        title: "Geriatric Wellness",
        headline: "Respectful, adaptive care focused on comfort and quality of life.",
        description:
            "Wellness in later years is centred on preserving ease, independence, and emotional reassurance. Mandara’s geriatric wellness adapts thoughtfully to changing needs. The environment remains calm and supportive, ensuring women feel safe, respected, and well cared for.",
        image: "/assets/gallery/about.jpeg",
    },
];

const ServicesCard = () => {
    return (
        <div className="w-full flex flex-col gap-12 md:gap-16 lg:gap-20 py-6 md:py-10 bg-bage text-dark overflow-hidden">
            {services.map((service, index) => {
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                            } items-center gap-6 md:gap-10 lg:gap-16 max-w-7xl mx-auto px-4 md:px-6`}
                    >
                        {/* Content Section */}
                        <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary tracking-tight break-words">
                                {service.title}
                            </h3>
                            <p className="text-base md:text-lg text-secondary font-medium italic leading-relaxed break-words">
                                {service.headline}
                            </p>
                            <div className="w-16 md:w-20 h-[1px] bg-primary/20 mx-auto lg:mx-0 my-3 md:my-4 lg:my-6" />
                            <p className="text-sm md:text-base lg:text-lg text-dark/80 font-light leading-6 md:leading-7 lg:leading-8 break-words">
                                {service.description}
                            </p>
                        </div>

                        {/* Image Section */}
                        <motion.div
                            className="flex-1 w-full max-w-md lg:max-w-none relative group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative aspect-[3/2] md:aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
                                <Image
                                    src={service.image}
                                    alt={service.title}
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
