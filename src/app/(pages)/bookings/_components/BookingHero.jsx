import Image from "next/image";

export default function BookingHero() {
    return (
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
            <Image
                src="/assets/gallery/banner-2.jpeg"
                alt="Wellness Journey"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-bage tracking-wide mb-4">
                    Book Your Wellness Stay
                </h1>
            </div>
        </div>
    );
}
