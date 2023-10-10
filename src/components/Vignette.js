import React, {useState} from "react";
import { useVignette } from "../context/VignetteContext";

function Vignette() {
  const { isVignetteVisible,  zIndex, handleZIndex } = useVignette();

  const vignetteStyles = {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, .5)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: zIndex,
    display: "block",
  }

  return (
    <div style={vignetteStyles} className={`${isVignetteVisible ? "" : "hidden"}`}></div>
  );
}

export default Vignette;
