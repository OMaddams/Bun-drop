function MobileCartItem({ data }) {
  return (
    <div className="menu-item">
      <p>
        {data.count} x {data.name}
      </p>
      <p>{data.price * data.count} :-</p>
    </div>
  );
}

export default MobileCartItem;
