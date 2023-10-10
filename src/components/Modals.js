import React, { useEffect } from "react";
import { useVignette } from "../context/VignetteContext";
import { useModalContext, setSelectedModal } from "../context/ModalContext";
import { useModalCompletedContext } from "../context/ModalCompletedContext";

function Modals() {
  const { setVignetteVisibility} = useVignette();
  const { isModalsVisible, setIsModalsVisible, selectedModal, showModal, totalBackedAmount, updateTotalBackedAmount, bambooAmount, updateBambooAmount, blackEditionAmount, updateBlackEditionAmount } = useModalContext();
  const { isModalCompletedVisible, setIsModalCompletedVisible } = useModalCompletedContext()

  const handleModalClick = (modalId) => {
    showModal(modalId);
  };

  const handleCloseClick = () => {   
    setVignetteVisibility(false);
    setIsModalsVisible(false)
  };

  const handleBambooContinueClick = () => {
    updateTotalBackedAmount(bambooAmount);
    setIsModalCompletedVisible(true)  
  };

  const handleBlackEditionContinueClick = () => {
    updateTotalBackedAmount(blackEditionAmount);
    setIsModalCompletedVisible(true)  
  };

  const handleContinueClick = () => {
    updateTotalBackedAmount(0);
    setIsModalCompletedVisible(true)  
  };

  useEffect(() => {
    if (isModalCompletedVisible) {
      setIsModalsVisible(false);
    }
  }, [isModalCompletedVisible, setIsModalsVisible]);

  return (
    <div className={`modals ${isModalsVisible ? "" : "hidden"}`} >
      <svg
        className="close-modals"
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleCloseClick}
      >
        <path
          d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
          fill="#000"
          fill-rule="evenodd"
          opacity=".4"
        />
      </svg>
      <h2>Back this project</h2>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>

      <div
        className={`modal ${selectedModal === "no-reward" ? "active-modal" : ""}` }
        id="no-reward"
        onClick={() => handleModalClick("no-reward")}
      >
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="top">
          <div className="left">
            <span className="modal-name">Pledge with no reward</span>
            <span className="modal-price"></span>
          </div>
          <div className="right">
            <span className="day-left"></span>
          </div>
        </div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        <div className="plege">
          <div className="left"></div>
          <div className="right">
            <button className="continue-button" onClick={handleContinueClick}>Continue</button>
          </div>
        </div>
      </div>

      <div
        className={`modal ${selectedModal === "bamboo-modal" ? "active-modal" : ""}` }
        id="bamboo-modal"
        onClick={() => handleModalClick("bamboo-modal")}
      >
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="top">
          <div className="left">
            <span className="modal-name">Bamboo Stand</span>
            <span className="modal-price">Pledge $25 or more</span>
          </div>
          <div className="right">
            <span className="day-left">101</span>left
          </div>
        </div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div className="day-left-mobile">
          <span className="day-left">101</span>left
        </div>
        <div className="plege">
          <div className="left">Enter your pledge</div>
          <div className="right">
            <div className="currency-wrap">
              <span className="currency-code">$</span>
              <input
                type="number"
                min="25"
                value={bambooAmount}
                className="currency-value"
                onChange={(e) => updateBambooAmount(parseInt(e.target.value, 10))}
              />
            </div>
            <button className="continue-button" onClick={() => handleBambooContinueClick()}>Continue</button>
          </div>
        </div>
      </div>

      <div
        className={`modal ${selectedModal === "black-edition-modal" ? "active-modal" : ""}`}
        id="black-edition-modal"
        onClick={() => handleModalClick("black-edition-modal")}
      >
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="top">
          <div className="left">
            <span className="modal-name">Black Edition Stand</span>
            <span className="modal-price">Pledge $75 or more</span>
          </div>
          <div className="right">
            <span className="day-left">64</span>left
          </div>
        </div>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <div className="day-left-mobile">
          <span className="day-left">64</span>left
        </div>
        <div className="plege">
          <div className="left">Enter pledge</div>
          <div className="right">
            <div className="currency-wrap">
              <span className="currency-code">$</span>
              <input
                type="number"
                min="75"
                value={blackEditionAmount}
                className="currency-value"
                onChange={(e) => updateBlackEditionAmount(parseInt(e.target.value, 10))}
              />
            </div>
            <button className="continue-button" onClick={() => handleBlackEditionContinueClick()}>Continue</button>
          </div>
        </div>
      </div>

      <div className="modal">
        <div className="circle-container">
          <div className="circle"></div>
        </div>
        <div className="top">
          <div className="left">
            <span className="modal-name">Mahogany Special Edition</span>
            <span className="modal-price">Pledge $200 or more</span>
          </div>
          <div className="right">
            <span className="day-left">0</span>left
          </div>
        </div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>
        <div className="day-left-mobile">
          <span className="day-left">0</span>left
        </div>
      </div>
    </div>
  );
}

export default Modals;
