import React from "react";
import Button from "../Buttons/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { common } from "../../assets/js/common";
import datas from "./announcement.json";

import styled from "styled-components";

const AnnouncementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 80vh;
  text-align: center;
  background: linear-gradient(
    137deg,
    rgba(255, 255, 255, 0.7) 10%,
    rgba(78, 164, 252, 1)
  );

  h1 {
    color: rgb(43, 107, 204);
    width: 100%;
    font-family: ${common.fontOne};
    font-size: 2.5em;
    font-weight: 900;
  }
  p {
    font-family: ${common.fontTwo};
    font-size: 1em;
    font-weight: 500;
    font-style: unset;
    padding: 5px;
  }

  .slick-dots {
    width: inherit;
    text-align: center;
  }
  .slick-slider {
    width: 100%;
  }

  .body-btns {
    margin: 4em 0em;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    z-index: 5;
    background: none;
    h1 {
      padding: 0em 0.3em;
      text-align: start;
      color: rgb(238 242 14);
      width: auto;
    }
    p {
      padding: 0em 0.3em;

      text-align: start;
      color: #fff;
      width: 100%;
    }

    .body-btns {
      display: none;
    }
  }
`;

/* const schoolMessage = [
  {
    id: 1,
    heading: "Announcement !",
    message:
      " The school will be conducting two shifts i.e. Morning and Evening from today onwards.",
  },
  {
    id: 2,
    heading: "Admission Open!",
    message: " The School will remain closed till 11th Kartik.",
  },
];
*/
const schoolMessage = datas;

function Announcement() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    className: "message-slides",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <AnnouncementContainer>
      <Slider {...settings}>
        {schoolMessage.map((message) => {
          return (
            <div className="message-body" key={message.id}>
              <h1>{message.heading}</h1>
              <br></br>
              <p> {message.message}</p>
              <br></br>
            </div>
          );
        })}
      </Slider>
    </AnnouncementContainer>
  );
}

export default Announcement;

/*
      <div className="body-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Learn More
        </Button>
      </div>
*/
