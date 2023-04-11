import React, { useState, useEffect, useRef } from "react";
import View from "../View";
import { useTheme } from "../../Utils/hooks";

const MultiCursor = ({ socket }) => {
  const [text, updateText] = useState([""]);
  const [cursorAtIndex, updateCursorAtIndex] = useState(0);

  const [, , { colors, fontColor }] = useTheme();
  const { FONT1 } = fontColor;
  const { SURFACE1 } = colors;
  
  // useEffect(() => {
  //   // socket.on("recieveCode", (data) => {
  //     updateCursorAtIndex((index) => {
  //       updateText((text) => {
  //         data[index] = text[index];
  //         return data;
  //       });

  //       console.log("Yess rendered");

  //       return index;
  //     });
  //   });
  // }, [// socket]);

  useEffect(() => {
    refrence.current.focus();
  }, [cursorAtIndex]);

  // if (!setIntervalRef) {
  //   const temp = setInterval(() => {
  //     console.log("Triggered in setInterval", text);
  //     // socket.emit("update_code", text);
  //     clearInterval(setIntervalRef);
  //     // updateSetIntervalRef(null)
  //   }, [3000]);
  //   updateSetIntervalRef(temp);
  // }

  // console.log("text", text, setIntervalRef);

  let refrence = useRef(null);
  useEffect(() => {
    let isCancelled = false;

    refrence.current.style.height = "0px";
    const scrollHeight = refrence.current.scrollHeight;
    refrence.current.style.height = scrollHeight + "px";

    const fetchData = async () => {
      console.log("text", text);
      // // socket.emit("update_code", text);
    };

    const interval = setInterval(fetchData, 3000);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [text]);

  return (
    <View
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "white",
        overflow: "scroll",
        flex: 1,
        flexDirection: "column",
      }}
    >
      {text.map((value, index) => {
        return (
          <View
            style={{
              backgroundColor: "SURFACE1",
              margin: 0,
              padding: 0,
            }}
            key={index}
          >
            <View
              style={{
                width: 40,
                justifyContent: "right",
                borderRightWidth: 4,
                borderRightColor: "#c0c0c0",
                borderRightStyle: "solid",
                color: "FONT1",
                fontSize: 15,
                paddingTop: 5,
                paddingRight: 5,
              }}
            >
              {index + 1}.
            </View>
            <textarea
              style={{
                border: 0,
                outline: "none",
                backgroundColor: SURFACE1,
                flex: 1,
                color: FONT1,
                paddingLeft: 10,
                fontSize: 16,
                resize: "none",
                overflowY: "hidden",
              }}
              type={text}
              value={value}
              ref={cursorAtIndex === index ? refrence : void 0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const temp = [
                    ...text.slice(0, index + 1),
                    "",
                    ...text.slice(index + 1),
                  ];
                  updateText(temp);
                  updateCursorAtIndex(index + 1);
                  // socket.emit("update_code", temp);
                } else if (e.key === "Backspace" && !text[index]) {
                  if (value.length < 1 && cursorAtIndex !== 0) {
                    let temp = [
                      ...text.slice(0, index),
                      ...text.slice(index + 1),
                    ];
                    updateCursorAtIndex(index - 1);
                    updateText(temp);
                    // socket.emit("update_code", temp);
                  }
                } else if (e.key === "Tab") {
                  e.preventDefault();
                  let temp = [
                    ...text.slice(0, index),
                    e.target.value.substring(0, e.target.selectionStart + 1) +
                      "  " +
                      e.target.value.substring(e.target.selectionStart + 1),
                    ...text.slice(index + 1),
                  ];
                  updateCursorAtIndex(index);
                  updateText(temp);
                  // socket.emit("update_code", temp);
                } else if (e.key === "ArrowDown") {
                  if (index !== text.length - 1) updateCursorAtIndex(index + 1);
                } else if (e.key === "ArrowUp") {
                  if (index !== 0) updateCursorAtIndex(index - 1);
                }
              }}
              onChange={(e) => {
                let temp = [
                  ...text.slice(0, index),
                  e.target.value,
                  ...text.slice(index + 1),
                ];
                updateCursorAtIndex(index);
                updateText(temp);
              }}
            />
          </View>
        );
      })}
      {/* <View
        style={{
          position: "fixed",
          right: 10,
          bottom: 20,
          display: "flex",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            marginRight: 10,
            padding: 10,
          }}
          onClick={() => {
            let data = "";
            text.map((x) => {
              data += x + "\n";
            });
            try {
              new Function(data)();
            } catch (err) {
              console.log("Error here ", err);
            }
          }}
        >
          Run
        </View>
        <View
          style={{
            backgroundColor: "white",
            cursor: "pointer",
            marginRight: 10,
            padding: 10,
          }}
          onClick={() => {
            let data = "";
            text.map((x) => {
              data += x + "\n";
            });
            const blob = new Blob([data], {
              type: "text/plain",
            });
            console.log("Yeess Download ", blob);

            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = "code.js";
            link.href = url;
            link.click();
          }}
        >
          Download
        </View>
      </View> */}
    </View>
  );
};

export default MultiCursor;
