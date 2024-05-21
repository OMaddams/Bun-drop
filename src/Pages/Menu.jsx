import MobileButton from "../Components/MobileButton";
import HamburgerMenu from "../Assets/hamburger-menu.png";
import { useState } from "react";
import { useFetch } from "../Hooks/useFetch";
import MenuItem from "../Components/MenuItem";
const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState(null);
  const { data, isPending, error } = useFetch("http://localhost:3000/menu");
  if (error) {
    console.log(error);
  }
  return (
    <div className="menu">
      <div className="menu-filters-container">
        <MobileButton text={"Meals"} />
        <MobileButton text={"Burgers"} />
        <MobileButton text={"Sides"} />
        <MobileButton text={"Desserts"} />
        <MobileButton text={"Drinks"} />
      </div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && data.map((item) => <MenuItem key={item.id} data={item} />)}
    </div>
  );
};
export default Menu;
