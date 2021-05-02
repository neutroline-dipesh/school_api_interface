import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import NoticeAndEvent from "./NoticeAndEvent.json";
import "./EventBody.css";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

function EventBody() {
  const events = NoticeAndEvent.events;

  //getting data form database
  const [event, setEvent] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/event/").then((response) => {
      if (response.data) {
        setEvent(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(event);
  return (
    <div className="events">
      <h2 className="fas fa-calendar-alt"> Events </h2>
      <br />
      {event.map((item, index) => {
        return (
          <Card key={index}>
            <CardHeader>
              {moment(item.event_date).format("LL")}
              <br />
              <br />
              <br />
              <a className="fas fa-angle-right" href="/noticeAndEvents">
                {" "}
                Details
              </a>
            </CardHeader>
            <CardBody>
              <CardTitle>{item.title}</CardTitle>
              <CardText>{item.event_desc}</CardText>
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
