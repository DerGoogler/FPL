import React from "react";
import { BackButton, Toolbar } from "react-onsenui";

const MyToolbar = ({
  title,
  onBackButton = null,
  modifier,
  buttons = null,
}) => (
  <Toolbar modifier={modifier}>
    {onBackButton ? (
      <div className="left">
        <BackButton onClick={onBackButton} />
      </div>
    ) : null}
    <div className="center">{title}</div>
    {buttons}
  </Toolbar>
);

export default MyToolbar;
