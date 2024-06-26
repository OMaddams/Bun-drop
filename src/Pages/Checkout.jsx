import { useContext, useState } from "react";
import { CartContext } from "../App";
import MobileCartItem from "../Components/MobileCartItem";
import { getTotal } from "../Helpers/Helpers";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
import { Link } from "react-router-dom";
import Shipping from "../Components/Shipping";
import Payment from "../Components/Payment";
import Confirmation from "../Components/Confirmation";

function Checkout() {
  const { cart, setCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(null);
  const [payment, setPayment] = useState(null);
  function shippingContinue(shippingDetails) {
    setShipping(shippingDetails);
  }
  function paymentContinue(paymentDetails) {
    setPayment(paymentDetails);
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
          {shipping && payment === null && <Payment next={paymentContinue} />}
          {shipping && payment && <Confirmation />}
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
