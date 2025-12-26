'use client'

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/919946801100"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp text-white text-3xl"></i>
        </a>
    )
}
