import { notFound } from "next/navigation";
import Header from "../../../_components/Header";
import Footer from "../../../_components/Footer";
import BookingHero from "../_components/BookingHero";
import SubCategorySelection from "../_components/SubCategorySelection";
import PackageList from "../_components/PackageList";
import { wellnessFlow } from "../../../_utils/wellnessPackages";

export default function BookingCategoryPage({ params }) {
    const category = wellnessFlow.find((c) => c.id === params.categoryId);

    if (!category) {
        notFound();
    }

    // Determine if we show subcategories or packages
    const showSubCategories = category.subCategories && category.subCategories.length > 0;

    return (
        <>
            <Header />
            <main className="bg-bage min-h-screen">
                <BookingHero />
                <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">
                    {showSubCategories ? (
                        <SubCategorySelection category={category} />
                    ) : (
                        <PackageList
                            packages={category.packages}
                            title={`${category.title} Packages`}
                            description={category.description}
                            backLink="/bookings"
                        />
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

