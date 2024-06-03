import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import {
  faCartShopping,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../App";
import MobileCartItem from "./MobileCartItem";
import { getTotal } from "../Helpers/Helpers";
function MobileCart() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);
  const toggleCart = () => {
    setExpanded(!expanded);
  };
  const checkout = () => {
    navigate("/checkout");
  };
  const location = useLocation();
  const shouldShow = location.pathname.startsWith("/menu");
  if (shouldShow) {
    return (
      <div>
        {expanded ? (
          <div className="mobile-cart-expanded">
            <button className="mobile-cart" onClick={checkout}>
              <FontAwesomeIcon style={{ width: "1em" }} icon={faCreditCard} />
            </button>
            <div className="mobile-cart-top">
              {cart && cart.length > 0 ? (
                <h1>Current cart</h1>
              ) : (
                <h1>The cart is empty..</h1>
              )}
              <button className="mobile-cart-close-button" onClick={toggleCart}>
                <h1>X</h1>
              </button>
            </div>
            <div style={{ marginBottom: "20%" }}>
              {cart && cart.length > 0 ? (
                cart.map((item) => <MobileCartItem key={item.id} data={item} />)
              ) : (
                <></>
              )}
            </div>
            {cart && cart.length > 0 ? (
              <Link to={"/cart"}>
                <div className="mobile-cart-bottom">
                  <p>Total: {getTotal(cart)} :-</p>
                  <p>Checkout</p>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="mobile-cart" onClick={toggleCart}>
            <FontAwesomeIcon style={{ width: "1em" }} icon={faCartShopping} />
          </div>
        )}
      </div>
    );
  } else return <></>;
}

export default MobileCart;
