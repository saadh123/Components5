import React from "react";
import { useState } from "react";

export const IncrementCount = () => {
  const [state, setState] = useState({ color: "blue", count: 4 });

  const count = state.count;
  const color = state.color;

  //   const increment = () => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       count: prevState.count + 1,
  //     }));
  //   };
  return (
    <div>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        {/* onClick = {() => increment()} */}
        {/* onClick={() => {
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          }));
        }}   */}
        INCREMENT
      </button>
      {color}
      <br></br>
      {count}
    </div>
  );
};
