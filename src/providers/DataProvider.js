import React, { useState } from "react";

export const tasks = [
  {
    id: "1",
    isCompleted: true,
    name: "Learn React with Ada",
  },
  {
    id: "2",
    isCompleted: false,
    name: "Learn Hooks",
  },
  {
    id: "3",
    isCompleted: true,
    name: "Keep on Keeping on",
  },
];

const initialData = { tasks };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};
