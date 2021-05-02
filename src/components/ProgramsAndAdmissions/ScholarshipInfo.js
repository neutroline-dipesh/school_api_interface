import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import { GiLaurelsTrophy } from "react-icons/gi";

const ScholarshipInfoContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url("https://www.transparenttextures.com/patterns/dimension.png");
`;

const ProceduresSection = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 2%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 2.5em;
    color: #68cd7b;
    font-weight: 900;
    font-family: "Open Sans Condensed", sans-serif;
  }
  h4 {
    font-family: "Open Sans Condensed", sans-serif;
  }
  p {
    font-family: "Noto Serif", serif;
    text-align: justify;
  }

  ul,
  li {
    list-style-type: disc;
    font-family: "Noto Serif", serif;
  }
`;
const SpecialInfo = styled.div`
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 1em;
  text-align: center;
`;

const HeadLogo = styled.div`
  margin-top: -40px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScholarshipInfo = () => {
  return (
    <ScholarshipInfoContainer>
      <CommonHeader title="MERITS & SCHOLARSHIPS" logo />
      <ProceduresSection className="row">
        <HeadLogo>
          <h3>CRITERIA FOR SCHOLARSHIPS</h3>
          <span>
            <GiLaurelsTrophy
              style={{
                color: "#FFE647",
                fontSize: "200px",
                paddingLeft: "15%",
              }}
            />
          </span>
        </HeadLogo>
        <br />
        <h4>1. ACADEMICS</h4>
        <p>
          A full scholarship on tuition fees is awarded every year to students
          who are financially needy but are intelligent and hardworking.
        </p>
        <br />
        <h4>2. ECA</h4>
        <p>
          A partial scholarship on tuition fees is awarded to students who excel
          in games, sports and other activities conducted within the school or
          in Inter-School, District or National level competitions.
        </p>
        <br />
        <SpecialInfo>
          {" "}
          If you have any queries regarding scholarship, please feel free to
          contact at info@Neutroline.com.np or 071-577820.
        </SpecialInfo>
      </ProceduresSection>
    </ScholarshipInfoContainer>
  );
};

export default ScholarshipInfo;
