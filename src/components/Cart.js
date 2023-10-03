import React, { useEffect } from "react";
import { useState } from "react";

const price = 5;

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  //   const totalPrice = price * quantity;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity]);

  return (
    <div>
      <button onClick={() => setQuantity(quantity + 1)}>Add 1 item</button>
      <h1>{`Total price is ${totalPrice}`}</h1>
      <h1>{`quantity is ${quantity}`}</h1>
    </div>
  );
};

export default Cart;
