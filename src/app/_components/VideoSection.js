'use client'

export default function VideoSection() {
    return (
        <section
            className="py-24 md:py-32 bg-cover bg-center relative"
            style={{ backgroundImage: 'url(/assets/images/video.webp)' }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <a
                            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                        >
                            <i className="fas fa-play text-2xl md:text-3xl text-primary hover:text-white"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Video Text */}
            <div className="absolute bottom-8 left-8 text-white text-6xl md:text-8xl lg:text-9xl font-serif opacity-10 pointer-events-none">
                Mandara
            </div>
        </section>
    )
}
