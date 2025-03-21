import {
  SignedIn,
  SignedOut,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import cart from "../assets/icons/cart.svg";
import logo from "../assets/icons/logo.svg";
import profile from "../assets/icons/profile.svg";
import { RootState } from "../redux/store";
import Breadcrumb from "./breadcrumb";

const Header = () => {
  const navigate = useNavigate();
  const { isLoaded, user } = useUser();
  const productsOrder = useSelector(
    (store: RootState) => store.cart.productOrders,
  );
  const totalItems = productsOrder.reduce((acc: number, productOrder) => {
    return acc + productOrder.quantity;
  }, 0);
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
          <div className="relative">
            <img src={cart} alt="cart" onClick={() => navigate("/cart")} />
            {totalItems > 0 && (
              <span className="absolute bottom-[-4px] right-[-8px] size-4.5 bg-red-500 text-white text-[12px] text-center align-middle rounded-full ">
                {totalItems}
              </span>
            )}
          </div>
          <SignedOut>
            <Link to="/authentication">
              <img src={profile} />
            </Link>
          </SignedOut>
          <SignedIn>
            <SignOutButton>
              <div className="flex  text-center align-middle justify-center  items-center rounded-full size-12 bg-blue-100 text-blue-900">
                {isLoaded &&
                  user &&
                  user?.firstName!.slice(0, 1) + user?.lastName!.slice(0, 1)}
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
      <Breadcrumb />
    </header>
  );
};
export default Header;
