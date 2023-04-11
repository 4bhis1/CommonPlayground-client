import React, { createContext } from "react";

export const userContext = createContext();

export const UserContext = ({ children }) => {
  let logout = () => {
    window.localStorage.removeItem("token");
  };

  let login = (token) => {
    window.localStorage.setItem("token", token);
  };

  let user = {};

  return (
    <userContext.Provider value={{ logout, user, login }}>
      {children}
    </userContext.Provider>
  );
};
