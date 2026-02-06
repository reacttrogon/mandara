import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    {
      path: "../../../public/fonts/Montserrat-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Montserrat-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Montserrat-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Montserrat-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});
