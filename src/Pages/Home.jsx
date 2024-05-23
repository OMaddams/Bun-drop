import { useEffect, useState } from "react";
import LogoColor from "../Assets/Logo.png";
import MenuItem from "../Components/MenuItem";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";
import ShowcaseItem from "../Components/ShowcaseItem";
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/menu");

  function getTop6() {
    if (!data) return [];

    let sortedMenu = data;
    sortedMenu.sort((a, b) => b.popularity - a.popularity);
    console.log(sortedMenu);
    let topFive = sortedMenu.slice(0, 6);
    return topFive;
  }
  if (error) {
    console.log(error);
  }
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <img src={LogoColor} />
          <MobilebuttonLarge route={"/menu"} text={"Menu"} />
        </div>
      </div>
      <div className="showcase-container">
        <h2 className="h2-w">Our most popular options</h2>
        <div className="showcase">
          {isPending && <div>Loading....</div>}
          {error && <div>{error}</div>}
          {data &&
            getTop6().map((item) => <ShowcaseItem key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
};
export default Home;
