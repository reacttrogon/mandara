import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import LifeSection from "./_components/LifeSection";

export const metadata = {
    title: "Mandara Life | Wellness Retreat",
    description: "Experience the everyday rhythm of Mandara, designed for rest, recovery, and connection.",
};

const Page = () => {
    return (
        <>
            <Header />
            <LifeSection />
            <Footer />
        </>
    );
};

export default Page;
