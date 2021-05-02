import React from "react";
import styled from "styled-components";
import { common } from "../../assets/js/common";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const SchoollevelContainer = styled.div`
  height: auto;
  width: 90%;
  margin: 0% 5%;
  display: flex;
  flex-direction: column;
`;

const LevelHeading = styled.div`
  height: auto;
  padding: 2em 0em;
  .level-title {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 2em;
    color: ${common.primary};
  }

  display: flex;
  justify-content: space-between;

  .back-linkicon {
    text-decoration: none;
    font-size: 2em;
    color: ${common.primary};
  }
`;

const LevelTopSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;

  @media (max-width: 1140px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const LevelDescription = styled.div`
  width: 55%;
  height: inherit;

  .level-detail {
    font-family: ${common.fontTwo};
    font-size: 1em;
    text-align: justify;
  }

  @media (max-width: 1140px) {
    width: 100%;
    padding-bottom: 0.5em;
  }
`;
const LevelImage = styled.div`
  width: 40%;

  img {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const LevelBottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;

  @media (max-width: 1140px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const BottomImageSection = styled.div`
  width: 40%;

  img {
    width: 500px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const BottomDetailSection = styled.div`
  padding: 2em 0em;
  width: 55%;
  height: inherit;

  .level-detail {
    font-family: ${common.fontTwo};
    font-size: 1em;
    text-align: justify;
  }

  @media (max-width: 1140px) {
    width: 100%;
    padding-bottom: 0.5em;
  }
`;

function SchoolLevels(props) {
  return (
    <SchoollevelContainer>
      <LevelHeading>
        <section className="level-title">{props.title}</section>
        <section className="back-direct">
          <Link className="back-linkicon" to="programsAndAdmissions">
            <i class="fas fa-arrow-alt-circle-left"></i>
          </Link>
        </section>
      </LevelHeading>
      <LevelTopSection>
        <LevelDescription>
          <section className="level-detail">{props.topdetail}</section>
        </LevelDescription>
        <LevelImage className="academic-information">
          <img src={props.image1} alt="kids"></img>
        </LevelImage>
      </LevelTopSection>
      <LevelBottomSection>
        <BottomImageSection className="academic-information">
          <img src={props.image2} alt="students"></img>
        </BottomImageSection>
        <BottomDetailSection>
          <section className="level-detail">{props.footdetail}</section>
        </BottomDetailSection>
      </LevelBottomSection>
    </SchoollevelContainer>
  );
}
export default SchoolLevels;
