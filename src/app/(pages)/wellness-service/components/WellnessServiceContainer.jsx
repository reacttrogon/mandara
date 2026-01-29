import { wellnessServices } from "../../../_utils/data"
import ServicesCard from "./ServicesCard";

const WellnessServiceContainer = () => {

  const { title, description,services }= wellnessServices || {};

  return (
    <div className="w-full pt-32 pb-10 md:pt-40 md:pb-20 bg-bage text-dark">
      <div className="flex flex-col justify-center items-center px-6 md:px-28 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">{title}</h1>
        <p className="text-base font-light leading-relaxed max-w-3xl">{description}</p>
      </div>
      <div className="mt-10 px-6 md:px-20 mx-auto w-full">
        <ServicesCard services={services}/>
      </div>
    </div>
  );
};
export default WellnessServiceContainer;
