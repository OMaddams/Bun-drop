import { useState } from "react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState();

  const swishForm = () => {
    return (
      <>
        <p>Swish</p>
      </>
    );
  };

  const onFocusOut = () => {};
  let currentTime = new Date();
  const cardForm = () => {
    return (
      <>
        <p>Card</p>
        <form id="payment" className="shipping-container">
          <label htmlFor="">Card number</label>
          <input type="text" name="" id="" className="shipping-inputs" />
          <label htmlFor="">CVC</label>
          <input type="text" name="" id="" className="shipping-inputs" />
          <label htmlFor="">Expiration</label>
          <input
            type="number"
            min={1}
            max={12}
            name=""
            id=""
            className="shipping-inputs"
            onFocusOut={onFocusOut("month")}
          />
          <input
            className="shipping-inputs"
            type="number"
            placeholder={currentTime.getFullYear()}
            min={currentTime.getFullYear()}
            max={currentTime.getFullYear() + 10}
            onFocusOut={onFocusOut("month")}
            name=""
            id=""
          />
        </form>
      </>
    );
  };

  return (
    <>
      <div className="payment-selection">
        <a href="#payment">
          <button
            className="checkout-buttons"
            onClick={() => setSelectedMethod("card")}
          >
            Card
          </button>
        </a>
        <button
          className="checkout-buttons"
          onClick={() => setSelectedMethod("swish")}
        >
          Swish
        </button>
      </div>
      {selectedMethod === "card" ? cardForm() : <></>}
      {selectedMethod === "swish" ? swishForm() : <></>}
    </>
  );
}

export default Payment;
