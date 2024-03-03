import React from "react";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          //   setCount(--count);
          setCount((prevCount) => prevCount - 1);
          //   setCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          // setCount(++count);
          setCount((prevCount) => prevCount + 1);
          //   setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
