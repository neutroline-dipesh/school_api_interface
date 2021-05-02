import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import EnquiryAndAdmissionButton from "./EnquiryAndAdmissionButton";
import Grade from "./Grade";

const ManagementProgramContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: auto;
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

const SyllabusSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;

const Management = () => {
  return (
    <ManagementProgramContainer>
      <CommonHeader title="Management" />

      <ManagementInfoSection>
        <h4>Management</h4>
        <p>
          College offers Management stream with ample exposure to the business
          environment through excursion, industrial visit and parallel training.
          Focus of college will be to prepare students fir for IT, Hotel
          Management, and Business education in Bachelor level.
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
      </ManagementInfoSection>
      <EnquiryAndAdmissionButton inline />
    </ManagementProgramContainer>
  );
};

export default Management;
