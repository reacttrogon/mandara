import Header from "../../../../../_components/Header";
import Footer from "../../../../../_components/Footer";
import BookingHero from "../../../_components/BookingHero";
import PaymentForm from "../../../_components/PaymentForm";

export default function BookingSubCategoryPaymentPage() {
    return (
        <>
            <Header />
            <main className="bg-bage min-h-screen">
                <BookingHero />
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <PaymentForm />
                </div>
            </main>
            <Footer />
        </>
    );
}
