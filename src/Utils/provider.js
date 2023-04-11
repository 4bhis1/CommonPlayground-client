import React from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { UserContext } from "./Context/UserContext";
import { FileContext } from "./Context/FileContext";

const Provider = ({ children }) => {
  return (
    <ThemeContext>
      <UserContext>
        <FileContext>{children}</FileContext>
      </UserContext>
    </ThemeContext>
  );
};

export default Provider;
