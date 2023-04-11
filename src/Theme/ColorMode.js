import React from "react";
import { Color } from "./Colors";

const ColorMode = (mode, color) => {
  let bool = mode;
  // console.log("ColorMode", "-->", bool);

  if (bool) {
    return {
      main: Color[`${color}`][900],
      light: Color[`${color}`][200],
      dark: Color[`${color}`][500],
      font: Color[`${color}`][100],
      backgroundColor: "rgb(240,240,240)",
    };
  } else {
    return {
      main: Color[`${color}`][100],
      light: Color[`${color}`][600],
      dark: Color[`${color}`][900],
      font: Color[`${color}`][900],
      backgroundColor: "rgb(32, 39, 62)",
    };
  }
};

export default ColorMode;
