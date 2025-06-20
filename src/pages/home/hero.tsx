import { Link } from "react-router";
import heroEllipse from "../../assets/forms/hero-ellipse.svg";
import heroStar from "../../assets/forms/hero-star.svg";
import heroModel from "../../assets/images/hero-model.png";
import Arrow from "../../components/icons/arrow";

const Hero = () => {
  return (
    <section id="hero" className="flex justify-between md:px-md bg-white-100 ">
      <main className="flex flex-col justify-center items-start space-y-4 max-w-[400px] ">
        <h1 className="text-black-800">Fresh Arrivals Online</h1>
        <p className="text-black-600">Discover Our Newst Collection Today.</p>
        <Link to="/shop" className="btn">
          View Collection
          <Arrow color="#fff" />
        </Link>
      </main>
      <div className="relative flex-1 min-h-[382px] mt-24">
        <div className="absolute bottom-0 right-0 z-5">
          <img src={heroStar} alt="Star" />
          <img src={heroEllipse} alt="Ellipse" />
        </div>
        <img
          src={heroModel}
          alt="Model in a white dress"
          className="max-h-[382px] absolute bottom-0 right-0 z-10 "
        />
      </div>
    </section>
  );
};

export default Hero;
