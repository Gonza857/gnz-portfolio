import React, { createContext, useState } from "react";

export const userContext = createContext();

export function UserContext(props) {
  const [isOpenMenu, setIsOpenMenu] = useState( false);
  const value = {
    isOpenMenu,
    setIsOpenMenu,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}

export default UserContext;
