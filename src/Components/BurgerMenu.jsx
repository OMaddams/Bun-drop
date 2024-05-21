import { Link } from "react-router-dom";

function BurgerMenu() {
  return (
    <div className="burger-menu-container">
      <Link to={"/"}>
        <div className="burger-menu-item">Home</div>
      </Link>
      <Link to={"/menu"}>
        <div className="burger-menu-item">Menu</div>
      </Link>
      <Link to={"/cart"}>
        <div className="burger-menu-item">Cart</div>
      </Link>
      <Link>
        <div className="burger-menu-item">Sign in</div>
      </Link>
      <Link>
        <div className="burger-menu-item">Sign up</div>
      </Link>
    </div>
  );
}

export default BurgerMenu;
