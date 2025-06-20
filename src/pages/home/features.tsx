import Delivery from "../../components/icons/delivery";
import ShieldCheck from "../../components/icons/shield-check";
import StarBadge from "../../components/icons/star-badge";
import Feature from "./feature";

const BLACK_900 = "#0E1422";

const Features = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:px-md py-24"
    >
      <Feature
        icon={<Delivery color={BLACK_900} />}
        title="Free Shiping"
        description="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
      />
      <Feature
        icon={<StarBadge color={BLACK_900} />}
        title="Satisfaction Guarantee"
        description="Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
      />
      <Feature
        icon={<ShieldCheck color={BLACK_900} />}
        title="Secure Payment"
        description="Your security is our priority. Your payments are secure with us."
      />
    </section>
  );
};

export default Features;
