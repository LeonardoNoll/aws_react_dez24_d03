import Features from "./features";
import Footer from "../../components/footer";
import Hero from "./hero";
import BestSelling from "./best-selling";
import Cta from "./cta";
import OnOffer from "./on-offer";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BestSelling />
      <Cta />
      <OnOffer />
      <Footer newsletter />
    </>
  );
};
export default Home;
