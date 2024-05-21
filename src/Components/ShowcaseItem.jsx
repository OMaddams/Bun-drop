function ShowcaseItem({ data }) {
  return (
    <div className="showcase-item">
      <img
        className="showcase-item-img"
        src={`${process.env.PUBLIC_URL}/img/${data.image}`}
      ></img>
      <p>{data.title}</p>
    </div>
  );
}

export default ShowcaseItem;
