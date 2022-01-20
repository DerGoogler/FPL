import React from "react";
import {
  Button,
  Card,
  Col,
  Page,
  Row,
  ToolbarButton,
  Icon,
} from "react-onsenui";
import AboutActivity from "./AboutActivity";
import LfActivity from "./LfActivity";
import MyToolbar from "./../components/Toolbar";

// Feacher
import lf1 from "../data/lf1";
import lf2 from "../data/lf2";
import lf3 from "../data/lf3";
import lf4 from "../data/lf4";
import lf5 from "../data/lf5";
import lf6 from "../data/lf6";
import lf7 from "../data/lf7";
import lf8 from "../data/lf8";

const MainActivity = ({ pushPage }) => {
  return (
    <Page
      renderToolbar={() => (
        <MyToolbar
          modifier="noshadow"
          title=""
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
        Fachpraktiker Lager
      </div>
      <Card>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h3>1. Jahr</h3>
          <Row>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf1", lf1)}>
                Lernfeld 1
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf2", lf2)}>
                Lernfeld 2
              </Button>
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf3", lf3)}>
                Lernfeld 3
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf4", lf4)}>
                Lernfeld 4
              </Button>
            </Col>
          </Row>
          <h3>2. Jahr</h3>
          <Row>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf5", lf5)}>
                Lernfeld 5
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf6", lf6)}>
                Lernfeld 6
              </Button>
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf7", lf7)}>
                Lernfeld 7
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf8", lf8)}>
                Lernfeld 8
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </Page>
  );
};

export default MainActivity;
