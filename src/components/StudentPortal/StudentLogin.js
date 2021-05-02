import React from "react";
import styled from "styled-components";
import StudentPortalForm from "./StudentPortalForm";
import StudentPortalImage from "./StudentPortalImage";
import { Row, Col } from "react-bootstrap";
import "../StudentPortal/studentPortalForm.css";
import Mobilesidebar from "../../assets/js/Mobilesidebar";
const PortalContainer = styled.div`
  padding: 2em;
  box-sizing: border-box;
  width: 100%;

  .studentPortalImage {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

function StudentLogin() {
  return (
    <PortalContainer>
      <div className="heading">
        <h1> Student Portal</h1>
      </div>
      <Row className="portal">
        <Col>
          <StudentPortalForm />
        </Col>

        <Col className="studentPortalImage">
          <StudentPortalImage />
        </Col>
      </Row>
    </PortalContainer>
  );
}

export default StudentLogin;
