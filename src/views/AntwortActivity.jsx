import React from "react";
import { Card, Page } from "react-onsenui";
import Markdown from "markdown-to-jsx";
import MyToolbar from "./../components/Toolbar";

const AntwortActivity = ({ pushPage, popPage, antwort }) => {
  return (
    <Page
      renderToolbar={() => (
        <MyToolbar title={"Antwort"} onBackButton={popPage} />
      )}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Card>
          <Markdown>{antwort}</Markdown>
        </Card>
      </div>
    </Page>
  );
};

export default AntwortActivity;
