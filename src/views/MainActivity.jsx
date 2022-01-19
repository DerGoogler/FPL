import React from "react";
import { Button, Card, Col, Page, Row } from "react-onsenui";

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
    <Page renderToolbar={() => <MyToolbar title="FPL" />}>
      <Card
        style={{
          padding: "0px",
          paddingBottom: "0.5px",
        }}
      >
        <div
          style={{
            padding: "50px",
            textAlign: "center",
            backgroundColor: "#f55613",
            color: "white",
            fontSize: "30px",
            borderRadius: "8px 8px 0px 0px",
          }}
        >
          Fachparaktiker Lager
        </div>
        <div
          style={{
            textAlign: "center",
            margin: 10,
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
                Lernfach 1
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf2", lf2)}>
                Lernfach 2
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
                Lernfach 3
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf4", lf4)}>
                Lernfach 4
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
                Lernfach 5
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf6", lf6)}>
                Lernfach 6
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
                Lernfach 7
              </Button>
            </Col>
            <Col
              style={{
                padding: "8px",
              }}
            >
              <Button onClick={() => pushPage(LfActivity, "lf8", lf8)}>
                Lernfach 8
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
    </Page>
  );
};

export default MainActivity;
