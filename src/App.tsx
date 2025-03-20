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
        <Route path="/authentication" element={<Authentication />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer newsletter />
    </>
  );
}

export default App;
