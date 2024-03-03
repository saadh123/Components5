import React from "react";
import { useState } from "react";
import styles from "./styles.module.css";

//FUNCTIONAL FORM

const DecrementCount = () => {
  const [count, setCount] = useState(() => countInitial());

  function countInitial() {
    return 4;
  }
  //   const [count, setCount] = useState(() => 4);
  // const [count, setCount] = useState(4);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1); //safer, esp with asynch calls to get most up to date value
    // setCount(count - 1);
  }

  return (
    <div className={styles.IncrementCount}>
      <button onClick={decrementCount}>DECREASE</button>
      {count}
    </div>
  );
};

export default DecrementCount;
