import React from "react";
import { Card, Page } from "react-onsenui";
import Markdown from "markdown-to-jsx";
import MyToolbar from "./../components/Toolbar";

const AntwortActivity = ({ pushPage, popPage, antwort, nr }) => {
  return (
    <Page
      renderToolbar={() => (
        <MyToolbar title={"Antwort zu #" + nr} onBackButton={popPage} />
      )}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Card>
          <div className="markdown-body">
            <Markdown>{antwort}</Markdown>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default AntwortActivity;
