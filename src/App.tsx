import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import Authentication from "./pages/authentication/authentication";
import Home from "./pages/home/home";
import Listing from "./pages/listing/listing";
import ProductPage from "./pages/product/product-page";
import { fetchProducts } from "./redux/slices/productsSlice";
import type { AppDispatch } from "./redux/store";
import Login from "./pages/authentication/login";
import Register from "./pages/authentication/register";
import Cart from "./pages/cart/cart";
import Page404 from "./pages/404/404";
import Checkout from "./pages/checkout/checkout";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Listing />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/authentication" element={<Authentication />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer newsletter />
    </>
  );
}

export default App;
