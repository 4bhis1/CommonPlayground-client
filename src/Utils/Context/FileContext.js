import { createContext, useState } from "react";

export const fileContext = createContext();

export const FileContext = ({ children }) => {
  const [fileSystem, updateFileSystem] = useState([
    {
      name: "Common Playground",
      type: "folder",
      child: [
        {
          name: "text",
          type: "txt",
          content: [],
        },
        {
          name: "apple",
          type: "js",
          content: [],
        },
      ],
    },
    {
      name: "BHi Playground",
      type: "folder",
      child: [],
    },
  ]);

  return (
    <fileContext.Provider value={{ fileSystem, updateFileSystem }}>
      {children}
    </fileContext.Provider>
  );
};
