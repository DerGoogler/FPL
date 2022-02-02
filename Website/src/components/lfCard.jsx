import React from "react";
import { Card } from "react-onsenui";
import LfActivity from "../views/LfActivity";

const LfCard = ({ pushPage, fach, title, content }) => {
  return (
    <Card
      onClick={() => pushPage(LfActivity, title, fach)}
      style={{
        boxShadow: "none",
        border: "2px solid #f55613",
      }}
    >
      <div className="title" style={{ textAlign: "center" }}>
        {title}
      </div>
      <div className="content" style={{ textAlign: "center" }}>
        {content}
      </div>
    </Card>
  );
};

export default LfCard;
