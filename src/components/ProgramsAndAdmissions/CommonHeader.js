import React from "react";
import styled from "styled-components";
import { common } from "../../assets/js/common";
import { Link } from "react-router-dom";

const NewAdmissionHeaderContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 20vh;
  background-color: ${(props) => (props.diffback ? "#000" : "#fff")};
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");
  position: relative;
  h1 {
    height: 100%;
    width: 100%;
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 3em;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffcb06;
  }

  .back-linkicon {
    position: absolute;
    right: 2%;
    top: 50%;
    transform: translate(-0%, -50%);
    font-size: 2em;
    color: ${common.primary};

    @media (max-width: 480px) {
      right: 2%;
      top: 10%;
      transform: translate(-0%, -20%);
    }
  }
`;

const CommonHeader = (props) => {
  return (
    <NewAdmissionHeaderContainer className="row">
      <h1>{props.title} </h1>
      <section className="back-direct">
        <Link className="back-linkicon" to="programsAndAdmissions">
          <i class="fas fa-arrow-alt-circle-left"></i>
        </Link>
      </section>
    </NewAdmissionHeaderContainer>
  );
};

export default CommonHeader;
