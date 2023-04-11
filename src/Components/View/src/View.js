import React from "react";
import { useTheme } from "../../../Utils/hooks";

const View = ({ style, children, reference, ...props }) => {
  let [, , { colors, fontColor: FontColor }] = useTheme();

  let tempStyle = { ...style };

  const paddingLeft = style?.paddingHorizontal || 0;
  const paddingRight = style?.paddingHorizontal || 0;
  const marginLeft = style?.marginHorizontal || 0;
  const marginRight = style?.marginHorizontal || 0;

  const paddingTop = style?.paddingVertical || 0;
  const paddingBottom = style?.paddingVertical || 0;
  const marginTop = style?.marginVertical || 0;
  const marginBottom = style?.marginVertical || 0;

  const tempColor =
    colors[style?.bgColor || style?.backgroundColor] ||
    style?.bgColor ||
    style?.backgroundColor ||
    "transparent";

  const fontColor = FontColor[style?.color] || "black";

  const tempBorderColor = colors[style?.borderColor] || "transparent";

  delete tempStyle.backgroundColor;
  delete tempStyle.color;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft,
        paddingRight,
        marginLeft,
        marginRight,
        paddingTop,
        paddingBottom,
        marginTop,
        marginBottom,
        backgroundColor: tempColor,
        color: fontColor,
        borderColor: tempBorderColor,
        ...tempStyle,
      }}
      ref={reference}
      {...props}
    >
      {children}
    </div>
  );
};

export default View;
