import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});
