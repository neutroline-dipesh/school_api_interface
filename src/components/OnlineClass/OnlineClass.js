import "./onlineclass.css";
import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Row, Col } from "react-bootstrap";

function onlineclass() {
  return (
    <div className="online-loginpage">
      <div className="heading">
        <h1> Online Class </h1>
      </div>
      <Row className="landing">
        <Col>
          <LeftSide />
        </Col>

        <Col className="rightSideImage">
          <RightSide />
        </Col>
      </Row>
    </div>
  );
}

export default onlineclass;
