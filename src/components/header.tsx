import { Link, useNavigate } from "react-router";
import logo from "../assets/icons/logo.svg";
import cart from "../assets/icons/cart.svg";
import profile from "../assets/icons/profile.svg";
import BreaCrumb from "./breadcrumb";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  useSignIn,
  useUser,
} from "@clerk/clerk-react";

const Header = () => {
  const navigate = useNavigate();
  const { isLoaded, user } = useUser();
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
          <img src={cart} alt="cart" onClick={() => navigate("/cart")} />
          <SignedOut>
            <Link to="/authentication">
              <img src={profile} />
            </Link>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <div className="flex items-center p-2 rounded-full bg-black-600 text-white">
                {isLoaded &&
                  user &&
                  user?.firstName!.slice(0, 1) + user?.lastName!.slice(0, 1)}
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
      <BreaCrumb />
    </header>
  );
};
export default Header;
