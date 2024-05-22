import { useState } from "react";

function ShowcaseItem({ data }) {
  const [hide, setHide] = useState("hide");

  const onHover = () => {
    setHide("");
  };
  const onLeave = () => {
    setHide("hide");
  };
  const flipHide = () => {
    hide === "hide" ? setHide("") : setHide("hide");
  };
  return (
    <div
      className="showcase-item"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={flipHide}
    >
      <img
        className="showcase-item-img"
        src={`${process.env.PUBLIC_URL}/img/${data.image}`}
      ></img>
      <div className={`showcase-item-text ${hide}`}>
        <p>{data.title}</p>
      </div>
    </div>
  );
}

export default ShowcaseItem;
