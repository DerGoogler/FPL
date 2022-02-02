import React from "react";
import ReactDOM from "react-dom";
import InitActivity from "./InitActivity";

// Webpack CSS import
import "onsenui/css/onsenui.css";
import ons from "onsenui";

class Bootloader {
  mountNode = document.querySelector("app");

  constructor() {
    console.log("App wird gestartet!");
  }

  loadActivity() {
    ReactDOM.render(<InitActivity />, this.mountNode);
  }

  init() {
    ons.platform.select("android");
    this.loadActivity();
  }
}

new Bootloader().init();
