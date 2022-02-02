import React, { useRef } from "react";
import { Card, Page, ToolbarButton, Icon } from "react-onsenui";
import AboutActivity from "./AboutActivity";
import LfActivity from "./LfActivity";
import MyToolbar from "./../components/Toolbar";
import lists from "../data/lists";
import useOnScreen from "../hooks/useOnScreen";

const MainActivity = ({ pushPage }) => {
  const ref = useRef();
  const titleHeaderRef = useRef();
  const isVisible = useOnScreen(ref);
  const isTitleHeaderVisible = useOnScreen(titleHeaderRef);

  const cards = lists.map((item) => (
    <>
      {(() => {
        if (item.options.display) {
          return (
            <Card
              onClick={() => pushPage(LfActivity, item.title, item.fach)}
              style={{
                boxShadow: "none",
                border: "2px solid #f55613",
              }}
            >
              <div className="title" style={{ textAlign: "center" }}>
                {item.title}
              </div>
              <div className="content" style={{ textAlign: "center" }}>
                {item.content}
              </div>
            </Card>
          );
        } else {
          return;
        }
      })()}
    </>
  ));
  return (
    <Page
      renderToolbar={() => (
        <MyToolbar
          modifier={isVisible && "noshadow"}
          title={!isTitleHeaderVisible && "FPL"}
          buttons={
            <div className="right">
              <ToolbarButton
                onClick={() => {
                  pushPage(AboutActivity, "about", "", "");
                }}
              >
                <Icon icon="md-file"></Icon>
              </ToolbarButton>
            </div>
          }
        />
      )}
    >
      <div
        ref={ref}
        style={{
          padding: "50px",
          paddingTop: "6px",
          textAlign: "center",
          backgroundColor: "rgb(245, 86, 19)",
          color: "white",
          fontSize: "30px",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 5px",
        }}
      >
        <span ref={titleHeaderRef}>Fachpraktiker Lager</span>
      </div>
      <Card>{cards}</Card>
    </Page>
  );
};

export default MainActivity;
