import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalsVisible, setIsModalsVisible] = useState(false);
  const [selectedModal, setSelectedModal] = useState(null);
  const [totalBackedAmount, setTotalBackedAmount] = useState(89914);
  const [bambooAmount, setBambooAmount] = useState(25);
  const [blackEditionAmount, setBlackEditionAmount] = useState(75);
  const [totalBackers, setTotalBackers] = useState(5007);

  const showModal = (modalId) => {
    setIsModalsVisible(true);
    setSelectedModal(modalId);
  };

  const hideModal = () => {
    // setIsModalsVisible(false);
    setSelectedModal(null);
  };

  const updateTotalBackedAmount = (amount) => {
    setTotalBackedAmount(totalBackedAmount + amount);
    setTotalBackers(totalBackers + 1)
  };

  const updateBambooAmount = (amount) => {
    setBambooAmount(amount);
  };

  const updateBlackEditionAmount = (amount) => {
    setBlackEditionAmount(amount)
  }

  return (
    <ModalContext.Provider
      value={{
        isModalsVisible,
        setIsModalsVisible,
        selectedModal,
        showModal,
        hideModal,
        setSelectedModal,
        totalBackedAmount,
        updateTotalBackedAmount,
        bambooAmount,
        setBambooAmount,
        blackEditionAmount,
        setBlackEditionAmount,
        updateBambooAmount,
        updateBlackEditionAmount,
        totalBackers
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
