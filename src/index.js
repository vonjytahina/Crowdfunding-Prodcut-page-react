import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { VignetteProvider } from "../src/context/VignetteContext";

ReactDOM.render(
  <VignetteProvider>
    <App />
  </VignetteProvider>,
  document.getElementById("root")
);
