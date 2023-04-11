import React from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { useTheme } from "../../Utils/hooks";
import View from "../View/src/View";

const LightAndDarkModeSwitch = ({ backgroundColor, onClick }) => {
  let [theme, toogleTheme] = useTheme();
  let darkMode = theme !== "light";

  return (
    <View
      style={{
        display: "flex",
        borderRadius: 20,
        cursor: "pointer",
        marginHorizontal: 20,
        position: "relative",
        alignItems: "center",
        width: 40,
      }}
      onClick={() => {
        toogleTheme();
        onClick && onClick();
      }}
    >
      <View
        style={{
          bgColor: "lightBlue",
          width: 30,
          height: 15,
          borderRadius: 30,
          position: "absolute",
          zIndex: 0,
        }}
      />
      <View
        style={{
          zIndex: 1,
        }}
      >
        <View
          style={{
            borderRadius: "100%",
            backgroundColor: darkMode ? "white" : "yellow",
            transition: "linear 0.2s",
            ...(darkMode
              ? { transform: "translateX(-5px)" }
              : { transform: "translateX(15px)" }),
          }}
        >
          {darkMode ? (
            <FaCloudMoon
              style={{ height: 20, width: 20, color: "rgb(117 98 98)" }}
            />
          ) : (
            <FaCloudSun style={{ height: 20, width: 20, color: "#d76217" }} />
          )}
        </View>
      </View>
    </View>
  );
};

export default LightAndDarkModeSwitch;
