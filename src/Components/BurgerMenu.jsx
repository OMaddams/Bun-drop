import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function BurgerMenu() {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [currentUser, setCurrentUSer] = useState(signedInUser);

  function signOut() {
    setCurrentUSer(null);
  }
  useEffect(() => {
    setCurrentUSer(signedInUser);
  }, [signedInUser]);
  return (
    <div className="burger-menu-container">
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
    </div>
  );
}

export default BurgerMenu;
