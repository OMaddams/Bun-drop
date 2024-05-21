function MenuItem({ data }) {
  return (
    <div className="menu-item">
      <img
        className="menu-img"
        src={`${process.env.PUBLIC_URL}/img/${data.image}`}
      ></img>
      <p>{data.title}</p>
      <p>{data.price} :-</p>
    </div>
  );
}

export default MenuItem;
