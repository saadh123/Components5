import React from "react";
import Buttons from "./Buttons";

const Header = ({ title, buttonState, onClick }) => {
  // const onClick = () => {
  //   setButtonState(!buttonState);
  // };
  let text = buttonState ? "Close" : "Add";
  let color = buttonState ? "red" : "green";

  return (
    <div>
      <h1>{title}</h1>
      <Buttons text={text} color={color} onClick={onClick}></Buttons>
    </div>
  );
};

export default Header;
