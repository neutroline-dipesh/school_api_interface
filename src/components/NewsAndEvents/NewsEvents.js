import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LandingCarousel from "./Carousel";
import News from "./News";
import news from "./newsdata.json";
import axios from "axios";

const LandingPageContainer = styled.div`
  width: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0% 12%;

  @media (max-width: 720px) {
    margin: 0;
    padding: 1em;
  }
`;

const NewsAndEventsHeading = styled.div`
  height: auto;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 3em;
  color: #ffcb06;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const SubHeading = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  display: flex;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 2em;
  padding: 1.5em 0 0.5em 0;

  @media (max-width: 720px) {
  }
`;

const slidingImages = news.slidingImages;

const NewsEvents = () => {
  const [newsEvent, setNewsEvent] = useState([]);
  const fetchData = async () => {
    axios.get("http://localhost:4000/newsEvent/").then((response) => {
      if (response.data) {
        setNewsEvent(response.data.data);
      } else {
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(newsEvent);
  const newsdata = news.newsdata;
  return (
    <LandingPageContainer>
      <NewsAndEventsHeading> News & Events</NewsAndEventsHeading>
      <LandingCarousel items={slidingImages} />
      <SubHeading>
        {" "}
        Recent News <hr></hr>
      </SubHeading>

      {newsEvent.map((item) => {
        return (
          <News
            key={item._id}
            id={item._id}
            image={item.news_image}
            date={item.news_date}
            title={item.news_title}
            detail={item.recent_news}
            path={item.path}
          />
        );
      })}
    </LandingPageContainer>
  );
};

export default NewsEvents;
