import React from "react";
import "./DefaultMidblock.css";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import NoticeAndEvent from "./NoticeAndEvent.json";

function MidNotice(props) {
  const notices = NoticeAndEvent.notices;
  return (
    <div className="defmid-block">
      <Card id={notices[props.selectedId].id}>
        <CardHeader>{notices[props.selectedId].date}</CardHeader>
        <CardBody>
          <CardTitle>{notices[props.selectedId].heading}</CardTitle>
          <CardText>{notices[props.selectedId].description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default MidNotice;
