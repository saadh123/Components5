import React from "react";
import Buttons from "./Buttons";

const Header = ({ title, buttonState, onClick }) => {
  // const onClick = () => {
  //   setButtonState(!buttonState);
  // };

  return (
    <div>
      <h1>{title}</h1>
      <Buttons
        text={buttonState ? "Close" : "Add"}
        color={buttonState ? "red" : "green"}
        onClick={onClick}
      ></Buttons>
    </div>
  );
};

export default Header;
