import React from "react";
import View from "../../Components/View/src/View";
import MultiCursor from "../../Components/MultiCursorTextInput/MultiCursor";
import LightAndDarkModeSwitch from "../../Components/Switch/LightAndDarkModeSwitch";

const Code = () => {
  return (
    <View style={{ flex: 1, bgColor: "SURFACE1", flexDirection: "column" }}>
      <LightAndDarkModeSwitch />
      <MultiCursor />
    </View>
  );
};

export default Code;
