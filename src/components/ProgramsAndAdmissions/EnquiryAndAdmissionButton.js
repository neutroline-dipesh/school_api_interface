import React from "react";
import styled from "styled-components";
import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const AdmissionButtonContainer = styled.div`
  box-sizing: border-box;
  padding-top: 5%;
  width: ${({ inline }) => (inline ? "50%" : "100%")};
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .enquiry-button {
    color: #fff;
    text-decoration: none;

    &:hover{
      color:#000;
    }
  }
`;
const EnquiryAndAdmissionButton = (props) => {
  return (
    <AdmissionButtonContainer>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        <Link className="enquiry-button" to="contactUs">
          {" "}
          Enquiry{" "}
        </Link>
      </Button>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        <Link className="enquiry-button" to="onlineApplication">
          ONLINE ADMISSION
        </Link>
      </Button>
    </AdmissionButtonContainer>
  );
};

export default EnquiryAndAdmissionButton;
