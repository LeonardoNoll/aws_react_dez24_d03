import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Listing from "./pages/listing/listing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Listing />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer newsletter />
    </>
  );
}

export default App;
