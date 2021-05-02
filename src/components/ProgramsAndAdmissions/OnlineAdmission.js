import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import EnquiryAndAdmissionButton from "./EnquiryAndAdmissionButton";

const FullPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height:auto;
  }
`;

const NewAdmissionBodyContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 80vh;
  background: #fff;
  display: flex;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    height:auto;
  }
`;

const AdmissionImageSection = styled.img`
  width: 50%;
  background-image: linear-gradient(
    to right,
    rgba(120, 204, 220, 1),
    rgba(120, 204, 220, 1)
  );

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AdmissionDetailSection = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const DetailHeading = styled.div`
  padding: 2%;
  background-color: #ffe647;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h3 {
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 2em;
  }
  h4 {
    font-family: "Open Sans Condensed", sans-serif;
  }
  p {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-size: 1em;
  }
`;
const DetailDescription = styled.div`
  padding: 2%;
  text-align: justify;
`;

const OnlineAdmission = () => {
  return (
    <FullPageContainer>
      {" "}
      <CommonHeader title="ONLINE ADMISSION" />
      <NewAdmissionBodyContainer>
        <AdmissionImageSection src="./images/onlineadmit.png"></AdmissionImageSection>
        <AdmissionDetailSection>
          <DetailHeading>
            <h3>Contact Us </h3>
            <h4>Admission Office</h4>
            <p>admissions@neutroline.com.np</p>
            <p>061-410257</p>
          </DetailHeading>
          <DetailDescription>
            <p>
              Neutroline School admits students of any race, color, religion,
              national and ethnic origin or other legally protected status to
              all the rights, privileges, programs and activities generally
              accorded or made available to students at the school. It does not
              discriminate on the basis of race, color, religion, national and
              ethnic origin or other legally protected status in its hiring or
              in the administration of its educational policies and programs,
              admissions policies, financial aid programs or other
              school-administered programs.
            </p>
            <EnquiryAndAdmissionButton />
          </DetailDescription>
        </AdmissionDetailSection>
      </NewAdmissionBodyContainer>
    </FullPageContainer>
  );
};

export default OnlineAdmission;
