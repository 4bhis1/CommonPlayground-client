import React from "react";
import View from "./View";

import { GrFormClose } from "react-icons/gr";

const Modal = ({
  children,
  onClose,
  parentRef,
  showOnCenter = false,
  modalStyle,
  heading,
}) => {
  const parentRefrence = parentRef?.current?.getBoundingClientRect();

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        bgColor: "darkBlueOpacity2",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        overflow: "hidden",
        ...modalStyle,
      }}
      onClick={onClose}
    >
      {children ? (
        <View
          style={{
            flexDirection: "column",
            opacity: "1.0",
            bgColor: "ghostWhite",
            padding: 2,
            borderRadius: 10,
            ...(showOnCenter
              ? {}
              : {
                  position: "absolute",
                  left: parentRefrence.x + parentRefrence.width,
                  top: parentRefrence.y + parentRefrence.height,
                }),
            boxShadow: "0px 0px 26px 1px white",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <View>
            <View style={{ flex: 1, margin: 5 }}>{heading}</View>

            <View style={{ cursor: "pointer", padding: 5 }} onClick={onClose}>
              <GrFormClose />
            </View>
          </View>
          <View>{children}</View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: "column",
            opacity: "1.0",
            bgColor: "ghostWhite",
            padding: 2,
            width: 300,
            height: 100,
            borderRadius: 10,
            position: "absolute",
            // left: parentRefrence.x + parentRefrence.width,
            // top: parentRefrence.y + parentRefrence.height,
            //           -webkit-box-shadow: 0px 0px 26px 1px rgba(139,209,146,1);
            // -moz-box-shadow: 0px 0px 26px 1px rgba(139,209,146,1);
            boxShadow: "0px 0px 26px 1px white",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <View>
            <View style={{ flex: 1 }}>Heading</View>

            <View style={{ cursor: "pointer", padding: 5 }} onClick={onClose}>
              <GrFormClose />
            </View>
          </View>
          <View style={{ flex: 1 }}>Content</View>
          <View style={{ justifyContent: "flex-end", margin: 5 }}>
            <View
              style={{
                bgColor: "red",
                padding: 5,
                borderRadius: 5,
                cursor: "pointer",
                marginRight: 10,
              }}
            >
              Yes
            </View>
            <View
              style={{
                bgColor: "green",
                padding: 5,
                borderRadius: 5,
                cursor: "pointer",
              }}
            >
              No
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Modal;
