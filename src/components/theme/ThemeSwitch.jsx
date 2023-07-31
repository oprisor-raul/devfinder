import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import IconMoon from "../../assets/icon-moon.svg";
import IconSun from "../../assets/icon-sun.svg";
import "./ThemeSwitch.css";

// Defining the functional component ThemeSwitch:
const ThemeSwitch = () => {
  // extracting theme state and toggle function using useContext:
  const { theme, toggleTheme } = useContext(ThemeContext);

  // rendering the JSX component:
  return (
    <button onClick={toggleTheme} className="theme-switch">
      {theme === "light" ? (
        <>
          <span>DARK</span> <img src={IconMoon} alt="Moon icon" />
        </>
      ) : (
        <>
          <span>LIGHT</span> <img src={IconSun} alt="Sun icon" />
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
