import React from "react";
import styled from "styled-components";
import Announcement from "./Announcement";
import HomeCarousel from "./HomeCarousel";

const LandingPageContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 80vh;
  display: flex;
  background-color: #CAD5E7;


  Body,
  HomeCarousel {
    align-items: center;
    justify-content: center;
  }
`;

const HomePage = () => {
  return (
    <LandingPageContainer>
      <Announcement />
      <HomeCarousel />
    </LandingPageContainer>
  );
};

export default HomePage;
