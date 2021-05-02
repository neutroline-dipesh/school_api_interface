import React from "react";
import styled from "styled-components";

const FactsContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 720px) {
    background-color: #f48518;
  }
`;

const FactMiddleColumn = styled.div`
  margin: 0;
  background-color: #f48518;
`;
const FactsHeading = styled.h4`
  margin: 0 5%;
  color: #fff;
  padding: 3% 0%;
  font-family: "Open Sans Condensed", sans-serif;
  font-size:40px;
  @media (max-width: 720px) {
    text-align: center;
    margin-top: 2%;
  }
`;

const IndividualFactContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const IndividualFact = styled.div`
  color: #fff;
  width: 200px;
  height: 200px;
  display: flex;
  margin: 0% 2%;
`;

const FactCompounder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;
const IndividualFactHeading = styled.div`
  font-size: 50px;
  font-weight: 900;

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

const IndividualFactPara = styled.div`
  margin-top: 1%;
  text-align: center;
`;
const Facts = () => {
  return (
    <div className="academicFacts">
      <FactsContainer>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <FactMiddleColumn>
              <FactsHeading>ACADEMIC FACTS</FactsHeading>
              <IndividualFactContainer>
                <IndividualFact>
                  <FactCompounder>
                    <IndividualFactHeading>ONLY</IndividualFactHeading>
                    <IndividualFactPara>
                      One of the best institution as per country ranking and
                      results.
                    </IndividualFactPara>
                  </FactCompounder>
                </IndividualFact>
                <IndividualFact>
                  <FactCompounder>
                    <IndividualFactHeading>78</IndividualFactHeading>
                    <IndividualFactPara>
                      Teaching and Non-Teaching staffs with more than 5 Years of
                      Experience.
                    </IndividualFactPara>
                  </FactCompounder>
                </IndividualFact>

                <IndividualFact>
                  <FactCompounder>
                    <IndividualFactHeading>2020</IndividualFactHeading>
                    <IndividualFactPara>
                      Awarded with the Title of <i>"Best School of the Year"</i>
                    </IndividualFactPara>
                  </FactCompounder>
                </IndividualFact>

                <IndividualFact>
                  <FactCompounder>
                    <IndividualFactHeading>1000+</IndividualFactHeading>
                    <IndividualFactPara>
                      PassOut students who are employed as well with 100k per
                      month.
                    </IndividualFactPara>
                  </FactCompounder>
                </IndividualFact>
              </IndividualFactContainer>
            </FactMiddleColumn>
          </div>

          <div className="col-1"></div>
        </div>
      </FactsContainer>
    </div>
  );
};

export default Facts;
