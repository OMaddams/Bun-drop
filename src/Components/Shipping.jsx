function Shipping({ next }) {
  return (
    <form className="shipping-container">
      <label htmlFor="city">City</label>
      <input className="shipping-inputs" type="text" name="city" id="" />
      <label htmlFor="address">Address</label>
      <input className="shipping-inputs" type="text" name="address" id="" />
      <label htmlFor="zipcode">Zipcode</label>
      <input className="shipping-inputs" type="text" name="zipcode" id="" />
      <button onClick={next}>Continue</button>
    </form>
  );
}

export default Shipping;
