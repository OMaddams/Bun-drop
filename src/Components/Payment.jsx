import { useState } from "react";

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState();
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumError, setCardNumError] = useState("");
  const [cvc, setCvc] = useState("");
  const [month, setMonth] = useState();
  const [year, setYear] = useState("");
  console.log(month);
  function cardNumOnChange(e) {
    let cardErrorText = "";

    if (e.target.value.trim().length < 8) {
      cardErrorText += "Card number too short \n";
    }
    if (e.target.value.trim().length > 16) {
      cardErrorText += "Card number too long\n";
    }
    let tidyNum = e.target.value.replace(/\D/g, "");
    setCardNumError(cardErrorText);
    setCardNumber(tidyNum.trim());
  }
  function cvcOnChange(e) {
    let tidyNum = e.target.value.replace(/\D/g, "");

    if (tidyNum.length > 3) {
      return;
    }
    setCvc(tidyNum.trim());
  }
  function monthOnChange(e) {
    let tidyNum = e.target.value.replace(/\D/g, "");
    if (tidyNum === "") {
      setMonth("");
    } else if (tidyNum < 1) {
      setMonth(1);
    } else if (tidyNum > 12) {
      setMonth(12);
    } else {
      setMonth(tidyNum);
    }

    preventExpired();
  }
  function yearOnChange(e) {
    let tidyNum = e.target.value.replace(/\D/g, "");
    if (tidyNum === "") {
      setYear("");
    } else if (tidyNum > currentYearLastTwo + 12) {
      setYear(currentYearLastTwo + 12);
    } else {
      setYear(tidyNum);
    }
  }
  function preventExpired() {
    if (currentYearLastTwo > year) {
      setYear(currentYearLastTwo);
    }
    if (currentYearLastTwo == year && currentMonth > month) {
      setMonth(currentMonth);
    }
  }
  const swishForm = () => {
    return (
      <>
        <p>Swish</p>
      </>
    );
  };

  const onFocusOut = (type) => {
    if (type === "month") {
    }
    if (type === "year") {
    }
  };
  let currentTime = new Date();
  const currentYearLastTwo = currentTime.getFullYear() - 2000;
  const currentMonth = currentTime.getMonth() + 1;
  console.log(currentTime.getMonth());
  const cardForm = () => {
    return (
      <div>
        <p>Card</p>
        <form id="payment" className="shipping-container">
          <label htmlFor="">Card number</label>
          <input
            type="text"
            name=""
            id=""
            className="shipping-inputs"
            value={cardNumber}
            onChange={cardNumOnChange}
          />
          <div className="payment-card-details">
            <div className="payment-card-input">
              <label htmlFor="">CVC</label>
              <input
                type="text"
                name=""
                id=""
                className="shipping-inputs"
                value={cvc}
                onChange={cvcOnChange}
              />
            </div>
            <div className="payment-card-input">
              <label htmlFor="">Expiration</label>
              <div style={{ display: "flex" }}>
                <input
                  placeholder={currentMonth}
                  value={month}
                  onChange={monthOnChange}
                  type="text"
                  min={1}
                  max={12}
                  name=""
                  id=""
                  className="shipping-inputs payment-card-expiration"
                  onBlur={onFocusOut("month")}
                />
                <p className="margin-15"> / </p>
                <input
                  className="shipping-inputs payment-card-expiration"
                  type="text"
                  value={year}
                  onChange={yearOnChange}
                  placeholder={currentYearLastTwo}
                  min={currentYearLastTwo}
                  max={currentYearLastTwo + 10}
                  onBlur={onFocusOut("year")}
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        </form>
        <div className="validation-text">
          <p className="validation-text">{cardNumError}</p>
          <p className="validation-text">error</p>
          <p className="validation-text">error</p>
        </div>
      </div>
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
