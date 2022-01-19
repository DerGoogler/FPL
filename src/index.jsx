import React from "react";
import ReactDOM from "react-dom";
import InitActivity from "./InitActivity";

// Webpack CSS import
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import "./styles/styles.css";

class Bootloader {
  mountNode = document.querySelector("app");

  constructor() {
    console.log("App wird gestartet!");
  }

  loadActivity() {
    ReactDOM.render(<InitActivity />, this.mountNode);
  }

  init() {
    this.loadActivity();
  }
}

new Bootloader().init();
