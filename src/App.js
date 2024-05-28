import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { useState, createContext, useContext } from "react";
import MenuDetails from "./Pages/MenuDetails";
import MobileCart from "./Components/MobileCart";
import Login from "./Pages/Login";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/menu/:menuId" element={<MenuDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <MobileCart />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
