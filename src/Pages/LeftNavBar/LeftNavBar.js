import React, { memo, useEffect, useRef, useState } from "react";
import View from "../../Components/View";
import {
  BsFileEarmarkTextFill,
  BsFiletypeHtml,
  BsFillFolderFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { useFileSystem } from "../../Utils/hooks";
import Modal from "../../Components/Modal";

let extensionWithIcon = {
  folder: <BsFillFolderFill />,
  txt: <BsFileEarmarkTextFill />,
  js: <IoLogoJavascript />,
  css: <IoLogoCss3 />,
  html: <BsFiletypeHtml />,
};

const ShowFileName = memo(
  ({
    actionsOfOptions,
    updateShowInnerFile,
    name,
    child,
    type,
    showInnerFile,
  }) => {
    let [showModalClick, updateShowModalClick] = useState(false);

    let refOfThreeDots = useRef(null);

    return (
      <>
        {showModalClick && (
          <Modal
            parentRef={refOfThreeDots}
            onClose={() => {
              updateShowModalClick(false);
            }}
          >
            <View style={{ flexDirection: "column" }}>
              {actionsOfOptions.map((value, index) => (
                <View
                  onClick={() => {
                    value.onAction();
                    updateShowModalClick(false);
                  }}
                  key={index}
                  style={{
                    cursor: "pointer",
                    paddingHorizontal: 10,
                    color: "FONT2",
                  }}
                  hoverStyle={{ bgColor: "SURFACE1", color: "FONT1" }}
                >
                  {value.name}
                </View>
              ))}
            </View>
          </Modal>
        )}
        <View
          style={{
            cursor: "pointer",
            alignItems: "center",
            paddingLeft: 10,
            paddingVertical: 2,
            marginRight: 4,
          }}
        >
          {child && child.length && type === "folder" ? (
            <View
              onClick={() => {
                updateShowInnerFile((show) => !show);
              }}
            >
              {!showInnerFile ? <FaChevronRight /> : <FaChevronDown />}
            </View>
          ) : (
            <View style={{ width: 10 }} />
          )}
          <View
            style={{
              marginRight: 5,
              marginLeft: 5,
            }}
          >
            {extensionWithIcon[type]}
          </View>
          <View style={{ flex: 1, color: "FONT1" }}>{name}</View>
          <View
            reference={refOfThreeDots}
            onClick={() => {
              updateShowModalClick(true);
            }}
            hoverStyle={{
              color: "FONT1",
            }}
          >
            <BsThreeDotsVertical />
          </View>
        </View>
      </>
    );
  }
);

const FileArchitecture = ({ data }) => {
  const [showInnerFile, updateShowInnerFile] = useState(true);

  return (
    <>
      {data.map((props) => {
        const { type, child } = props;
        let actionsOfOptions = [
          { name: "Rename", onAction: () => {} },
          { name: "Delete", onAction: () => {} },
        ];
        if (type === "folder") {
          actionsOfOptions = [
            { name: "Create folder", onAction: () => {} },
            { name: "Create file", onAction: () => {} },
            ...actionsOfOptions,
          ];
        }

        return (
          <>
            <ShowFileName
              actionsOfOptions={actionsOfOptions}
              updateShowInnerFile={updateShowInnerFile}
              showInnerFile={showInnerFile}
              {...props}
            />
            {showInnerFile && (
              <View style={{ paddingLeft: 10, flexDirection: "column" }}>
                {child && child.length && type === "folder" ? (
                  <FileArchitecture data={child} />
                ) : (
                  void 0
                )}
              </View>
            )}
          </>
        );
      })}
    </>
  );
};

const LeftNavBar = () => {
  const { fileSystem } = useFileSystem();

  return (
    <View style={{ width: "300px", bgColor: "SURFACE2" }}>
      <View style={{ flexDirection: "column", marginTop: 10, flex: 1 }}>
        <FileArchitecture data={fileSystem} />
      </View>
    </View>
  );
};

export default LeftNavBar;
