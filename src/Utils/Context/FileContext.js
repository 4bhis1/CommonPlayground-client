import { createContext, useState } from "react";

export const fileContext = createContext();

export const FileContext = ({ children }) => {
  let [theme, toggleTheme] = useState(
    window.localStorage.getItem("theme") || "dark"
  );

  return (
    <fileContext.Provider value={[theme, toggleTheme]}>
      {children}
    </fileContext.Provider>
  );
};
