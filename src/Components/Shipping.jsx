import { useState } from "react";

function Shipping({ next }) {
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [cityError, setCityError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");
  const [completed, setCompleted] = useState(false);
  function cityOnChange(e) {
    setCityError("");
    if (/\d/.test(e.target.value)) {
      setCityError("City can't contain numbers");
    }
    if (e.target.value.trim() === "") {
      setCityError("You need to fill out the city field");
    }

    setCity(e.target.value);
  }

  function addressOnChange(e) {
    setAddressError("");
    if (e.target.value.trim() === "") {
      setAddressError("You need to fill out the address field");
    }

    setAddress(e.target.value);
  }
  function zipcodeOnChange(e) {
    let zipcodeErrorText = "";
    if (/\D/.test(e.target.value.trim())) {
      zipcodeErrorText += "Zipcode can only contain numbers \n";
    }
    if (e.target.value.trim() === "") {
      zipcodeErrorText += "Zipcode needs to be filled out \n";
    }
    if (e.target.value.trim().length !== 5) {
      zipcodeErrorText += "Zipcode should be 5 numbers lnog \n";
    }
    setZipcodeError(zipcodeErrorText);

    setZipcode(e.target.value.trim());
  }
  function saveShipping() {
    const shippingDetails = {
      city: city,
      address: address,
      zipcode: zipcode,
    };
    next(shippingDetails);
  }
  return (
    <>
      <form onSubmit={next} className="shipping-container">
        <label htmlFor="city">City</label>
        <input
          value={city}
          required
          className="shipping-inputs"
          type="text"
          name="city"
          id=""
          pattern="[a-zA-Z]+"
          onChange={cityOnChange}
        />
        <label htmlFor="address">Address</label>
        <input
          required
          className="shipping-inputs"
          type="text"
          name="address"
          id=""
          value={address}
          onChange={addressOnChange}
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          required
          className="shipping-inputs"
          type="text"
          name="zipcode"
          id=""
          pattern="[0-9]{5}"
          value={zipcode}
          onChange={zipcodeOnChange}
        />
      </form>
      <div className="validation-text">
        <p className="validation-text">{cityError}</p>
        <p className="validation-text">{addressError}</p>
        <p className="validation-text">{zipcodeError}</p>
      </div>
      <button
        className="checkout-buttons"
        onClick={saveShipping}
        disabled={
          cityError !== "" ||
          addressError !== "" ||
          zipcodeError !== "" ||
          city === "" ||
          address === "" ||
          zipcode === ""
        }
      >
        Continue
      </button>
    </>
  );
}

export default Shipping;
