import { useEffect, useState } from "react";
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

  return (
    <>
      <p>test</p>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {data && <p>{data.title}</p>}
    </>
  );
}

export default MenuDetails;
