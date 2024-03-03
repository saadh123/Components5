import React, { useEffect } from "react";
import { useState } from "react";

const price = 5;

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity]);

  const handleClick = () => {
    setQuantity((quantity) => {
      return quantity + 1;
    });
  };

  // const handleClick = () => {
  //   const newQ = quantity + 1;
  //   const newP = price * newQ;

  //   setQuantity(newQ);
  //   setTotalPrice(newP);
  // };

  return (
    <div>
      <button onClick={handleClick}>Add 1 item</button>
      <h1>{`Total price is ${totalPrice}`}</h1>
      <h1>{`quantity is ${quantity}`}</h1>
    </div>
  );
};

export default Cart;
