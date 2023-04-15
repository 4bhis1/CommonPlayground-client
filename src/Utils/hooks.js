import { useContext } from "react";
import { COLORS, FONT_COLORS } from "../Theme/Colors";
import { themeContext } from "./Context/ThemeContext";
import { userContext } from "./Context/UserContext";

export const useTheme = () => {
  let [theme, changeTheme] = useContext(themeContext);

  let toogleTheme = () => {
    changeTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  const colors = COLORS[theme === "dark" ? "DARK" : "LIGHT"];
  const fontColor = FONT_COLORS[theme === "dark" ? "DARK" : "LIGHT"];

  return [theme, toogleTheme, { colors, fontColor }];
};

export const useUser = () => {
  let { logout } = useContext(userContext);

  let user = {
    name: "",
    color: "",
    email: "",
  };

  return { user, logout };
};

export const useFileSystem = () => {
  const { fileSystem } = useContext(fileContext);

  const createFile = ({ path }) => {};
  const renameFile = () => {};
  const deletFile = () => {};

  return { fileSystem, createFile, renameFile, deletFile };
};
