import { useEffect, useState } from "react";
import LogoColor from "../Assets/logo-color.png";
import MenuItem from "../Components/MenuItem";
import MobilebuttonLarge from "../Components/MobileButtonLarge";
import { useFetch } from "../Hooks/useFetch";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/menu");
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
        <h1 style={{ color: "white", fontSize: "larger" }}>
          Our most popular options!
        </h1>
        <div className="showcase">
          {isPending && <div>Loading....</div>}
          {error && <div>{error}</div>}
          {data && data.map((item) => <MenuItem key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
};
export default Home;
