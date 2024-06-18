"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { footerNavigation } from "~/utils/data";

interface NavContextProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const NavContext = createContext<NavContextProps | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
  const initialActiveIndex = footerNavigation.findIndex((item) => item.active);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  return (
    <NavContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
};
