import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import AboutSection from "./_components/AboutSection";

export const metadata = {
    title: "About Us | Mandara Wellness Retreat",
    description: "Discover Mandara, a sanctuary designed exclusively for women's rest, recovery, and holistic wellbeing.",
};

const Page = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <Footer />
        </>
    );
};

export default Page;
