import { Link } from "react-router";
import ctaImg from "../../assets/images/cta-clothe.png";
import Arrow from "../../components/icons/arrow";

const Cta = () => {
  return (
    <section
      id="CTA"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden py-24 md:py-0 bg-white-100 px-md "
    >
      <main className="flex flex-col justify-center items-center  md:items-start text-center md:text-start space-y-4 max-w-[400px]">
        <h3>Browse Our Fashion Paradise!</h3>
        <p>
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </p>
        <Link to="/shop" className="btn">
          Shop Now <Arrow />
        </Link>
      </main>
      <img src={ctaImg} width={225} />
    </section>
  );
};

export default Cta;
