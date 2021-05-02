import React from "react";
import styled from "styled-components";
import AdmissionDropDown from "./AdmissionDropDown";
const IntroRowContainer = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 0;
  padding: 3% 0%;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  @media (max-width: 1180px) {
    height: auto;
  }

  @media (max-width: 720px) {
    .col-7 {
      column-width: 100%;
    }
    .col-1 {
      display: none;
    }
    .col-3 {
      display: none;
    }
  }
`;

const IntroHeading = styled.div`
  margin: 0;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 50px;
  font-weight: 1000;
  color: #ffc800;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    text-align:center;
    padding: 0 0.5em;
  }
`;

const IntroDescription = styled.div`
  margin: 0;
  padding: 0;
  font-family: "Noto Serif", serif;
  font-size: 20px;
  text-align: justify;
  line-height: 1.4;
  font-weight: 500;
  word-wrap: break-word;

  @media (max-width: 768px) {
    padding:0 1em;
  }
`;

const DropDownInfo = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 720px) {
    display: none;
    .col-3 {
      display: none;
    }
  }
`;

const TopSection = () => {
  return (
    <div className="programAndAdmissionPage">
      <IntroRowContainer>
        <div className="row">
          <div className="col-1"></div>
          <div className=" academicsDescription col-12 col-md-7">
            <IntroHeading>ACADEMICS</IntroHeading>
            <IntroDescription>
              The unique research- and inquiry-based educational process for
              boys and girls at Lausanne Collegiate School includes small class
              sizes; inspiring and supportive faculty; and the advantage of
              sharing diverse cultures, experiences, opinions and interests.
              <br />
              <br /> The renowned International Baccalaureate Programme and wide
              range of extra-curricular activities give Lausanne students a
              competitive edge in the college admission process as well as the
              skills and attributes necessary to explore and find success in a
              global environment.
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </IntroDescription>
          </div>
          <DropDownInfo className="col-3 d-none d-md-block">
            <AdmissionDropDown />
          </DropDownInfo>

          <div className="col-1"></div>
        </div>
      </IntroRowContainer>
    </div>
  );
};

export default TopSection;
