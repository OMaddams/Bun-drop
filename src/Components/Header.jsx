import MobileButton from "./MobileButton";
import HamburgerMenu from "../Assets/burger.png";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleBurger = () => {
    setMenuActive(!menuActive);
  };
  return (
    <div className="header-container">
      <div className="header-default">
        <Link to={"/"}>
          <h1 className="logo-text">Bun drop</h1>
        </Link>
        <MobileButton onClick={toggleBurger} img={HamburgerMenu} />
      </div>
      {menuActive ? <BurgerMenu /> : <></>}
    </div>
  );
}
export default Header;
