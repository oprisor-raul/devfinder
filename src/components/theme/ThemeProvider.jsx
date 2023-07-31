import { createContext, useState, useEffect } from "react";

// The code exports a ThemeContext object created using createContext(null).
// The createContext function sets up the context and provides a default value
export const ThemeContext = createContext(null);

// Takes a children prop. The children prop refers to the components that will be wrapped by
// the ThemeProvider and will have access to the theme state and toggle  function
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // function used to toggle the theme state between "light" and "dark".
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
