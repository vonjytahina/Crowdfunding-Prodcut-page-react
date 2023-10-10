import React, { createContext, useContext, useState } from "react";

const ModalCompletedContext = createContext();

export const ModalCompletedProvider = ({ children }) => {
  const [isModalCompletedVisible, setIsModalCompletedVisible] = useState(false);

  return (
    <ModalCompletedContext.Provider value={{ isModalCompletedVisible, setIsModalCompletedVisible }}>
      {children}
    </ModalCompletedContext.Provider>
  );
};

export const useModalCompletedContext = () => {
  return useContext(ModalCompletedContext);
};