import { createContext, useState } from "react";

export const MyContext = createContext();

import React from "react";

export default function ChatContext({ children }) {
  const [selectedUser, setSelectedUser] = useState({});
  const value = {
    selectedUser,
    setSelectedUser,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
