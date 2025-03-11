import { Link } from "react-router";
import logo from "../assets/icons/logo.svg";
import cart from "../assets/icons/cart.svg";
import profile from "../assets/icons/profile.svg";
import BreaCrumb from "./breadcrumb";

const Header = () => {
  return (
    <header>
      <span className="bg-black-900 text-white w-full text-center py-2 md:px-default block">
        Get 25% OFF on your first order. Order Now
      </span>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4 sm:px-md">
        <div id="header-left" className="flex items-center gap-7">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" />
            <h3 className="text-black-900 text-xl font-bold hidden md:block">
              Ecommerce
            </h3>
          </Link>
          <nav className="flex gap-7 text-blacka-500 text-md items-center">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <div id="header-right" className="flex  items-center gap-7">
          <img src={cart} alt="cart" />
          <img src={profile} />
        </div>
      </div>
      <BreaCrumb />
    </header>
  );
};
export default Header;
