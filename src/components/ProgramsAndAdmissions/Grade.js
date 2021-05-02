import React from "react";
import styled from "styled-components";
import { elevenSciSubjects } from "./ScienceSubjects";
import { BsAward } from "react-icons/bs";

const Syllabus = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CompSub = styled.div`
  width: 90%;
  height: 10vh;
  background: #fbfb1b;
  color: #000;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubjectLists = styled.div`
font-weight:700;
padding:5% 0% 0% 5%;
`;

const OptSub = styled.div`
  width: 90%;
  height: 10vh;
  background: #fbfb1b;
  color: #000;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grade = (props) => {
  return (
    <Syllabus>
      <h4>
        <BsAward /> {props.grade}{" "}
      </h4>
      <CompSub>{props.compulsary}</CompSub>
      <SubjectLists>
        <ol>
          {elevenSciSubjects.map((sub, index) => {
            return <li>{sub.compulsary[index]}</li>;
          })}
        </ol>
      </SubjectLists>
      <OptSub>{props.optional} </OptSub>
      <SubjectLists>
        {elevenSciSubjects.map((sub, index) => {
          return (
            <ol>
              <li>{sub.optional[index]}</li>
            </ol>
          );
        })}
      </SubjectLists>
    </Syllabus>
  );
};

export default Grade;
