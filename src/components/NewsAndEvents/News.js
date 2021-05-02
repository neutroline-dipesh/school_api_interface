import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const NewsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0em;

  @media (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const NewsImageSection = styled.div`
  padding: 1em;

  img {
    width: 300px;
    height: 200px;
  }
`;
const NewsDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
`;

const NewsHead = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .newsDate {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 0.8em;
  }

  .headTitle {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 2em;
    color: #ffcb06;

    @media (max-width: 768px) {
      font-size: 1.7em;
      padding-bottom: 0.3em;
    }
  }
`;

const NewsBody = styled.div`
  font-family: "Noto Serif", serif;
  font-size: 1em;
  text-align: justify;
  margin-bottom: 2em;
`;

const NewsFooter = styled.div`
  .news-readmore {
    text-decoration: none;
    color: #ffcb06;
    border-bottom: 1px solid #ffcb06;
  }
`;

const News = (props) => {
  return (
    <NewsContainer key={props.id}>
      <NewsImageSection>
        <img src={props.image}></img>
      </NewsImageSection>
      <NewsDetailSection>
        <NewsHead>
          <section className="newsDate"> {props.date}</section>
          <section className="headTitle">{props.title}</section>
        </NewsHead>
        <NewsBody>
          <section>{props.detail}</section>
        </NewsBody>
        <NewsFooter>
          <Link to={props.path} className="news-readmore">
            Read More
          </Link>
        </NewsFooter>
      </NewsDetailSection>
    </NewsContainer>
  );
};

export default News;
