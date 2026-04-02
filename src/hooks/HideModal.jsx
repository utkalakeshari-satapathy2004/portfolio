"use client";
import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <UIContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);