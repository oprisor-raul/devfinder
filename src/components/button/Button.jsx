import "./Button.css";
import React from "react";

function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="main-button">
      {children}
    </button>
  );
}

export default Button;
