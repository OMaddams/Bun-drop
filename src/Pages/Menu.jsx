import MobileButton from "../Components/MobileButton";
import HamburgerMenu from "../Assets/hamburger-menu.png";
import { useContext, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import MenuItem from "../Components/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import MobileBack from "../Components/MobileBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const { data, isPending, error } = useFetch("http://localhost:3000/menu");
  const [showFavourites, setShowFavourites] = useState(false);
  const [favouriteError, setFavouriteError] = useState(null);
  const navigate = useNavigate();
  if (error) {
    console.log(error);
  }

  const filterFavourites = () => {
    let favError = null;
    if (!showFavourites) {
      setActiveFilter("favourites");
      const filtered = data.filter((item) =>
        signedInUser.favourite.includes(item.id)
      );
      if (filtered === undefined || filtered.length === 0) {
        favError = "No favourited items..";
      }
      setFilteredMenu(filtered);
    } else {
      setActiveFilter(null);
      setFilteredMenu(null);
    }
    setFavouriteError(favError);
    setShowFavourites(!showFavourites);
  };
  const filterMenu = (category) => {
    if (!data) return;
    setShowFavourites(false);
    if (category === activeFilter) {
      setActiveFilter(null);
      setFilteredMenu(null);
    } else {
      const filtered = data.filter((item) => item.category === category);
      setFilteredMenu(filtered);
      setActiveFilter(category);
    }
  };
  const goToDetails = (itemId) => {
    navigate(`/menu/${itemId}`);
  };
  return (
    <div className="menu">
      <div className="menu-filters-container">
        <MobileButton text={"Meals"} onClick={() => filterMenu("meal")} />
        <MobileButton text={"Burgers"} onClick={() => filterMenu("burger")} />
        <MobileButton text={"Sides"} onClick={() => filterMenu("sides")} />
        <MobileButton text={"Desserts"} onClick={() => filterMenu("dessert")} />
        <MobileButton text={"Drinks"} onClick={() => filterMenu("drinks")} />
      </div>
      {isPending && <div>Loading....</div>}
      {
        <p style={{ textAlign: "center", marginTop: "15px" }}>
          {favouriteError}
        </p>
      }
      {error && <div>{error}</div>}
      {data &&
        (filteredMenu || data).map((item) => (
          <MenuItem
            key={item.id}
            data={item}
            goTo={() => goToDetails(item.id)}
          />
        ))}
      {filteredMenu === null && activeFilter !== null && <p>No items</p>}
      {signedInUser !== null && (
        <div onClick={filterFavourites}>
          <MobileBack link={""} customIcon={faStar} />
        </div>
      )}
    </div>
  );
};
export default Menu;
