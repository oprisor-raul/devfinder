import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";
import ThemeProvider from "../theme/ThemeProvider";

// Create a new component to consume the context:
const ThemeHandler = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
};

const Main = ({ children }) => {
  return (
    <ThemeProvider>
      <ThemeHandler>{children}</ThemeHandler>
    </ThemeProvider>
  );
};

export default Main;
