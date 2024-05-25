import { useContext, useState } from "react";
import { CartContext } from "../App";
import MobileCartItem from "../Components/MobileCartItem";
import { getTotal } from "../Helpers/Helpers";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
import { Link } from "react-router-dom";
import Shipping from "../Components/Shipping";
import Payment from "../Components/Payment";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);

  function shippingContinue(shippingDetails) {
    setShipping(shippingDetails);
  }
  if (cart && cart.length > 0)
    return (
      <div className="checkout">
        <h1>Checkout</h1>
        <div className="checkout-list">
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} x {item.count}
            </p>
          ))}
        </div>
        <div className="checkout-top">
          <p>Total: {getTotal(cart)} :-</p>
        </div>
        <div className="checkout-forms">
          {shipping === null && <Shipping next={shippingContinue} />}
          {shipping && <Payment />}
        </div>
      </div>
    );
  else
    return (
      <div className="checkout">
        <p>Cart is empty..</p>
        <Link to={"/menu"}>
          <p> Back to the menu!</p>
        </Link>
      </div>
    );
}

export default Checkout;
