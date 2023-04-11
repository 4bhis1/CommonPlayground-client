import React, { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

export const ThemeContext = ({ children }) => {
  let [theme, toggleTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <themeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </themeContext.Provider>
  );
};
