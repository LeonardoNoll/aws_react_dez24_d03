import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer newsletter />
    </>
  );
}

export default App;
