import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import { useState, createContext, useContext } from "react";
import MenuDetails from "./Pages/MenuDetails";
import MobileCart from "./Components/MobileCart";
export const CartContext = createContext();
function App() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Cheeseburger",
      price: 110,
      count: 2,
    },
    { id: 2, name: "Prosciutto Burger", price: 120, count: 3 },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/menu/:menuId" element={<MenuDetails />} />
        </Routes>
        <MobileCart />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
