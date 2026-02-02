import { montserrat } from "../_utils/font";

const BrandText = () => {
  return (
    <span className={`${montserrat.className} flex items-baseline gap-1 whitespace-nowrap`}>
      
      <span className="text-[10px] md:text-xs lg:text-sm">
        From
      </span>

      <span className="font-extrabold tracking-tight whitespace-nowrap text-xs md:text-sm lg:text-base">
        HiLITE
      </span>

      <span className="text-[10px] md:text-xs lg:text-sm">
        Group
      </span>

    </span>
  );
};

export default BrandText;
