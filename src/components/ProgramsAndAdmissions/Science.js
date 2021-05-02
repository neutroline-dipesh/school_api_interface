import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import EnquiryAndAdmissionButton from "./EnquiryAndAdmissionButton";
import Grade from "./Grade";

const ScienceProgramContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: auto;
`;

const ScienceInfoSection = styled.div`
  width: 100%;
  height: auto;
  padding: 3%;

  h4 {
    font-family: "Open Sans Condensed", sans-serif;
    color: #ffc800;
  }
  p {
    font-family: "Noto Serif", serif;
    font-size: 1em;
  }
`;
const SyllabusSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;

const ManagementInfoSection = styled.div`
  width: 100%;
  height: auto;
  padding: 3%;

  h4 {
    font-family: "Open Sans Condensed", sans-serif;
    color: #ffc800;
  }
  p {
    font-family: "Noto Serif", serif;
    font-size: 1em;
  }
`;
const Science = () => {
  return (
    <ScienceProgramContainer>
      <CommonHeader title="SCIENCE" />
      <ScienceInfoSection>
        <h4>+2 Programs (NEB)</h4>
        <p>
          The college offers excellent +2 programs and management. College
          carefully focuses on career pathways, course relevance, continuous
          encouragement, unparallel learning opportunities, counseling services,
          preparation courses and further support.
        </p>
        <br />

        <h4>Science</h4>
        <p>
          College offers science stream in grade XI and XII with a package of
          pre-medical/engineering/IT classes to support students career in
          medical,engineering and IT fields.
        </p>
        <SyllabusSection>
          <Grade
            grade="Grade XI"
            compulsary="Compulsary Subjects"
            optional="Optional Subjects"
          />
          <Grade
            grade="Grade XII"
            compulsary="Compulsary Subjects"
            optional="Optional Subjects"
          />
        </SyllabusSection>
      </ScienceInfoSection>
      <EnquiryAndAdmissionButton inline />
    </ScienceProgramContainer>
  );
};

export default Science;
