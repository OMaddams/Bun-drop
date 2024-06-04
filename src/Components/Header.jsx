import MobileButton from "./MobileButton";
import HamburgerMenu from "../Assets/burger.png";
import BurgerMenu from "./BurgerMenu";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [currentUser, setCurrentUSer] = useState(signedInUser);
  const nav = useNavigate();
  function signOut() {
    setCurrentUSer(null);
    setSignedInUser(null);
    nav("/");
  }
  useEffect(() => {
    setCurrentUSer(signedInUser);
  }, [signedInUser]);
  const [menuActive, setMenuActive] = useState(false);
  const toggleBurger = () => {
    setMenuActive(!menuActive);
  };

  function desktopNav() {
    return (
      <>
        <Link to={"/menu"}>
          <div className="burger-menu-item">Menu</div>
        </Link>
        <Link to={"/cart"}>
          <div className="burger-menu-item">Cart</div>
        </Link>
        {currentUser ? (
          <>
            <div className="burger-menu-item">{currentUser.username}</div>
            <div className="burger-menu-item" onClick={signOut}>
              Sign out
            </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <div className="burger-menu-item">Sign in</div>
            </Link>
            <Link to={"/register"}>
              <div className="burger-menu-item">Sign up</div>
            </Link>
          </>
        )}
      </>
    );
  }
  return (
    <div className="header-container">
      <div className="header-default">
        <Link to={"/"}>
          <h1 className="logo-text">Bun drop</h1>
        </Link>
        <MobileButton
          onClick={toggleBurger}
          text={<FontAwesomeIcon icon={faBars} />}
          hidden={"burger-menu"}
        />
        <div className="desktop-header-container">{desktopNav()}</div>
      </div>
      {menuActive ? <BurgerMenu /> : <></>}
    </div>
  );
}
export default Header;
