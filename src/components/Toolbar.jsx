import React from "react";
import { BackButton, Toolbar } from "react-onsenui";

const MyToolbar = ({ title, onBackButton = null }) => (
  <Toolbar>
    {onBackButton ? (
      <div className="left">
        <BackButton onClick={onBackButton} />
      </div>
    ) : null}
    <div className="center">{title}</div>
  </Toolbar>
);

export default MyToolbar;
