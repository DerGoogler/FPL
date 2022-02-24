import React, { useRef } from "react";
import { Button, Card, Page } from "react-onsenui";
import AntwortActivity from "./AntwortActivity";
import MyToolbar from "./../components/Toolbar";
import Markdown from "markdown-to-jsx";
import useOnScreen from "../hooks/useOnScreen";

const LfActivity = ({ pushPage, popPage, lfData }) => {
  const ref = useRef();
  const titleHeaderRef = useRef();
  const isVisible = useOnScreen(ref);
  const isTitleHeaderVisible = useOnScreen(titleHeaderRef);

  const fragen = lfData.fragen.map((item) => (
    <Card key={item.nr}>
      <div className="title">Frage #{item.nr}</div>
      <div className="content">
        <div
          style={{
            display: "block",
          }}
        >
          <Markdown>{item.frage}</Markdown>
        </div>{" "}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            modifier="quiet"
            onClick={() => {
              pushPage(
                AntwortActivity,
                lfData.config.key,
                name,
                item.antwort,
                item.nr
              );
            }}
          >
            Antwort anzeigen
          </Button>
        </div>
      </div>
    </Card>
  ));

  return (
    <Page
      key={lfData.config.key}
      renderToolbar={() => (
        <MyToolbar
          modifier={isVisible && "noshadow"}
          title={!isTitleHeaderVisible && lfData.config.title}
          onBackButton={popPage}
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
        <span ref={titleHeaderRef}>{lfData.config.title}</span>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {fragen}
      </div>
    </Page>
  );
};

export default LfActivity;
