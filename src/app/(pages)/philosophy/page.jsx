import Image from "next/image";
import Philosophy from "../../_components/Philosophy";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";

export default function PhilosophyPage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Background Image */}
                <Image
                    src="/assets/philosophy/backgroundImage.webp"
                    alt="Mandara Philosophy"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Hero Content */}
                <div className="relative z-20 text-center text-bage px-6 max-w-2xl translate-y-[-20px]">
                    <h1 className="text-4xl md:text-6xl font-medium mb-4">
                        Our Philosophy
                    </h1>
                    <p className="text-bage/80 text-lg">
                        A sanctuary where healing unfolds gently.
                    </p>
                </div>
            </div>

            {/* Philosophy Content Section */}
            <section className="bg-bage px-4 md:px-6 py-20">
                <div className="max-w-6xl mx-auto">
                    <Philosophy />
                </div>
            </section>

            <Footer />
        </>
    );
}
