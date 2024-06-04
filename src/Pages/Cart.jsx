import { useContext } from "react";
import { CartContext } from "../App";
import MobileCartItem from "../Components/MobileCartItem";
import { getTotal } from "../Helpers/Helpers";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="checkout">
      <h1>Cart</h1>
      {cart && cart.length > 0 ? (
        cart.map((item) => <MobileCartItem data={item} />)
      ) : (
        <h1>The cart is empty</h1>
      )}
      {cart && cart.length > 0 ? (
        <div className="checkout-bottom">
          <p>Total: {getTotal(cart)} :-</p>
          <Link to={"/checkout"}>
            <h1>Pay </h1>
          </Link>
        </div>
      ) : (
        <MobilebuttonLarge text={"Back to the menu!"} route={"/menu"} />
      )}
    </div>
  );
}

export default Cart;
