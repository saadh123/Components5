import React, { useEffect } from "react";
import { useState } from "react";

const price = 5;

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  // const totalPrice = price * quantity;
  const [totalPrice, setTotalPrice] = useState(0);

  // const [days, setDays] = useState({ number: 100, totalDays: true });

  // const handleDays = () => {
  //   setDays({ ...days, added: 5 });
  // };

  // useEffect(() => {
  //   console.log("hi");
  // }, [days]);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity]);

  const handleClick = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add 1 item</button>
      <h1>{`Total price is ${totalPrice}`}</h1>
      <h1>{`quantity is ${quantity}`}</h1>
      {/* <button onClick={handleDays}>Handling Days</button> */}
    </div>
  );
};

export default Cart;
