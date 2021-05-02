import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/pictures/acadback.jpg";

const AcadParallaxContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 60vh;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const AcadParallaxContainerFilter = styled.div`
  margin: 0;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AcademicMessage = styled.div`
  margin: 0;
  position: absolute;
  background: #6d665c;
  padding: 10px;
  width: 350px;
  height: 200px;
  color: #fff;
  // color: #ffc800;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AIParallax = () => {
  return (
    <AcadParallaxContainer>
      <AcadParallaxContainerFilter>
        {" "}
        <AcademicMessage>Academic Achievements</AcademicMessage>
      </AcadParallaxContainerFilter>
    </AcadParallaxContainer>
  );
};
