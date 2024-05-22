import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

function MenuDetails() {
  const [menuItem, setMenuItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { menuId } = useParams();

  const { data, isPending, error } = useFetch(
    `http://localhost:3000/menu/${menuId}`
  );
  if (error) {
    console.log(error);
  }

  function displayData() {
    return (
      <>
        <img
          className="menu-details-image"
          src={`${process.env.PUBLIC_URL}/img/${data.image}`}
        />
        <h2>{data.title}</h2>
      </>
    );
  }

  return (
    <div className="menu-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && displayData()}
    </div>
  );
}

export default MenuDetails;
