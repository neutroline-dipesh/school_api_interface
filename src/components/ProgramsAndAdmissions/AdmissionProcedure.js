import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import { BsDownload } from "react-icons/bs";

const ProceduralAdmissionContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url("https://www.transparenttextures.com/patterns/dimension.png");
`;

const ProceduresSection = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-left: 3%;
    color: #68cd7b;
    font-weight: 900;
    font-family: "Open Sans Condensed", sans-serif;
  }
  h4 {
    margin-left: 3%;
    font-family: "Open Sans Condensed", sans-serif;
  }
  p {
    margin-left: 3%;
    font-family: "Noto Serif", serif;
  }

  ul,
  li {
    list-style-type: disc;
    font-family: "Noto Serif", serif;
  }

  .download-form {
    text-align: center;
    font-family: "Montserrat";
    font-size: 1em;
    font-weight: 700;
    color: #ffcb06;
    cursor: pointer;
  }
`;

const SpecialInfo = styled.div`
  margin-top: 3%;
  font-family: "Montserrat", sans-serif;
  font-style: italic;
  font-size: 1em;
  text-align: center;
`;

const AdmissionProcedure = () => {
  return (
    <ProceduralAdmissionContainer>
      <CommonHeader title="NEW ADMISSION" />
      <ProceduresSection className="row">
        <h3>Admission Procedures</h3>
        <h4>1. Age criteria for admissions</h4>
        <p>Nursery: 2+ years on 15th January (Magh 1) of the year.</p>
        <br />
        <h4>2. Registration process</h4>
        <p>
          Download admission form or collect it in person from the school
          reception.
        </p>
        <br />
        <h4>
          3. After application, candidates will be notified of a date and time
          for a formal test
        </h4>
        <p>
          <ul>
            <li>
              Nursery - III: Interactive assessment of the child accompanied by
              the parents/guardians
            </li>
            <li>
              Grades IV and V: Written test in English, Maths and Nepali
              followed by interview
            </li>
            <li>
              Grades VI to VIII: Written test in English, Maths and Nepali
              followed by interview
            </li>
            <li>
              Grades IX and X: Written test in English, Maths and Nepali
              followed by interview
            </li>
          </ul>
        </p>
        <h4>4. Accepted students</h4>
        <p>
          <ul>
            <li>
              Parents / Guardians, please complete our admission form and submit
              to the school along with the following:
            </li>
            <li>2 colour passport-sized photographs</li>
            <li>Attested copy of birth certificate</li>
            <li>
              Transfer Certificate (T.C.) of previous school for class 2
              onwards. No T.C. is required for admission of pre-primary
            </li>
            <li>
              Attested copy of previous class mark sheet for admission to Grades
              LKG and above
            </li>
            <li>
              Download admission form or collect it in person from the school
              reception.
            </li>
          </ul>
        </p>

        <section className="download-form">
          Get Admission Form &nbsp;
          <BsDownload style={{ fontSize: "1.4em" }} />
        </section>

        <SpecialInfo>
          {" "}
          If you have any queries regarding admissions please feel free to
          contact at 071-577820 or info@Neutroline.com.np
        </SpecialInfo>
      </ProceduresSection>
    </ProceduralAdmissionContainer>
  );
};

export default AdmissionProcedure;
