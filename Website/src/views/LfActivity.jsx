import React from "react";
import { Button, Card, Page } from "react-onsenui";
import AntwortActivity from "./AntwortActivity";
import MyToolbar from "./../components/Toolbar";
import Markdown from "markdown-to-jsx";

const LfActivity = ({ pushPage, popPage, lfData }) => {
  const fragen = lfData.fragen.map((item) => (
    <Card>
      <div className="title">Frage</div>
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
              pushPage(AntwortActivity, "lf1", name, item.antwort);
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
        <MyToolbar title={lfData.config.title} onBackButton={popPage} />
      )}
    >
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
