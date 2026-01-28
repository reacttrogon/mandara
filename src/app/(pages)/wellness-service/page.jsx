import Header from "../../_components/Header";
import WellnessServiceContainer from "./components/WellnessServiceContainer";
import Footer from "../../_components/Footer";

const Page = () => {
  return (
    <>
      <Header isTransparent={true} />
      <WellnessServiceContainer />
      <Footer />
    </>
  );
};
export default Page;
