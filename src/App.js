import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { useState, createContext, useContext, useEffect } from "react";
import MenuDetails from "./Pages/MenuDetails";
import MobileCart from "./Components/MobileCart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
export const CartContext = createContext();
export const UserContext = createContext();
export const WindowContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [signedInUser, setSignedInUser] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    console.log("resize");
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <WindowContext.Provider value={{ isMobile }}>
      <UserContext.Provider value={{ signedInUser, setSignedInUser }}>
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
              <Route path="/register" element={<Register />} />
            </Routes>
            <MobileCart />
          </Router>
        </CartContext.Provider>
      </UserContext.Provider>
    </WindowContext.Provider>
  );
}

export default App;
