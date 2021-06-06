import React from "react";
import ReactDom from "react-dom";

import App from "./Component/App";
const rootElement = document.getElementById("root");
ReactDom.render(
  <div>
    <App />
  </div>,
  rootElement
);
