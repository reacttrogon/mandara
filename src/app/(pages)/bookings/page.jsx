import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import WellnessBooking from "./_components/WellnessBooking";

export const metadata = {
    title: "Book Your Wellness Stay | Mandara",
    description: "Select your personalized wellness journey at Mandara.",
};

const Page = () => {
    return (
        <>
            <Header />
            <main>
                <WellnessBooking />
            </main>
            <Footer />
        </>
    );
};

export default Page;
