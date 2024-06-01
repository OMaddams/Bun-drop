import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { addToCart } from "../Helpers/Helpers";
import { CartContext } from "../App";
import MobileBack from "../Components/MobileBack";
import { UserContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
function MenuDetails() {
  const [menuItem, setMenuItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);
  const { menuId } = useParams();
  const { cart, setCart } = useContext(CartContext);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [currentUserFavourite, setCurrentUserFavourite] =
    useState(faStarRegular);

  const { data, isPending, error } = useFetch(
    `http://localhost:3000/menu/${menuId}`
  );
  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (signedInUser && data) {
      setCurrentUserFavourite(
        signedInUser.favourite.includes(data.id) ? faStarSolid : faStarRegular
      );
    }
  }, [data]);

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

  function patchFavourite(favourites) {
    fetch(`http://localhost:3000/users/${signedInUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favourites),
    });
  }

  function handleFavourite() {
    let currentUser = signedInUser;
    const index = currentUser.favourite.findIndex((item) => item == data.id);
    if (index === -1) {
      currentUser.favourite.push(data.id);
    } else {
      currentUser.favourite.splice(index, 1);
    }
    setCurrentUserFavourite(
      currentUser.favourite.includes(data.id) ? faStarSolid : faStarRegular
    );
    setSignedInUser(currentUser);
    patchFavourite(currentUser);
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
        {signedInUser && (
          <div className="menu-details-favourite" onClick={handleFavourite}>
            <FontAwesomeIcon icon={currentUserFavourite} />
          </div>
        )}
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
