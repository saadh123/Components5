import React from "react";

const Buttons = ({ text, onClick, color }) => {
  return (
    <div>
      <hr />
      <button
        className="btn"
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Buttons;
