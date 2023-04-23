import { useContext } from "react";
import { COLORS, FONT_COLORS } from "../Theme/Colors";
import { themeContext } from "./Context/ThemeContext";
import { userContext } from "./Context/UserContext";
import { fileContext } from "./Context/FileContext";

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
  const { fileSystem, updateFileSystem } = useContext(fileContext);

  let addFile = (path, fileToWrite) => {
    let count = 0;
    let actFile = null;
    let tempFunc = (files) => {
      if (count === path.length) return files;

      for (let file of files) {
        if (file.name === path[count]) {
          count++;
          actFile = tempFunc(file.children);
        }
      }

      return actFile;
    };

    let files = tempFunc(fileSystem);
    files.push(fileToWrite);

    updateFileSystem(files);
  };

  const renameFile = () => {};
  const deleteFile = () => {};

  return { fileSystem, addFile, renameFile, deleteFile, updateFileSystem };
};
