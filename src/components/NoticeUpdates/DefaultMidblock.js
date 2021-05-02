import React from "react";
import "./DefaultMidblock.css";
import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import noticeandevent from "./NoticeandEventData";

function DefaultMidblock() {
  return (
    <div className="defmid-block">
      <OwlCarousel className="owl-theme" items="1" autoplay dots loop>
        {noticeandevent.map((item,index) => {
          return (
            <Card id={item.id} key={index}>
              <CardHeader>{item.date}</CardHeader>
              <CardBody>
                <CardTitle>{item.heading}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default DefaultMidblock;
