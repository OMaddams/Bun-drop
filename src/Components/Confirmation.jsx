import { useEffect, useState } from "react";

function Confirmation() {
  const [timeRemaining, setTimeRemaining] = useState();
  useEffect(() => {
    setRandomDeliveryTime();
  }, []);

  function setRandomDeliveryTime() {
    let min = 5;
    let max = 15;

    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    setTimeRemaining(rand + " minutes until delivery");
  }
  return (
    <>
      <p>Thank you for your purchase!</p>
      <p>{timeRemaining}</p>
    </>
  );
}

export default Confirmation;
