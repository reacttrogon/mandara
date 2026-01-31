import Image from "next/image";

export default function GateImageSection() {
    return (
        <section className="relative z-10 w-full py-8 bg-bage">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative w-full max-w-[80vw] lg:max-w-[70vw] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-dark/5 group cursor-pointer">
                    <Image
                        // src="/assets/images/frontview.jpeg"
                         src="/assets/images/frontview2.webp"
                        alt="Mandara Gate"
                        className="w-full h-full object-cover"
                        fill
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
