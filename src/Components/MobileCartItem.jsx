import { addToCart } from "../Helpers/Helpers";
import { CartContext } from "../App";
import { useContext, useState } from "react";
function MobileCartItem({ data }) {
  const [count, setCount] = useState(data.count);
  const { cart, setCart } = useContext(CartContext);
  const increase = () => {
    setCart(addToCart(cart, data, +1));
    setCount(count + 1);
  };
  const decrease = () => {
    setCart(addToCart(cart, data, -1));
    setCount(count - 1);
  };

  return (
    <div className="menu-item">
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>
          {count} x {data.name}
        </p>
        <p>{data.price * count} :-</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <button onClick={increase} className="count-button">
          +
        </button>
        <button onClick={decrease} className="count-button">
          -
        </button>
      </div>
    </div>
  );
}

export default MobileCartItem;
