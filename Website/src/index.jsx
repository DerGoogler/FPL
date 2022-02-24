import React from "react";
import ReactDOM from "react-dom";
import InitActivity from "./InitActivity";
import ons from "onsenui";

// Webpack CSS import
import "onsenui/css/onsenui-core.css";
import "./styles/addtional.scss";
import "./styles/markdown.scss";

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
