import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useLocation } from "react-router-dom";
import { CartContext } from "../App";
import MobileCartItem from "./MobileCartItem";
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
      <div>
        {expanded ? (
          <div className="mobile-cart-expanded">
            <button className="mobile-cart" onClick={toggleCart}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            {cart && cart.length > 0 ? <h1>Current cart</h1> : <></>}
            <div style={{ marginBottom: "20%" }}>
              {cart && cart.length > 0 ? (
                cart.map((item) => <MobileCartItem data={item} />)
              ) : (
                <p>The cart is empty..</p>
              )}
            </div>
          </div>
        ) : (
          <div className="mobile-cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
        )}
      </div>
    );
  } else return <></>;
}

export default MobileCart;
