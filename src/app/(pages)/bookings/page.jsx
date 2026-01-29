import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import BookingHero from "./_components/BookingHero";
import CategorySelection from "./_components/CategorySelection";

export const metadata = {
    title: "Book Your Wellness Stay | Mandara",
    description: "Select your personalized wellness journey at Mandara.",
};

const Page = () => {
    return (
        <>
            <Header />
            <main className="bg-bage min-h-screen">
                <BookingHero />
                <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">
                    <CategorySelection />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Page;
