"use client";
import { createContext, useContext, useState } from "react";

const UIContext = createContext({
  navOpen: false,
  setNavOpen: () => {},
});

export const UIProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <UIContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);