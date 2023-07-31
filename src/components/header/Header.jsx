import React from "react";
import ThemeSwitch from "../theme/ThemeSwitch";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">devfinder</h1>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
