import React from "react";
import styled from "styled-components";
import CommonHeader from "./CommonHeader";
import SingleDropDown from "./SingleDropDown";

const FormalitiesPageContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: hidden;

  background-image: url("./images/formalities1.jpg");
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 1000px 650px;

  @media (max-width: 720px) {
    background-position: center bottom;
  }
`;
const FormalitiesDetailAndImageContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FormalitiesDetailSection = styled.div`
  width: 50%;
  padding: 3%;
  height: auto;
  ol,
  li {
    font-family: "Roboto", serif;
    line-height: 1.5;
    font-size: 0.9em;
  }
`;

const Formalities = () => {
  return (
    <FormalitiesPageContainer>
      <CommonHeader title="FORMALITIES" />
      <FormalitiesDetailAndImageContainer className="row">
        <FormalitiesDetailSection>
          <SingleDropDown
            topic="Discipline"
            mainid="togglerOne"
            idref="#togglerOne"
            ruleOne="All the students are expected to show exemplary behavior at all
        times within as well as outside the school campus. All students
        will be accountable to the school authorities for their conduct."
            ruleTwo="Students involved in or inciting fights or found using tobacco
        or intoxicants or other types of indiscipline will be subject to
        severe disciplinary action which may lead to expulsion from the
        school."
            ruleThree=" Students are prohibited from bringing mobile phones or
        electronic gadgets or accessories. It will be confiscated."
            ruleFour="Students are to bring their school diary every day and keep a
        proper record of Homework, which has to be signed by the teacher
        and the parent/ guardian."
            ruleFive="Students found bullying, borrowing money, using vulgar and
        abusive language, deliberately disfiguring or damaging school
        property will face stern disciplinary action. The student may
        also be charged a fine to recover the cost of damage or repair
        of property. IN CASE OF DAMAGE CAUSED IN THE SCHOOL BUS THE BUS
        FACILITY WILL BE WITHDRAWN."
            ruleSix="All students whether Hosteller (red tag): Walker (green tag) or
        School Bus Users (blue tag); require to have the ID tag
        displayed prominently (worn around the neck) for proper
        identification. Prefects and Sub-Prefects are given a special ID
        Tag.."
          />
          <SingleDropDown
            topic="Attendance & Absenteeism"
            mainid="togglerTwo"
            idref="#togglerTwo"
            ruleOne="All students are required to be regular in attendance and be punctual. Except in case of illness or emergent and unforeseen circumstances the student is expected to be present. In case of illness extending over two days, a copy of the prescription will have to be produced to substantiate the claim.
          "
            ruleTwo="The absence needs to be recorded in the school diary. In case of absence of more than three days a written application has to be submitted to the Block-in-charge.
          "
            ruleThree="Prior permission for leave must be obtained for any other valid reason not falling under the category of an emergency. In such a case the student may be permitted leave depending on the reason but covering the missed lessons and homework will be the sole responsibility of the student. There is no provision for conducting any test or exam missed by the student due to absence for any reason.
          "
          />

          <SingleDropDown
            topic="Parent-Teacher Meeting"
            mainid="togglerThree"
            idref="#togglerThree"
            ruleOne="A cordial relationship among the school, parents and students is very crucial for the development of a child’s full potential. Therefore, parent-teacher meetings are held in the school from time to time to share information about the students’ activities, their personal growth and academic progress so that necessary steps can be taken for their further improvements. In addition, special meetings with individual subject teachers are also arranged for parents on their request to discuss their ward’s progress in his/her studies. Any suggestion from parents and guardians is always welcome, and will be taken as instrumental in bringing a positive change to the student.

          "
          />

          <SingleDropDown
            topic="Syllabus"
            mainid="togglerFour"
            idref="#togglerFour"
            ruleOne="The syllabus implemented in the school is a combination of the National Education System and the best aspects of the western system of education so that children not only develop nationalistic feelings but also grow with broader outlook from a tender age, and become competent to face challenges in life beyond the high school. The higher classes follow the syllabus as per the directives of the Ministry of Education. The students are provided with the detailed break-up of the syllabus at the beginning of each academic session. The medium of instruction and communication is English except for Nepali lessons.

          "
          />
        </FormalitiesDetailSection>
      </FormalitiesDetailAndImageContainer>
    </FormalitiesPageContainer>
  );
};

export default Formalities;
