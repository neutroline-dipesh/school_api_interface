import React, { useState, useEffect } from "react";
import "./NoticeBody.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Jumbotron,
} from "reactstrap";
import NoticesAndEvents from "./NoticeAndEvent.json";
import EventBody from "./EventBody";
import { HiSpeakerphone } from "react-icons/hi";
import DefaultMidblock from "./DefaultMidblock";
import MidNotice from "./MidNotice";
import axios from "axios";
import moment from "moment";

function NoticeBody() {
  const [mouseOver, setMouseOver] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const notices = NoticesAndEvents.notices;
  const handleMouseOver = (id) => {
    setMouseOver(true);
    return setSelectedId(id);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  //getting data form database
  const [notice, setNotice] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/notice/").then((response) => {
      if (response.data) {
        setNotice(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(notice);

  return (
    <div className="noticeandupdate">
      <div className="notices">
        <h2 className="fas fa-bell"> Notices </h2>
        <br />
        {notice.map((item, index) => {
          return (
            <Card
              key={index}
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOut}
            >
              <CardHeader>
                {moment(item.notice_date).format("LL")}
                <br />
                <br />
                <br />
                <a className="fas fa-angle-right" href="/newsAndEvents">
                  {" "}
                  Details
                </a>
              </CardHeader>
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.notice_desc}</CardText>
              </CardBody>
            </Card>
          );
        })}

        <div className="full-calender">
          <Link to="/newsAndEvents"> See Full News..</Link>
        </div>
      </div>

      <div className="mid-block d-none d-lg-block">
        <Jumbotron>
          <h1 className="blockhead animate__animated animate__heartBeat animate__repeat-3">
            Notice & Events <HiSpeakerphone />{" "}
          </h1>
          <hr className="my-3" />
          <div className="default-mid">
            {mouseOver ? (
              <MidNotice selectedId={selectedId} />
            ) : (
              <DefaultMidblock />
            )}
          </div>
        </Jumbotron>
      </div>
      <EventBody />
    </div>
  );
}

export default NoticeBody;
