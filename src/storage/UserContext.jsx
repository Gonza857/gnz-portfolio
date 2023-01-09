import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export function UserContext(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (window.screen.width >= 992) {
      setIsOpenMenu(true);
      console.log("mayor a 992, seteado true");
    } else {
      setIsOpenMenu(false);
      console.log("menor a 992, seteado false");
    }
  }, []);

  window.addEventListener("resize", function () {
    if (this.window.innerWidth >= 992) {
      setIsOpenMenu(true);
    } else {
      setIsOpenMenu(false);
    }
  });

  const value = {
    isOpenMenu,
    setIsOpenMenu,
  };

  return (
    <userContext.Provider value={value}>{props.children}</userContext.Provider>
  );
}

export default UserContext;
