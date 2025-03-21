import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { RootState } from "../redux/store";
import ChevronRight from "./icons/chevron-right";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const products = useSelector((store: RootState) => store.products.products);
  const pageTitles: Record<string, string> = {
    "/shop": "Search",
    "/about": "About",
    "/cart": "Cart",
    "/authentication": "Login",
    "/authentication/register": "Sign Up",
    "/": "Home",
  };

  if (pathname === "/") return null;

  const pageTitle = pageTitles[pathname];

  const product = products.find(
    (product) => product.id === Number(pathname.split("/shop/")[1]),
  );
  const productTitle = product?.name;

  if (!pageTitle && !productTitle) {
    return null;
  }

  return (
    <div className="w-screen py-10 px-4 md:px-md bg-white-100">
      <h3 id="page-title">{pageTitle}</h3>
      <span className="flex">
        <Link to="/">Ecommerce</Link>
        <ChevronRight />
        <p className="text-black-900 font-semibold">
          {productTitle ? productTitle : pageTitle}
        </p>
      </span>
    </div>
  );
};

export default Breadcrumb;
