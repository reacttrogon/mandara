import { notFound } from "next/navigation";
import Header from "../../../../_components/Header";
import Footer from "../../../../_components/Footer";
import BookingHero from "../../_components/BookingHero";
import PackageList from "../../_components/PackageList";
import { wellnessFlow } from "../../../../_utils/wellnessPackages";

export default function BookingSubCategoryPage({ params }) {
    const category = wellnessFlow.find((c) => c.id === params.categoryId);

    if (!category || !category.subCategories) {
        notFound();
    }

    const subCategory = category.subCategories.find((s) => s.id === params.subCategoryId);

    if (!subCategory) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="bg-bage min-h-screen">
                <BookingHero />
                <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-7xl">
                    <PackageList
                        packages={subCategory.packages}
                        title={`${subCategory.title} Packages`}
                        description={subCategory.description}
                        backLink={`/bookings/${params.categoryId}`}
                    />
                </div>
            </main>
            <Footer />
        </>
    );
}

