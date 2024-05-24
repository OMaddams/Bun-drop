function Shipping({ next }) {
  return (
    <>
      <form onSubmit={next} className="shipping-container">
        <label htmlFor="city">City</label>
        <input
          required
          className="shipping-inputs"
          type="text"
          name="city"
          id=""
          pattern="[a-zA-Z]+"
        />
        <label htmlFor="address">Address</label>
        <input
          required
          className="shipping-inputs"
          type="text"
          name="address"
          id=""
          pattern="{3]"
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          required
          className="shipping-inputs"
          type="text"
          name="zipcode"
          id=""
          pattern="[0-9]{5}"
        />
      </form>
      <button className="checkout-buttons" onClick={next}>
        Continue
      </button>
    </>
  );
}

export default Shipping;
