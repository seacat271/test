import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/main";
import Cart from "./pages/cart";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
