import { Route, Routes } from "react-router";
import Home from "./pages/home/home";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
