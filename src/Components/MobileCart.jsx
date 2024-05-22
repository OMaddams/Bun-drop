import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useLocation } from "react-router-dom";
import { CartContext } from "../App";
function MobileCart() {
  const cart = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);
  const toggleCart = () => {
    setExpanded(!expanded);
  };
  const location = useLocation();
  const shouldShow = location.pathname.startsWith("/menu");
  if (shouldShow) {
    return (
      <div onClick={toggleCart}>
        {expanded ? (
          <div className="mobile-cart-expanded">
            <button onClick={toggleCart}> X</button>
            <h1>Current cart</h1>
          </div>
        ) : (
          <div className="mobile-cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        )}
      </div>
    );
  } else return <></>;
}

export default MobileCart;
