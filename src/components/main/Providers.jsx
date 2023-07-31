import React from "react";
import ThemeProvider from "../theme/ThemeProvider";
import UserProvider from "../user/UserProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
};

export default Providers;
