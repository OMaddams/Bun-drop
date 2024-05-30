import MobileButton from "../Components/MobileButton";
import HamburgerMenu from "../Assets/hamburger-menu.png";
import { useContext, useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import MenuItem from "../Components/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const { data, isPending, error } = useFetch("http://localhost:3000/menu");
  const navigate = useNavigate();
  if (error) {
    console.log(error);
  }

  const filterMenu = (category) => {
    if (!data) return;

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
      {error && <div>{error}</div>}
      {data &&
        (filteredMenu || data).map((item) => (
          <MenuItem
            key={item.id}
            data={item}
            goTo={() => goToDetails(item.id)}
          />
        ))}
    </div>
  );
};
export default Menu;
