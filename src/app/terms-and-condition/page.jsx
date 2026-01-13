"use client";
import { termsAndConditions } from "../_utils/data";

const TermsAndConditions = () => {
  return (
    <main className="pt-0">
      <section className="py-12 md:py-24 bg-cream min-h-screen">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-dark text-center mb-8 md:mb-12">
              Terms and Conditions
            </h1>
            <div className="bg-white shadow-lg p-8 md:p-12 lg:p-16">
              <p className="text-dark/80 font-sans text-base md:text-lg mb-8 leading-relaxed">
                {termsAndConditions.heading}
              </p>
              <ul className="space-y-4 md:space-y-5">
                {termsAndConditions.data.map((terms, i) => {
                  return (
                    <li className="list-disc list-inside text-dark/80 font-sans text-base md:text-lg leading-relaxed" key={i}>
                      {terms}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default TermsAndConditions;
