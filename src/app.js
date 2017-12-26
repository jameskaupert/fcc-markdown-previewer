import React from "react";
import ReactDOM from "react-dom";
import MarkdownPreviewerApp from "./components/MarkdownPreviewerApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(
  <div>
    <MarkdownPreviewerApp />
  </div>,
  document.getElementById("app")
);
