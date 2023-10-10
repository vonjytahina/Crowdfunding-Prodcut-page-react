import React from "react";
import { useModalCompletedContext } from "../context/ModalCompletedContext";
import { useModalContext } from "../context/ModalContext";
import { useVignette } from "../context/VignetteContext";

function CompletedModals() {
  const { isModalCompletedVisible, setIsModalCompletedVisible } =
    useModalCompletedContext();
  const { setIsModalsVisible } = useModalContext();
  const { setVignetteVisibility} = useVignette();

  const handleGotItClick = () => {
    setIsModalCompletedVisible(false);
    setIsModalsVisible(false);
    setVignetteVisibility(false);
  };

  return (
    <div
      className={`completed-modal ${isModalCompletedVisible ? "" : "hidden"}`}
    >
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
          <path stroke="#FFF" stroke-width="5" d="M20 31.86L28.093 40 44 24" />
        </g>
      </svg>
      <h2>Thanks for your support!</h2>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button className="got-it" onClick={handleGotItClick}>
        {" "}
        Got it!
      </button>
    </div>
  );
}

export default CompletedModals;
