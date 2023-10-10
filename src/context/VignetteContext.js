import React, { createContext, useContext, useState } from "react";

const VignetteContext = createContext();

export const VignetteProvider = ({ children }) => {
  const [isVignetteVisible, setVignetteVisibility] = useState(false);

 return (
    <VignetteContext.Provider value={{ isVignetteVisible, setVignetteVisibility}}>
      {children}
    </VignetteContext.Provider>
  );
};

export const useVignette = () => {
  const context = useContext(VignetteContext);
  if (!context) {
    throw new Error("useVignette must be used within a VignetteProvider");
  }
  return context;
};
