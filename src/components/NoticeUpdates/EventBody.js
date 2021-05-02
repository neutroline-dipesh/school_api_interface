import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import NoticeAndEvent from "./NoticeAndEvent.json";
import "./EventBody.css";
import {Link} from "react-router-dom";

function EventBody() {
  const events = NoticeAndEvent.events;
  return (
    <div className="events">
      <h2 className="fas fa-calendar-alt"> Events </h2>
      <br />
      {events.map((eve, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              {eve.date}
              <br />
              <br />
              <br />
              <a className="fas fa-angle-right" href="/noticeAndEvents">
                {" "}
                Details
              </a>
            </CardHeader>
            <CardBody>
              <CardTitle>{eve.heading}</CardTitle>
              <CardText>{eve.description}</CardText>
            </CardBody>
          </Card>
        );
      })}

      <div className="full-events">
      <Link to="/newsAndEvents"> View all events...</Link>
      </div>
    </div>
  );
}

export default EventBody;
