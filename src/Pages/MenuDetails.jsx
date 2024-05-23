import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { addToCart } from "../Helpers/Helpers";
import { CartContext } from "../App";
import MobileBack from "../Components/MobileBack";
function MenuDetails() {
  const [menuItem, setMenuItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const { menuId } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { data, isPending, error } = useFetch(
    `http://localhost:3000/menu/${menuId}`
  );
  if (error) {
    console.log(error);
  }

  function handleChange(e) {
    let count = e.target.value;
    if (count > 20) count = 20;
    if (count < 0) count = 0;
    setCount(+count);
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

  function displayData() {
    return (
      <>
        <img
          className="menu-details-image"
          src={`${process.env.PUBLIC_URL}/img/${data.image}`}
        />
        <div className="menu-details-text">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>Price: {data.price}:-</p>
        </div>
        <div
          style={{
            height: "30vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={handleSumbit}
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label># </label>
            <input
              value={count}
              className="add-number"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              min={1}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button className="add-button">
              <>Add</>
            </button>
            <>{count * data.price} :-</>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="menu-details">
        {isPending && <div>Loading....</div>}
        {error && <div>{error}</div>}
        {data && displayData()}
        <MobileBack />
      </div>
      <MobileBack style={{ left: "0" }} />
    </>
  );
}

export default MenuDetails;
