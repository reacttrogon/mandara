"use client";
import { termsAndConditions } from "../_utils/data";

const TermsAndConditions = () => {
  return (
    <div className="max-w-7xl text-left md:px-28 md:pb-20 mx-auto">
      <h1 className="text-3xl text-center font-semibold my-5">Terms and conditions</h1>
      <p className="mb-5">{termsAndConditions.heading}</p>
      {termsAndConditions.data.map((terms, i) => {
        return (
          <li className="list-disc" key={i}>
            {terms}
          </li>
        );
      })}
    </div>
  );
};
export default TermsAndConditions;
