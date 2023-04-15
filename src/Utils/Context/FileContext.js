import { createContext } from "react";

export const fileContext = createContext();

export const FileContext = ({ children }) => {
  const fileSystem = [
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
  ];

  return (
    <fileContext.Provider value={{ fileSystem }}>
      {children}
    </fileContext.Provider>
  );
};
