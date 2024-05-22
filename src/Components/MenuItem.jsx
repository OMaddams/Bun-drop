import { useContext, useState } from "react";
import { addToCart } from "../Helpers/Helpers";
import { CartContext } from "../App";

function MenuItem({ data, goTo }) {
  const [clicked, setClicked] = useState(false);
  const [count, setCount] = useState(1);
  const { cart, setCart } = useContext(CartContext);
  function toggleClicked() {
    setClicked(!clicked);
  }
  function handleChange(e) {
    let count = e.target.value;
    count > 20 ? (count = 20) : (count = count);
    count < 0 ? (count = 0) : (count = count);
    setCount(count);
  }
  function handleSumbit(e) {
    e.preventDefault();
    if (count === 0) return;
    setCart(addToCart(cart, data, count));
  }
  function handleFocus(e) {
    if (e.target.value == 1) {
      e.target.value = "";
    }
  }
  function handleBlur(e) {
    if (e.target.value == "") {
      e.target.value = 1;
    }
  }
  if (clicked) {
    return (
      <div className="menu-item">
        <p onClick={goTo}>Details</p>
        <form onSubmit={handleSumbit}>
          <label># </label>
          <input
            value={count}
            className="add-number"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            onChange={handleChange}
            min={1}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button className="add-button">Add</button>
        </form>
        <p onClick={toggleClicked}>Back</p>
      </div>
    );
  } else {
    return (
      <div className="menu-item" onClick={toggleClicked}>
        <img
          className="menu-img"
          src={`${process.env.PUBLIC_URL}/img/${data.image}`}
        ></img>
        <p>{data.title}</p>
        <p>{data.price} :-</p>
      </div>
    );
  }
}

export default MenuItem;
