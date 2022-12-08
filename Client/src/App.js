import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductsList from "./pages/ProductsList";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ProductsList />}></Route>
            <Route exact path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
